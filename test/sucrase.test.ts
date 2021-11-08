import { transform, Import } from '../src/transform';

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
    ['no import', 'import "./foo";', "require('./foo');"],

    [
      'default import',
      'import Foo from "./foo";',
      "var foo$0 = require('./foo');\nvar Foo = foo$0.default || foo$0;",
    ],
    [
      'named imports',
      'import { Bar, Baz } from "./foo";',
      "var { Bar, Baz } = require('./foo');",
    ],
    [
      'mixed',
      'import Foo, { Bar, Baz } from "./foo";',
      "var foo$0 = require('./foo');\n" +
        'var Foo = foo$0.default || foo$0;\n' +
        'var { Bar, Baz } = foo$0;',
    ],
  ])('compiles %s', (_, input, expected) => {
    expect(transform(input).code).toEqual(expected);
  });

  it('removes imports', () => {
    expect(
      transform(
        `import Foo from './foo';\nimport Bar from './bar';\n\n<div/>`,
        { removeImports: true }
      ).code
    ).toEqual('\n\n\n<div/>');
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
});

describe('wrap last expression', () => {
  test.each([
    [
      'basic',
      "var a = 1;\nReact.createElement('i', null, a);",
      "var a = 1;\n\nreturn React.createElement('i', null, a);",
    ],
    ['single expression', '<div/>', '\nreturn <div/>'],
    ['with semi', '<div/>;', '\nreturn <div/>;'],
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
  var children = ref.children;
  return React.createElement('div', {id: 'foo'}, children);
};

React.createElement(Wrapper, null,
  React.createElement(Wrapper, null, React.createElement(Icon, {name: "plus"})),
  React.createElement(Wrapper, null, React.createElement(Icon, {name: "clip"}))
);
    `,
      `
function Wrapper(ref) {
  var children = ref.children;
  return React.createElement('div', {id: 'foo'}, children);
};

\nreturn React.createElement(Wrapper, null,
  React.createElement(Wrapper, null, React.createElement(Icon, {name: "plus"})),
  React.createElement(Wrapper, null, React.createElement(Icon, {name: "clip"}))
);
    `,
    ],
    ['replaces export default', `export default <div />`, `;\nreturn <div />`],
    [
      'prefers export default',
      `export default <div />;\n<span/>`,
      `;\nreturn <div />;\n<span/>`,
    ],
    [
      'return class',
      `const bar = true;\nclass foo {}`,
      `const bar = true;\n\nreturn class foo {}`,
    ],
    ['export class', `export default class foo {}`, `;\nreturn class foo {}`],
    [
      'return function',
      `const bar = true\nfunction foo() {}`,
      `const bar = true\n;\nreturn function foo() {}`,
    ],
    [
      'export function',
      `export default function foo() {}`,
      `;\nreturn function foo() {}`,
    ],
    [
      'export function 2',
      `function foo() {}\nfunction bar(baz= function() {}) {}`,
      `function foo() {}\n;\nreturn function bar(baz= function() {}) {}`,
    ],

    ['confusing expressions 1', `foo, bar\nbaz`, `foo, bar\n;\nreturn baz`],
    [
      'confusing expressions 2',
      `foo, (() => {});\nbaz`,
      `foo, (() => {});\n\nreturn baz`,
    ],
    [
      'confusing expressions 3',
      `foo, (() => {});baz\nquz`,
      `foo, (() => {});baz\n;\nreturn quz`,
    ],
    [
      'confusing expressions 4',
      `let foo = {};baz`,
      `let foo = {};\nreturn baz`,
    ],
    [
      'confusing expressions 4',
      `function foo(){\nlet bar = 1; return baz;};baz`,
      `function foo(){\nlet bar = 1; return baz;};\nreturn baz`,
    ],
  ])('compiles %s', (_, input, expected) => {
    expect(transform(input, { wrapLastExpression: true }).code).toEqual(
      expected
    );
  });
});
