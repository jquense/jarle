import { describe, it, test, expect, vi } from 'vitest';
import { transform } from '../src/transform/index.js';

describe('general parsing smoketest', () => {
  it('preserves modern syntax in minified code by default', () => {
    const input =
      'class Base{constructor(value){this.value=value}}class Derived extends Base{field=1_000;constructor(...args){if(super(...args),this.value?.enabled??false)this.field+=1}read(){try{return this.value?.count??this.field}catch{return 0}}}return new Derived({enabled:true}).read();';
    const { code } = transform(input, {
      syntax: 'js',
      transforms: ['imports'],
    });

    expect(code).toBe(input);
    expect(new Function(code)()).toBe(1001);
  });

  it('allows callers to enable ES transforms', () => {
    const { code } = transform(
      'class Value { count = 1_000; } return new Value()?.count ?? 0;',
      { disableESTransforms: false, transforms: ['imports'] }
    );

    expect(code).not.toContain('?.');
    expect(code).not.toContain('??');
    expect(code).not.toContain('1_000');
    expect(code).toContain('this.count = 1000');
    expect(new Function(code)()).toBe(1000);
  });

  it.each(['none', 'imports', 'typescript'] as const)(
    'preserves dynamic imports with %s transform',
    (transformName) => {
      const input = "const load = (name) => import(name); import('./foo');";
      const result = transform(input, {
        transforms: transformName === 'none' ? [] : [transformName],
      });
      expect(result.code).toBe(input);
      expect(result.imports).toEqual([]);
    }
  );

  it('parses', () => {
    transform(
      `
        const obj = { a: { b: 1, c: true }} 

        let f = obj?.a?.b?.()
      `
    );

    transform(
      `
        const obj = { a: { b: 1, c: true }} 

        function foo<const T extends string>(a: T): T {
          return a;
        }

        let f: number = obj?.a?.b?.() satisfies number
      `,
      { transforms: ['typescript'] }
    );
  });
});

