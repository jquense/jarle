import { SucraseContext } from 'sucrase';
import {
  TokenProcessor,
  CJSImportProcessor,
  RootTransformer,
  tt,
} from './parser';

function findLastExpression(tokens: TokenProcessor) {
  let lastExprIdx: number | null = null;

  for (let i = 0; i < tokens.tokens.length; i++) {
    if (tokens.matches2AtIndex(i, tt._export, tt._default)) {
      return null;
    }

    // @ts-ignore
    if (tokens.tokens[i].isTopLevel) {
      const code = tokens.code.slice(
        tokens.tokens[i].start,
        tokens.tokens[i].end
      );

      if (code.startsWith('exports')) {
        return null;
      }
      if (tokens.matches1AtIndex(i, tt._return)) {
        return null;
      }

      lastExprIdx = i;
    }
  }

  return lastExprIdx;
}

function process(tokens: TokenProcessor, lastIndex: number) {
  if (tokens.currentIndex() !== lastIndex) {
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

export default function wrapLastExpression({ tokenProcessor }: SucraseContext) {
  let lastExprIdx = findLastExpression(tokenProcessor);

  if (lastExprIdx == null) {
    return tokenProcessor.code;
  }

  while (!tokenProcessor.isAtEnd()) {
    let wasProcessed = process(tokenProcessor, lastExprIdx);

    if (!wasProcessed) {
      tokenProcessor.copyToken();
    }
  }

  return tokenProcessor.finish();
}
