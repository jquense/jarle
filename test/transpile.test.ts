import transpile from '../src/transpile';

describe('parseImports', () => {
  it('removes imports', () => {
    const result = transpile(
      `
        import Foo from './foo.js'

        <Foo />
      `,
      { showImports: false }
    );

    expect(result.code).toMatchInlineSnapshot(`
      "const _jsxFileName = \\"\\";
              

              React.createElement(Foo, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 4}} )
            "
    `);

    expect(result.imports).toMatchInlineSnapshot(`
      Array [
        Object {
          "base": "Foo",
          "code": "var foo_js$0 = require('./foo.js'); var Foo = foo_js$0.default;",
          "keys": Array [],
          "source": "./foo.js",
        },
      ]
    `);
  });

  it('removes imports with Typescript', () => {
    const result = transpile(
      `
        import Foo, { Bar } from './foo.js';

        <Foo<Bar> />
      `,
      { showImports: false, isTypeScript: true }
    );

    expect(result.code).toMatchInlineSnapshot(`
      "const _jsxFileName = \\"\\";
              

              React.createElement(Foo, {__self: this, __source: {fileName: _jsxFileName, lineNumber: 4}} )
            "
    `);

    expect(result.imports).toMatchInlineSnapshot(`
      Array [
        Object {
          "base": "Foo",
          "code": "var foo_js$0 = require('./foo.js'); var Foo = foo_js$0.default;",
          "keys": Array [],
          "source": "./foo.js",
        },
      ]
    `);
  });
});