describe('import rewriting', () => {
  // it('parses', () => {
  //   console.log(
  //     transform(`<div/>`, {
  //       syntax: 'typescript',
  //       wrapLastExpression: true,
  //     }).code
  //   );
  // });

  test.each([
    ['no import', 'import "./foo";', "require('./foo');", undefined],

    [
      'default import',
      'import Foo from "./foo";',
      "var foo$0 = require('./foo'); var Foo = foo$0.default;",
      undefined,
    ],
    [
      'named imports',
      'import { Bar, Baz } from "./foo";',
      "var { Bar, Baz } = require('./foo');",
      undefined,
    ],
    [
      'namespace',
      'import * as Foo from "./foo";',
      "var foo$0 = require('./foo'); var Foo = foo$0;",
      undefined,
    ],
    ['side effect', 'import "./foo";', "require('./foo');", undefined],
    [
      'mixed',
      'import Foo, { Bar, Baz } from "./foo";',
      "var foo$0 = require('./foo'); var Foo = foo$0.default; var { Bar, Baz } = foo$0;",
      undefined,
    ],
    [
      'type imports',
      'import type Foo from "./foo";',
      '',
      { syntax: 'typescript' },
    ],
    [
      'type only imports',
      'import Bar from "./bar";\nimport Foo from "./foo";\nconst foo: Foo = Bar',
      "var bar$0 = require('./bar'); var Bar = bar$0.default;\n\nconst foo = Bar",
      { transforms: ['typescript'] },
    ],
    [
      'preserves new lines',
      'import { \nBar,\nBaz\n} from "./foo";',
      "\n\n\nvar { Bar, Baz } = require('./foo');",
      undefined,
    ],
  ])('compiles %s', (_, input, expected, options: any) => {
    expect(transform(input, options).code).toEqual(expected);
  });

  it.each([
    [
      'namespace and named imports',
      'import * as React from "react"; import { useState } from "react";',
      '[React, useState]',
      'React',
    ],
    [
      'bare import before bindings',
      'import "react"; import React from "react"; import * as ReactNS from "react"; import { useState } from "react";',
      '[React, ReactNS, useState]',
      'React',
    ],
    [
      'bare import after bindings',
      'import React from "react"; import * as ReactNS from "react"; import { useState } from "react"; import "react";',
      '[React, ReactNS, useState]',
      'React',
    ],
    [
      'multiple default and namespace aliases',
      'import React from "react"; import React2 from "react"; import * as React3 from "react"; import * as React4 from "react";',
      '[React, React2, React3, React4]',
      'React',
    ],
  ])('binds %s once', (_, input, values, base) => {
    const useState = () => {};
    const module = { default: 'default export', useState };
    const expected = values.includes('React2')
      ? [module.default, module.default, module, module]
      : values.includes('ReactNS')
      ? [module.default, module, useState]
      : [module, useState];

    for (const removeImports of [false, true]) {
      const { code, imports } = transform(`${input} return ${values};`, {
        transforms: ['imports'],
        removeImports,
      });
      const require = vi.fn(() => module);
      const preamble = removeImports
        ? imports.map((i) => i.code).join('\n')
        : '';

      expect(new Function('require', `${preamble}\n${code}`)(require)).toEqual(
        expected
      );
      expect(require).toHaveBeenCalledOnce();
      expect(require).toHaveBeenCalledWith('react');
      expect(imports).toHaveLength(1);
      expect(imports[0]).toMatchObject({ source: 'react', base });
    }
  });

  it('emits one require for hundreds of imports from the same path', () => {
    const input = Array.from(
      { length: 500 },
      (_, i) => `import { useState as hook${i} } from 'react';`
    ).join('\n');
    const { code, imports } = transform(input, { transforms: ['imports'] });
    const useState = () => {};
    const require = vi.fn(() => ({ useState }));

    expect(
      new Function('require', `${code}\nreturn [hook0, hook499];`)(require)
    ).toEqual([useState, useState]);
    expect(require).toHaveBeenCalledOnce();
    expect(require).toHaveBeenCalledWith('react');
    expect(code.match(/require\(/g)).toHaveLength(1);
    expect(imports).toHaveLength(1);
    expect(imports[0].keys).toHaveLength(500);
  });

  it('elides type-only aliases while retaining all runtime aliases', () => {
    const { code, imports } = transform(
      `import TypeDefault from 'module';
       import RuntimeDefault from 'module';
       import * as TypeNamespace from 'module';
       import * as RuntimeNamespace from 'module';
       import { TypeName, value } from 'module';
       import type { ExplicitType } from 'module';
       const typed: [TypeDefault, TypeNamespace.Type, TypeName, ExplicitType] = [];
       return [RuntimeDefault, RuntimeNamespace, value];`,
      { transforms: ['typescript', 'imports'] }
    );
    const module = { default: 'default export', value: 42 };
    expect(new Function('require', code)(() => module)).toEqual([
      module.default,
      module,
      42,
    ]);
    expect(code).not.toMatch(/TypeDefault|TypeNamespace|TypeName|ExplicitType/);
    expect(imports).toEqual([
      {
        source: 'module',
        base: 'RuntimeDefault',
        keys: [{ imported: 'value', local: 'value' }],
        code: expect.any(String),
      },
    ]);
  });

  it('removes imports', () => {
    expect(
      transform(`import Foo from './foo';\nimport Bar from './bar';\n<div/>`, {
        removeImports: true,
      }).code
    ).toEqual('\n\n<div/>');
  });

  it('fills imports', () => {
    const { imports } = transform(
      `
      import Foo from './foo';
      import * as D from './foo2'
      import A, { B, c as C } from './foo3'
    `
    );

    expect(imports).toEqual([
      {
        base: 'Foo',
        source: './foo',
        keys: [],
        code: expect.anything(),
      },
      {
        base: 'D',
        source: './foo2',
        keys: [],
        code: expect.anything(),
      },
      {
        base: 'A',
        source: './foo3',
        keys: [
          { local: 'B', imported: 'B' },
          { local: 'C', imported: 'c' },
        ],
        code: expect.anything(),
      },
    ]);
  });

  it('excludes type imports', () => {
    const { imports } = transform(
      `
      import type Foo from './foo';
      import * as D from './foo2'
      import type { B, c as C } from './foo3'

      const foo: Foo = D;
    `,
      { transforms: ['typescript'] }
    );

    expect(imports).toEqual([
      {
        base: 'D',
        source: './foo2',
        keys: [],
        code: expect.anything(),
      },
    ]);
  });

  it('elides unused imports and types', () => {
    const { imports } = transform(
      `
      import Foo from './foo';
      import * as D from './foo2'
      import { B, c as C } from './foo3'

      const foo: Foo = D;
    `,
      { transforms: ['typescript'] }
    );

    expect(imports).toEqual([
      {
        base: 'D',
        source: './foo2',
        keys: [],
        code: expect.anything(),
      },
    ]);
  });
});

describe('wrap last expression', () => {
  test.each([
    [
      'basic',
      "let a = 1;\nReact.createElement('i', null, a);",
      "let a = 1;\nreturn React.createElement('i', null, a);",
    ],
    ['single expression', '<div/>', 'return <div/>'],
    ['with semi', '<div/>;', 'return <div/>;'],
    [
      'does nothing if already a return',
      '<div/>;\nreturn <span/>',
      '<div/>;\nreturn <span/>',
    ],
    [
      'does nothing if already a return earlier',
      'return <span/>; \n<div/>;',
      'return <span/>; \n<div/>;',
    ],
    [
      'multiline expression',
      `
function Wrapper(ref) {
  let children = ref.children;
  return React.createElement('div', {id: 'foo'}, children);
};

React.createElement(Wrapper, null,
  React.createElement(Wrapper, null, React.createElement(Icon, {name: "plus"})),
  React.createElement(Wrapper, null, React.createElement(Icon, {name: "clip"}))
);
    `,
      `
function Wrapper(ref) {
  let children = ref.children;
  return React.createElement('div', {id: 'foo'}, children);
};

return React.createElement(Wrapper, null,
  React.createElement(Wrapper, null, React.createElement(Icon, {name: "plus"})),
  React.createElement(Wrapper, null, React.createElement(Icon, {name: "clip"}))
);
    `,
    ],
    [
      'replaces export default',
      `export default <div />`,
      `exports.default = <div />`,
    ],
    [
      'prefers export default',
      `export default <div />;\n<span/>`,
      `exports.default = <div />;\n<span/>`,
    ],
    [
      'return class',
      `const bar = true;\nclass foo {}`,
      `const bar = true;\nreturn class foo {}`,
    ],
    [
      'export class',
      `export default class foo {}`,
      ` class foo {} exports.default = foo;`,
    ],
    [
      'return function',
      `const bar = true\nfunction foo() {}`,
      `const bar = true\n;return function foo() {}`,
    ],
    [
      'export function',
      `export default function foo() {}`,
      ` function foo() {} exports.default = foo;`,
    ],
    [
      'export function 2',
      `function foo() {}\nfunction bar(baz= function() {}) {}`,
      `function foo() {}\n;return function bar(baz= function() {}) {}`,
    ],

    ['confusing expressions 1', `foo, bar\nbaz`, `foo, bar\n;return baz`],
    [
      'confusing expressions 2',
      `foo, (() => {});\nbaz`,
      `foo, (() => {});\nreturn baz`,
    ],
    [
      'confusing expressions 3',
      `foo, (() => {});baz\nquz`,
      `foo, (() => {});baz\n;return quz`,
    ],
    ['confusing expressions 4', `let foo = {};baz`, `let foo = {};return baz`],
    [
      'confusing expressions 4',
      `function foo(){\nlet bar = 1; return baz;};baz`,
      `function foo(){\nlet bar = 1; return baz;};return baz`,
    ],
  ])('compiles %s', (_, input, expected) => {
    expect(
      transform(input, { transforms: ['imports'], wrapLastExpression: true })
        .code
    ).toEqual(expected);
  });
});
