import { Plugin } from './types';

const hasDashes = (val: string) => /-/.test(val);
const formatKey = (key: string) => (hasDashes(key) ? `'${key}'` : key);
const formatVal = (val?: unknown) => (val ? '' : 'true');

function normalize(str: string, removeTrailingWhitespace) {
  let normalized = str;
  if (removeTrailingWhitespace && /\n/.test(str)) {
    normalized = normalized.replace(/[ \f\n\r\t\v]+$/, '');
  }

  normalized = normalized
    .replace(/^\n\r?[ \f\n\r\t\v]+/, '') // remove leading newline + space
    .replace(/[ \f\n\r\t\v]*\n\r?[ \f\n\r\t\v]*/gm, ' '); // replace newlines with spaces

  return JSON.stringify(normalized);
}

export default function jsxPlugin(options: any = {}): Plugin {
  let pragmaJsx: string | null = null;
  let pragmaJsxFrag: string | null = null;

  const objectAssign = options.objectAssign || 'Object.assign';

  let jsx = pragmaJsx || options.jsx || 'React.createElement';
  let jsxFragment = pragmaJsx || options.jsxFragment || 'React.Fragment';

  return {
    onComment(_, text: string) {
      if (!pragmaJsx) {
        const match = /@jsx\s+([^\s]+)/.exec(text);
        if (match) pragmaJsx = match[1];
      }
      if (!pragmaJsxFrag) {
        const match = /@jsxFrag\s+([^\s]+)/.exec(text);
        if (match) pragmaJsxFrag = match[1];
      }
    },

    visitor: {
      Program() {
        jsx = pragmaJsx || options.jsx || 'React.createElement';
        jsxFragment = pragmaJsx || options.jsxFragment || 'React.Fragment';
      },

      'JSXElement|JSXFragment': {
        leave(node) {
          const children = node.children.filter(child => {
            if (child.type !== 'JSXText') return true;

            // remove whitespace-only literals, unless on a single line
            return /[^ \f\n\r\t\v]/.test(child.raw) || !/\n/.test(child.raw);
          });

          if (children.length) {
            let c = (node.openingElement || node.openingFragment).end;

            children.forEach((child, i) => {
              if (
                child.type === 'JSXExpressionContainer' &&
                child.expression.type === 'JSXEmptyExpression'
              ) {
                // empty block is a no op
              } else {
                const tail =
                  this.original[c] === '\n' && child.type !== 'JSXText'
                    ? ''
                    : ' ';
                this.appendLeft(c, `,${tail}`);
              }

              if (child.type === 'JSXText') {
                const str = normalize(child.value, i === children.length - 1);
                this.overwrite(child.start, child.end, str);
              }

              c = child.end;
            });
          }
        }
      },
      JSXOpeningElement: {
        leave(node) {
          this.overwrite(node.start, node.name.start, `${jsx}(`);

          const hostType =
            node.name.type === 'JSXIdentifier' &&
            node.name.name[0] === node.name.name[0].toLowerCase();

          if (hostType) this.prependRight(node.name.start, `'`);

          const len = node.attributes.length;
          let c = node.name.end;

          if (len) {
            let i;

            let hasSpread = false;
            for (i = 0; i < len; i += 1) {
              if (node.attributes[i].type === 'JSXSpreadAttribute') {
                hasSpread = true;
                break;
              }
            }

            c = node.attributes[0].end;

            for (i = 0; i < len; i += 1) {
              const attr = node.attributes[i];

              if (i > 0) {
                if (attr.start === c) this.prependRight(c, ', ');
                else this.overwrite(c, attr.start, ', ');
              }

              if (hasSpread && attr.type !== 'JSXSpreadAttribute') {
                const lastAttr = node.attributes[i - 1];
                const nextAttr = node.attributes[i + 1];

                if (!lastAttr || lastAttr.type === 'JSXSpreadAttribute') {
                  this.prependRight(attr.start, '{ ');
                }

                if (!nextAttr || nextAttr.type === 'JSXSpreadAttribute') {
                  this.appendLeft(attr.end, ' }');
                }
              }

              c = attr.end;
            }

            let after;
            let before;
            if (hasSpread) {
              if (len === 1) {
                before = hostType ? `',` : ',';
              } else {
                before = hostType
                  ? `', ${objectAssign}({},`
                  : `, ${objectAssign}({},`;
                after = ')';
              }
            } else {
              before = hostType ? `', {` : ', {';
              after = ' }';
            }

            this.prependRight(node.name.end, before);

            if (after) {
              this.appendLeft(node.attributes[len - 1].end, after);
            }
          } else {
            this.appendLeft(node.name.end, hostType ? `', null` : `, null`);
            c = node.name.end;
          }

          if (node.selfClosing) {
            this.overwrite(c, node.end, `)`);
          } else {
            this.remove(c, node.end);
          }
        }
      },
      JSXClosingElement: {
        leave(node) {
          this.overwrite(node.start, node.end, ')');
        }
      },
      JSXAttribute(node) {
        const { start, name } = node.name;
        // Overwrite equals sign if value is present.
        const end = node.value ? node.value.start : node.name.end;
        this.overwrite(
          start,
          end,
          `${formatKey(name)}: ${formatVal(node.value)}`
        );
      },
      JSXExpressionContainer(node) {
        this.remove(node.start, node.expression.start);
        this.remove(node.expression.end, node.end);
      },
      JSXOpeningFragment(node) {
        this.overwrite(node.start, node.end, `${jsx}(${jsxFragment}, null`);
      },
      JSXClosingFragment(node) {
        this.overwrite(node.start, node.end, ')');
      },
      JSXSpreadAttribute(node) {
        this.remove(node.start, node.argument.start);
        this.remove(node.argument.end, node.end);
      }
    }
  };
}
