import { Import, transform } from './transform';

export function parseImports(input: string, remove: boolean) {
  const { code, imports } = transform(input, {
    removeImports: remove,
    transforms: ['typescript', 'jsx'],
  });

  return { code, imports };
}

export type Options = {
  inline?: boolean;
  wrapper?: (string) => string;
};

export default (input: string, { inline = false, wrapper }: Options = {}) => {
  let { code, imports } = transform(input, {
    wrapLastExpression: inline,
    // transforms: ['jsx'],
  });

  if (wrapper) code = wrapper(code);

  return { code, imports };
};
