/* eslint-disable no-restricted-syntax */
import { Parser } from 'acorn';
import acornJsx from 'acorn-jsx';
import MagicString from 'magic-string';

import { Node, NormalVisitor, Plugin, VisitorMap } from './types';

const parser = Parser.extend(acornJsx());

type NormalVisitorMap = Record<string, NormalVisitor[]>;

const isNode = (n: any): n is Node => n !== null && typeof n.type === 'string';

function walk(
  ctx: MagicString,
  visitors: NormalVisitorMap,
  node?: Node,
  parent?: Node,
) {
  if (!node) return;

  const visitor = visitors[node.type];

  visitor?.forEach(v => v.enter?.call(ctx, node, parent));

  // eslint-disable-next-line guard-for-in
  for (const key in node) {
    const value = node[key];
    if (isNode(value)) {
      walk(ctx, visitors, value, node);
    }
    if (Array.isArray(value)) {
      for (const item of value) {
        if (isNode(item)) {
          walk(ctx, visitors, item, node);
        }
      }
    }
  }

  visitor?.forEach(v => v.leave?.call(ctx, node, parent));
}

const mergeVisitors = (visitors: VisitorMap[]) => {
  const rootVisitor: Record<string, NormalVisitor[]> = {};
  for (const visitor of visitors) {
    for (const key of Object.keys(visitor)) {
      const value = visitor[key];

      for (const type of key.split('|')) {
        const normalized =
          typeof value === 'function' ? { enter: value } : value;

        rootVisitor[type] = rootVisitor[type] || [];
        rootVisitor[type].push(normalized);
      }
    }
  }
  return rootVisitor;
};

export interface Options {
  plugins: Plugin[];
  file?: string;
  source?: string;
  includeContent?: boolean;
}

export function transform(source: string, options: Options = { plugins: [] }) {
  const { plugins } = options;
  const code = new MagicString(source);

  const ast = parser.parse(source, {
    ecmaVersion: 10,
    preserveParens: true,
    sourceType: 'module',
    allowAwaitOutsideFunction: true,
    allowReturnOutsideFunction: true,
    allowHashBang: true,
    onComment: (...args) => {
      plugins.forEach(p => p.onComment?.(...args));
    },
  });

  walk(code, mergeVisitors(plugins.map(p => p.visitor!).filter(Boolean)), ast);

  return {
    ast,
    code: code.toString(),
    map: code.generateMap({
      file: options.file,
      source: options.source,
      includeContent: options.includeContent !== false,
    }),
  };
}
