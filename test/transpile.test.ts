import transpile, { parseImports } from '../src/transpile';

describe('parseImports', () => {
  it('removes imports', () => {
    const result = parseImports(
      `
        import Foo from './foo.js'

        <Foo />
      `,
      true,
      false
    );

    expect(result.code).toMatchInlineSnapshot(`
      "
              

              <Foo />
            "
    `);

    expect(result.imports).toMatchInlineSnapshot(`
      Array [
        Object {
          "base": "Foo",
          "code": "var foo_js$0 = require('./foo.js');
      var Foo = foo_js$0.default || foo_js$0;",
          "keys": Array [],
          "source": "./foo.js",
        },
      ]
    `);
  });

  it('removes imports with Typescript', () => {
    const result = parseImports(
      `
        import Foo, { Bar } from './foo.js';

        <Foo<Bar> />
      `,
      true,
      true
    );

    expect(result.code).toMatchInlineSnapshot(`
      "
              

              <Foo<Bar> />
            "
    `);

    expect(result.imports).toMatchInlineSnapshot(`
      Array [
        Object {
          "base": "Foo",
          "code": "var foo_js$0 = require('./foo.js');
      var Foo = foo_js$0.default || foo_js$0;",
          "keys": Array [],
          "source": "./foo.js",
        },
      ]
    `);
  });
});
