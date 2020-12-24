import MagicString from 'magic-string';

import { Node, Plugin } from './types';

export type Wrapper = (ctx: MagicString, node: Node) => void;

export type Options = {
  wrapper: Wrapper;
};

export default ({ wrapper }: Options): Plugin => ({
  visitor: {
    Program: {
      leave(node) {
        wrapper(this, node);
      },
    },
  },
});
