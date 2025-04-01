import { Import, transform } from './transform/index.js';

export type Options = {
  inline?: boolean;
  isTypeScript?: boolean;
  showImports?: boolean;
  wrapper?: (code: string) => string;
};

export default (
  input: string,
  { inline = false, isTypeScript, showImports }: Options = {}
) => {
  let { code, imports } = transform(input, {
    removeImports: !showImports,
    wrapLastExpression: inline,
    transforms: isTypeScript ? ['typescript', 'jsx'] : ['jsx'],
    compiledFilename: 'compiled.js',
    filename: 'example.js',
  });

  return { code, imports };
};
