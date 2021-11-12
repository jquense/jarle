import { Transform } from 'sucrase/dist/Options';
import {
  TokenProcessor,
  parse,
  tt,
  HelperManager,
  NameManager,
  CJSImportProcessor,
  transform as sucraseTransform,
  getNonTypeIdentifiers,
  computeSourceMap,
} from './parser';

interface Context {
  tokenProcessor: TokenProcessor;
  importProcessor: CJSImportProcessor;
  imports: Import[];
  isTypeName: (name: string) => boolean;
}

export type Import = {
  code: string;
  source: string;
  base: null | string;
  keys: Array<{ local: string; imported: string }>;
};

let FN = 'require';
let num = 0;
const getIdentifier = (src: string) =>
  `${src.split('/').pop()!.replace(/\W/g, '_')}$${num++}`;

function buildImport(path: string, { importProcessor, isTypeName }: Context) {
  // @ts-ignore
  if (!importProcessor.importInfoByPath.has(path)) {
    return null;
  }

  const { defaultNames, wildcardNames, namedImports, hasBareImport } =
    // @ts-ignore
    importProcessor.importInfoByPath.get(path);

  const req = `${FN}('${path}');`;
  const tmp = getIdentifier(path);

  const named = [] as string[];
  const details: Import = {
    base: null,
    source: path,
    keys: [],
    code: '',
  };

  namedImports.forEach((s) => {
    if (isTypeName(s.localName)) {
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

    if (!isTypeName(name)) {
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

function processImports(
  tokens: TokenProcessor,
  ctx: Context,
  { removeImports }: Options
) {
  if (!tokens.matches1(tt._import)) return false;

  // dynamic import
  if (tokens.matches2(tt._import, tt.parenL)) {
    return true;
  }

  tokens.removeInitialToken();
  while (!tokens.matches1(tt.string)) {
    tokens.removeToken();
  }

  const path = tokens.stringValue();

  const detail = buildImport(path, ctx);

  if (detail?.code) {
    ctx.imports.push(detail);

    tokens.replaceTokenTrimmingLeftWhitespace(removeImports ? '' : detail.code);
  } else {
    tokens.removeToken();
  }

  if (tokens.matches1(tt.semi)) {
    tokens.removeToken();
  }

  return true;
}

function wrapLastExpression(
  tokens: TokenProcessor,
  lastExprIdx: number | null
) {
  if (tokens.currentIndex() !== lastExprIdx) {
    return false;
  }

  let prev = tokens.currentIndex() - 1;
  let lastWasSemi = prev >= 0 && !tokens.matches1AtIndex(prev, tt.semi);
  if (tokens.matches2(tt._export, tt._default)) {
    tokens.removeInitialToken();
    tokens.replaceTokenTrimmingLeftWhitespace(
      lastWasSemi ? 'return' : '; return'
    );
  } else {
    let code = `return ${tokens.currentTokenCode()}`;
    if (lastWasSemi) {
      code = `;${code}`;
    }
    tokens.replaceTokenTrimmingLeftWhitespace(code);
  }
  return true;
}

export interface Options {
  removeImports?: boolean;
  wrapLastExpression?: boolean;
  syntax?: 'js' | 'typescript';
  transforms?: Transform[];
  filename?: string;
  compiledFilename?: string;
}

function getContext(
  code: string,
  transforms: Transform[],
  isTypescriptEnabled: boolean
) {
  const { tokens } = parse(code, true, isTypescriptEnabled, false);
  const nameManager = new NameManager(code, tokens);
  const helperManager = new HelperManager(nameManager);

  const tokenProcessor = new TokenProcessor(
    code,
    tokens,
    false,
    true,
    helperManager
  );

  const nonTypeIdents = isTypescriptEnabled
    ? getNonTypeIdentifiers(tokenProcessor, { transforms: [] })
    : null;

  const importProcessor = new CJSImportProcessor(
    nameManager,
    tokenProcessor,
    false,
    { transforms },
    isTypescriptEnabled, //
    helperManager
  );
  const imports: Import[] = [];

  return {
    tokenProcessor,
    importProcessor,
    imports,
    isTypeName: (name: string) =>
      isTypescriptEnabled && !nonTypeIdents!.has(name),
  };
}

export function transform(code: string, options: Options = {}) {
  const transforms = options.transforms || [];
  const isTypescriptEnabled =
    options.syntax == null
      ? transforms.includes('typescript')
      : options.syntax === 'typescript';

  if (options.transforms) {
    code = sucraseTransform(code, { transforms }).code;
  }

  const ctx = getContext(code, transforms, isTypescriptEnabled);
  const lastExprIdx = options.wrapLastExpression
    ? findLastExpression(ctx.tokenProcessor)
    : null;

  ctx.importProcessor.preprocessTokens();
  num = 0;

  while (!ctx.tokenProcessor.isAtEnd()) {
    let wasProcessed = processImports(ctx.tokenProcessor, ctx, options);

    if (!wasProcessed && lastExprIdx !== null) {
      // console.log('HERE', lastExprIdx);
      wasProcessed = wrapLastExpression(ctx.tokenProcessor, lastExprIdx);
    }
    if (!wasProcessed) {
      ctx.tokenProcessor.copyToken();
    }
  }

  const result = ctx.tokenProcessor.finish();
  const map = computeSourceMap(result, options.filename!, {
    compiledFilename: options.compiledFilename!,
  });

  return { code: result, imports: ctx.imports, map };
}

function findLastExpression(tokens: TokenProcessor) {
  let lastExprIdx: number | null = null;

  for (let i = 0; i < tokens.tokens.length; i++) {
    if (tokens.matches2AtIndex(i, tt._export, tt._default)) {
      lastExprIdx = i;
      break;
    }

    if (tokens.tokens[i].isTopLevel) {
      if (tokens.matches1AtIndex(i, tt._return)) {
        lastExprIdx = null;
        break;
      }

      lastExprIdx = i;
    }
  }

  return lastExprIdx;
}
