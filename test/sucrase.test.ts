import { Options } from 'sucrase';
import { transform } from '../src/transform';

describe('general parsing smoketest', () => {
  it('parses', () => {
    transform(
      `
        const obj = { a: { b: 1, c: true }} 

        let f = obj?.a?.b?.()
      `
    );
  });
});

describe('import rewriting', () => {
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
      "var Foo = require('./foo');",
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
      "var bar$0 = require('./bar'); var Bar = bar$0.default;\n\nconst foo: Foo = Bar",
      { syntax: 'typescript' },
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
    ['replaces export default', `export default <div />`, `; return <div />`],
    [
      'prefers export default',
      `export default <div />;\n<span/>`,
      `; return <div />;\n<span/>`,
    ],
    [
      'return class',
      `const bar = true;\nclass foo {}`,
      `const bar = true;\nreturn class foo {}`,
    ],
    ['export class', `export default class foo {}`, `; return class foo {}`],
    [
      'return function',
      `const bar = true\nfunction foo() {}`,
      `const bar = true\n;return function foo() {}`,
    ],
    [
      'export function',
      `export default function foo() {}`,
      `; return function foo() {}`,
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
    expect(transform(input, { wrapLastExpression: true }).code).toEqual(
      expected
    );
  });
});
