import { transform } from './transform';
import jsx from './transform/jsx';
import modules, { Import } from './transform/modules';
import wrapContent, { Wrapper } from './transform/wrapContent';
import wrapLastExpression from './transform/wrapLastExpression';

const truthy = <T>(
  value: T,
): value is T extends false | '' | 0 | null | undefined ? never : T => !!value;

export function removeImports(input: string) {
  const imports: Import[] = [];

  try {
    const { code, map } = transform(input, {
      file: 'compiled.js',
      source: 'example.js',
      plugins: [modules({ remove: true, imports })],
    });

    return { code, imports, map };
  } catch (err) {
    return { code: input, imports };
  }
}

export type Options = {
  inline?: boolean;
  wrapper?: Wrapper;
};

export default (input: string, { inline = false, wrapper }: Options = {}) => {
  const imports: Import[] = [];

  const { code, map } = transform(input, {
    file: 'compiled.js',
    source: 'example.js',
    plugins: [
      jsx(),
      modules(),
      inline && wrapLastExpression(),
      wrapper && wrapContent({ wrapper }),
    ].filter(truthy),
  });

  return { code, imports, map };
};
