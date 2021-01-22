import { Node, Plugin } from './types';

export default (): Plugin => ({
  visitor: {
    Program: {
      leave(node) {
        const body = node.body.concat().reverse();

        let lastExpr;
        for (const node of body) {
          switch (node.type) {
            case 'ExpressionStatement':
            case 'ClassDeclaration':
            case 'FunctionDeclaration':
              lastExpr = lastExpr || node;
              break;
            case 'ReturnStatement':
              return;
            case 'ExportDefaultDeclaration':
              this.overwrite(node.start, node.declaration.start, '');
              lastExpr = node.declaration;
          }
        }

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
