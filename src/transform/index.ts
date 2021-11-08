import { Transform } from 'sucrase/dist/Options';
import {
  TokenProcessor,
  parse,
  tt,
  HelperManager,
  NameManager,
  CJSImportProcessor,
  transform as sucraseTransform,
} from './parser';

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

function buildImport(path: string, imports: CJSImportProcessor) {
  const { defaultNames, wildcardNames, namedImports } =
    // @ts-ignore
    imports.importInfoByPath.get(path);

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
    named.push(
      s.localName === s.importedName
        ? s.localName
        : `${s.importedName}: ${s.localName}`
    );
    details.keys.push({ local: s.localName, imported: s.importedName });
  });

  if (defaultNames.length || wildcardNames.length) {
    details.base = defaultNames[0] || wildcardNames[0];
    details.code += `var ${tmp} = ${req}\nvar ${details.base} = ${tmp}.default || ${tmp};\n`;
  }

  if (named.length) {
    details.code += `var { ${named.join(', ')} } = ${
      details.code ? `${tmp};` : req
    }`;
  }

  details.code = details.code.trim() || req;
  return details;
}

function processImports(
  tokens: TokenProcessor,
  importProcessor: CJSImportProcessor,
  remove = false,
  imports: Import[] = []
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
  const detail = buildImport(path, importProcessor);
  imports.push(detail);

  tokens.replaceTokenTrimmingLeftWhitespace(remove ? '' : detail.code);
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

  if (tokens.matches2(tt._export, tt._default)) {
    tokens.removeInitialToken();
    tokens.replaceTokenTrimmingLeftWhitespace(';\nreturn');
  } else {
    let code = `\nreturn ${tokens.currentTokenCode()}`;
    let prev = tokens.currentIndex() - 1;
    if (prev >= 0 && !tokens.matches1AtIndex(prev, tt.semi)) {
      code = `;${code}`;
    }
    tokens.replaceTokenTrimmingLeftWhitespace(code);
  }
  return true;
}

export interface Options {
  removeImports?: boolean;
  wrapLastExpression?: boolean;
  transforms?: Transform[];
  isCompiled?: boolean;
}
export function transform(code: string, options: Options = {}) {
  if (options.transforms) {
    code = sucraseTransform(code, { transforms: options.transforms }).code;
  }

  const { tokens, scopes } = parse(code, true, true, false);
  const nameManager = new NameManager(code, tokens);
  const helperManager = new HelperManager(nameManager);

  const tokenProcessor = new TokenProcessor(
    code,
    tokens,
    false,
    true,
    helperManager
  );

  const importProcessor = new CJSImportProcessor(
    nameManager,
    tokenProcessor,
    false,
    { transforms: ['typescript', 'jsx'] },
    true, //
    helperManager
  );
  const imports: Import[] = [];

  const lastExprIdx = options.wrapLastExpression
    ? findLastExpression(tokenProcessor)
    : null;
  importProcessor.preprocessTokens();
  num = 0;

  while (!tokenProcessor.isAtEnd()) {
    let wasProcessed = processImports(
      tokenProcessor,
      importProcessor,
      options.removeImports,
      imports
    );

    if (!wasProcessed && lastExprIdx !== null) {
      // console.log('HERE', lastExprIdx);
      wasProcessed = wrapLastExpression(tokenProcessor, lastExprIdx);
    }
    if (!wasProcessed) {
      tokenProcessor.copyToken();
    }
  }

  const result = tokenProcessor.finish();

  return { code: result, imports };
}

function findLastExpression(tokens: TokenProcessor) {
  let lastExprIdx: number | null = null;
  // console.log(tokens.tokens);
  for (let i = 0; i < tokens.tokens.length; i++) {
    if (tokens.matches2AtIndex(i, tt._export, tt._default)) {
      lastExprIdx = i;
      break;
    }

    if (tokens.tokens[i].isTopLevel) {
      if (tokens.matches1AtIndex(i, tt._return)) {
        // console.log('TOPPPP');
        lastExprIdx = null;
        break;
      }

      lastExprIdx = i;
    }
  }

  return lastExprIdx;
}
