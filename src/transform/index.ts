/* eslint-disable no-restricted-syntax */
import { Parser } from 'acorn';
import acornJsx from 'acorn-jsx';
import MagicString from 'magic-string';

import { Node, NormalVisitor, Plugin, VisitorMap } from './types';

const parser = Parser.extend(acornJsx());

type NormalVisitorMap = Record<string, NormalVisitor[]>;

const isNode = (n: any): n is Node => n !== null && typeof n.type === 'string';

const nodeExists = (n, parent, key) => {
  if (!parent) return true;
  if (!(key in parent)) return false;
  let value = parent[key];
  return Array.isArray(value) ? value.includes(n) : value === n;
};

function walk(
  ctx: MagicString,
  visitors: NormalVisitorMap,
  node?: Node,
  parent?: Node,
  key?: string
) {
  if (!node) return;

  const visitor = visitors[node.type];

  visitor?.forEach((v) => v.enter?.call(ctx, node, parent, key));
  if (!nodeExists(node, parent, key)) {
    return false;
  }

  // eslint-disable-next-line guard-for-in
  for (const key in node) {
    const value = node[key];
    if (isNode(value)) {
      walk(ctx, visitors, value, node, key);
    } //
    else if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i += 1) {
        if (isNode(value[i])) {
          if (walk(ctx, visitors, value[i], node, key) === false) {
            i--;
          }
        }
      }
    }
  }

  visitor?.forEach((v) => v.leave?.call(ctx, node, parent, key));
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

export interface Root extends acorn.Node {
  magicString: MagicString;
}

export function transform(
  source: string | Root,
  options: Options = { plugins: [] }
) {
  const { plugins } = options;
  let code: MagicString;
  let ast: Root;

  if (typeof source === 'string') {
    code = new MagicString(source);
    ast = parser.parse(source, {
      ecmaVersion: 'latest',
      preserveParens: true,
      sourceType: 'module',
      allowAwaitOutsideFunction: true,
      allowReturnOutsideFunction: true,
      allowHashBang: true,
      onComment: (...args) => {
        plugins.forEach((p) => p.onComment?.(...args));
      },
    }) as Root;
    ast.magicString = code;
  } else {
    code = source.magicString;
    ast = source;
  }

  walk(
    code,
    mergeVisitors(plugins.map((p) => p.visitor!).filter(Boolean)),
    ast
  );

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
