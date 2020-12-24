import { Node, Plugin } from './types';

export default (): Plugin => ({
  visitor: {
    Program: {
      leave(node) {
        if (node.body.find(n => n.type === 'ReturnStatement')) {
          return;
        }
        const lastExpr = node.body
          .concat()
          .reverse()
          .find((n: Node) => n.type === 'ExpressionStatement');

        if (!lastExpr) {
          return;
        }

        const { start, end } = lastExpr;

        const hasSemi = this.original.substring(start, end).endsWith(';');

        this.appendLeft(start, ';\nreturn (');

        if (hasSemi) this.overwrite(end - 1, end, ');');
        else this.appendRight(end, ');');
      },
    },
  },
});
