import { Root, transform } from './transform';
import jsx from './transform/jsx';
import modules, { Import } from './transform/modules';
import wrapContent, { Wrapper } from './transform/wrapContent';
import wrapLastExpression from './transform/wrapLastExpression';

const truthy = <T>(
  value: T
): value is T extends false | '' | 0 | null | undefined ? never : T => !!value;

export function parseImports(input: string | Root, remove: boolean) {
  const imports: Import[] = [];
  const { code, map, ast } = transform(input, {
    file: 'compiled.js',
    source: 'example.js',
    plugins: [modules({ remove, imports })],
  });

  return { code, ast, imports, map };
}

export type Options = {
  inline?: boolean;
  wrapper?: Wrapper;
};

export default (
  input: string | Root,
  { inline = false, wrapper }: Options = {}
) => {
  const imports: Import[] = [];

  const { code, ast, map } = transform(input, {
    file: 'compiled.js',
    source: 'example.js',
    plugins: [
      jsx(),
      modules(),
      inline && wrapLastExpression(),
      wrapper && wrapContent({ wrapper }),
    ].filter(truthy),
  });

  return { code, ast, imports, map };
};
