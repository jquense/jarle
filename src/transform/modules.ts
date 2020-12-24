/* eslint-disable no-param-reassign */

import { Plugin } from './types';

export type Import = {
  code: string;
  source: string;
  base: null | string;
  keys: Array<{ local: string; imported: string }>;
};

export interface Options {
  remove?: boolean;
  fn?: string;
  imports?: Import[];
}

export default ({
  remove,
  fn = 'require',
  imports = []
}: Options = {}): Plugin => {
  let num = 0;
  const getIdentifier = (src: string) =>
    `${src
      .split('/')
      .pop()!
      .replace(/\W/g, '_')}$${num++}`;

  return {
    visitor: {
      Program: {
        leave() {
          if (imports.length && remove) this.trimLines();
        }
      },
      ImportDeclaration(node) {
        if (!node.source) return;

        const {
          source: { value },
          start,
          end
        } = node;
        const details: Import = {
          base: null,
          source: value,
          keys: [],
          code: ''
        };

        const named = [] as string[];
        const req = `${fn}('${value}');`;
        const tmp = getIdentifier(value);

        node.specifiers.forEach(({ type, local, imported }) => {
          if (type === 'ImportSpecifier') {
            const key = { local: local.name, imported: imported.name };
            details.keys.push(key);
            named.push(
              key.local === key.imported
                ? key.local
                : `${key.imported}: ${key.local}`
            );
          } else {
            details.base = local.name;
            details.code += `const ${tmp} = ${req}\nconst ${local.name} = ${tmp}.default || ${tmp};\n`;
          }
        });

        if (named.length) {
          details.code += `const { ${named.join(', ')} } = ${
            details.code ? `${tmp};` : req
          }`;
        }

        details.code = details.code.trim() || req;

        imports.push(details);

        if (remove) {
          this.remove(start, end);
          return;
        }

        this.overwrite(start, end, details.code);
      }
    }
  };
};
