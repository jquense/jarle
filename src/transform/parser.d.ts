import { Options, SucraseContext } from 'sucrase/';

export { default as TokenProcessor } from 'sucrase/dist/types/TokenProcessor';
export { default as RootTransformer } from 'sucrase/dist/types/transformers/RootTransformer';
export { parse } from 'sucrase/dist/types/parser';
export { transform } from 'sucrase/';
export { TokenType as tt } from 'sucrase/dist/types/parser/tokenizer/types';
export { default as CJSImportProcessor } from 'sucrase/dist/types/CJSImportProcessor';
export { default as computeSourceMap } from 'sucrase/dist/types/computeSourceMap';

export function getSucraseContext(
  code: string,
  options: Options
): SucraseContext;
