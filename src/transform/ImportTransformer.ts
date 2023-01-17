import { SucraseContext } from 'sucrase';
import {
  TokenProcessor,
  CJSImportProcessor,
  RootTransformer,
  tt,
} from './parser';

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

    // dynamic import
    if (this.tokens.matches2(tt._import, tt.parenL)) {
      return true;
    }

    this.tokens.removeInitialToken();
    while (!this.tokens.matches1(tt.string)) {
      this.tokens.removeToken();
    }

    const path = this.tokens.stringValue();

    const detail = this.buildImport(path);
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

    let FN = 'require';

    const { defaultNames, wildcardNames, namedImports, hasBareImport } =
      // @ts-ignore
      this.importProcessor.importInfoByPath.get(path);

    const req = `${FN}('${path}');`;
    const tmp = this.getIdentifier(path);

    const named = [] as string[];
    const details: Import = {
      base: null,
      source: path,
      keys: [],
      code: '',
    };

    namedImports.forEach((s) => {
      if (this.importProcessor.isTypeName(s.localName)) {
        return;
      }

      named.push(
        s.localName === s.importedName
          ? s.localName
          : `${s.importedName}: ${s.localName}`
      );
      details.keys.push({ local: s.localName, imported: s.importedName });
    });

    if (defaultNames.length || wildcardNames.length) {
      const name = defaultNames[0] || wildcardNames[0];

      if (!this.importProcessor.isTypeName(name)) {
        details.base = name;
        // intentionally use `var` so that conflcits with Jarle provider scope get resolved naturally
        // with the import overriding the scoped identifier
        if (wildcardNames.length) {
          details.code = `var ${name} = ${req}`;
        } else {
          details.code = `var ${tmp} = ${req} var ${name} = ${tmp}.default;`;
        }
      }
    }

    if (named.length) {
      details.code += ` var { ${named.join(', ')} } = ${
        details.code ? `${tmp};` : req
      }`;
    }

    if (hasBareImport) {
      details.code = req;
    }

    details.code = details.code.trim();
    return details;
  }
}
