import { SucraseContext } from 'sucrase';
import { TokenProcessor, type CJSImportProcessor, tt } from './parser.js';

export type Import = {
  code: string;
  source: string;
  base: null | string;
  keys: Array<{ local: string; imported: string }>;
};

export default class ImportRemoverTransformer {
  tokens: TokenProcessor;
  importProcessor: CJSImportProcessor;

  imports: Import[] = [];
  private readonly removeImports: boolean;
  private readonly processedPaths = new Set<string>();

  constructor(
    context: SucraseContext,
    { removeImports }: { removeImports?: boolean }
  ) {
    this.tokens = context.tokenProcessor;
    this.importProcessor = context.importProcessor!;
    this.removeImports = removeImports || false;

    // clear the replacements b/c we are handling imports
    // @ts-ignore private
    this.importProcessor.identifierReplacements.clear();
  }

  getPrefixCode() {
    return '';
  }

  getHoistedCode() {
    return '';
  }

  getSuffixCode() {
    return '';
  }

  process(): boolean {
    if (!this.tokens.matches1(tt._import)) return false;

    // Let the remaining transformers consume and preserve dynamic imports.
    if (this.tokens.matches2(tt._import, tt.parenL)) {
      return false;
    }

    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(tt.string)) {
      this.tokens.removeToken();
    }

    const path = this.tokens.stringValue();

    const detail = this.processedPaths.has(path) ? null : this.buildImport(path);
    this.processedPaths.add(path);
    this.importProcessor.claimImportCode(path);
    if (detail?.code) {
      this.imports.push(detail);

      this.tokens.replaceTokenTrimmingLeftWhitespace(
        this.removeImports ? '' : detail.code
      );
    } else {
      this.tokens.removeToken();
    }

    if (this.tokens.matches1(tt.semi)) {
      this.tokens.removeToken();
    }

    return true;
  }

  num = 0;
  getIdentifier(src: string) {
    return `${src.split('/').pop()!.replace(/\W/g, '_')}$${this.num++}`;
  }

  private buildImport(path: string) {
    // @ts-ignore
    if (!this.importProcessor.importInfoByPath.has(path)) {
      return null;
    }

    const { defaultNames, wildcardNames, namedImports, hasBareImport } =
      // @ts-ignore
      this.importProcessor.importInfoByPath.get(path);

    const req = `require('${path}');`;
    const tmp = this.getIdentifier(path);

    const named = [] as string[];
    const details: Import = {
      base: null,
      source: path,
      keys: [],
      code: '',
    };

    namedImports.forEach((s) => {
      if (
        this.importProcessor.shouldAutomaticallyElideImportedName(s.localName)
      ) {
        return;
      }

      named.push(
        s.localName === s.importedName
          ? s.localName
          : `${s.importedName}: ${s.localName}`
      );
      details.keys.push({ local: s.localName, imported: s.importedName });
    });

    const defaults = defaultNames.filter(
      (name: string) =>
        !this.importProcessor.shouldAutomaticallyElideImportedName(name)
    );
    const wildcards = wildcardNames.filter(
      (name: string) =>
        !this.importProcessor.shouldAutomaticallyElideImportedName(name)
    );

    if (defaults.length || wildcards.length) {
      details.base = defaults[0] || wildcards[0];
      // Use var so imports can override identifiers provided by the scope.
      details.code = `var ${tmp} = ${req}`;
      for (const name of wildcards) {
        details.code += ` var ${name} = ${tmp};`;
      }
      for (const name of defaults) {
        details.code += ` var ${name} = ${tmp}.default;`;
      }
    }

    if (named.length) {
      details.code += ` var { ${named.join(', ')} } = ${
        details.code ? `${tmp};` : req
      }`;
    }

    if (hasBareImport && !details.code) {
      details.code = req;
    }

    details.code = details.code.trim();
    return details;
  }
}
