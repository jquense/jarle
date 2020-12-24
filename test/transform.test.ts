import { transform } from '../src/transform';
import jsx from '../src/transform/jsx';
import modules, { Import } from '../src/transform/modules';
import wrapLastExpression from '../src/transform/wrapLastExpression';

describe('wrap last expression', () => {
  test.each([
    [
      'basic',
      "var a = 1;\nReact.createElement('i', null, a);",
      "var a = 1;\n;\nreturn (React.createElement('i', null, a));",
    ],
    ['single expression', '<div/>', ';\nreturn (<div/>);'],
    ['with semi', '<div/>;', ';\nreturn (<div/>);'],
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

      ;\nreturn (React.createElement(Wrapper, null,
        React.createElement(Wrapper, null, React.createElement(Icon, {name: "plus"})),
        React.createElement(Wrapper, null, React.createElement(Icon, {name: "clip"}))
      ));
    `,
    ],
  ])('compiles %s', (_, input, expected) => {
    expect(transform(input, { plugins: [wrapLastExpression()] }).code).toEqual(
      expected,
    );
  });

  it('works with jsx', () => {
    expect(
      transform('var foo = 3;\n<div/>', {
        plugins: [jsx(), wrapLastExpression()],
      }).code,
    ).toEqual("var foo = 3;\n;\nreturn (React.createElement('div', null));");
  });
});

describe('import rewriting', () => {
  test.each([
    ['no import', 'import "./foo";', "require('./foo');"],

    [
      'default import',
      'import Foo from "./foo";',
      "const foo$0 = require('./foo');\nconst Foo = foo$0.default || foo$0;",
    ],
    [
      'named imports',
      'import { Bar, Baz } from "./foo";',
      "const { Bar, Baz } = require('./foo');",
    ],
    [
      'mixed',
      'import Foo, { Bar, Baz } from "./foo";',
      "const foo$0 = require('./foo');\n" +
        'const Foo = foo$0.default || foo$0;\n' +
        'const { Bar, Baz } = foo$0;',
    ],
  ])('compiles %s', (_, input, expected) => {
    expect(transform(input, { plugins: [modules()] }).code).toEqual(expected);
  });

  it('remvoves imports', () => {
    expect(
      transform(`import Foo from './foo';\n\n<div/>`, {
        plugins: [modules({ remove: true })],
      }).code,
    ).toEqual('<div/>');
  });

  it('fills imports', () => {
    const imports = [] as Import[];

    transform(
      `
      import Foo from './foo';
      import * as D from './foo'
      import A, { B, c as C } from './foo'
    `,
      {
        plugins: [modules({ imports })],
      },
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
        source: './foo',
        keys: [],
        code: expect.anything(),
      },
      {
        base: 'A',
        source: './foo',
        keys: [
          { local: 'B', imported: 'B' },
          { local: 'C', imported: 'c' },
        ],
        code: expect.anything(),
      },
    ]);
  });
});

describe('jsx', () => {
  const testCases = [
    {
      description: 'transpiles self-closing JSX tag',
      input: `var img = <img src='foo.gif'/>;`,
      output: `var img = React.createElement('img', { src: 'foo.gif' });`,
    },

    {
      description: 'transpiles non-self-closing JSX tag',
      input: `var div = <div className='foo'></div>;`,
      output: `var div = React.createElement('div', { className: 'foo' });`,
    },

    {
      description: 'transpiles non-self-closing JSX tag without attributes',
      input: `var div = <div></div>;`,
      output: `var div = React.createElement('div', null);`,
    },

    {
      description: 'transpiles nested JSX tags',

      input: `
        var div = (
          <div className='foo'>
            <img src='foo.gif'/>
            <img src='bar.gif'/>
          </div>
        );`,

      output: `
        var div = (
          React.createElement('div', { className: 'foo' },
            React.createElement('img', { src: 'foo.gif' }),
            React.createElement('img', { src: 'bar.gif' })
          )
        );`,
    },

    {
      description: 'transpiles JSX tag with expression attributes',
      input: `var img = <img src={src}/>;`,
      output: `var img = React.createElement('img', { src: src });`,
    },

    {
      description: 'transpiles JSX tag with expression children',

      input: `
        var div = (
          <div>
            {images.map(src => <img src={src}/>)}
          </div>
        );`,

      output: `
        var div = (
          React.createElement('div', null,
            images.map(src => React.createElement('img', { src: src }))
          )
        );`,
    },

    {
      description: 'transpiles JSX component',
      input: `var element = <Hello name={name}/>;`,
      output: `var element = React.createElement(Hello, { name: name });`,
    },

    {
      description: 'transpiles empty JSX expression block',
      input: `var element = <Foo>{}</Foo>;`,
      output: `var element = React.createElement(Foo, null);`,
    },

    {
      description: 'transpiles empty JSX expression block with comment',
      input: `var element = <Foo>{/* comment */}</Foo>;`,
      output: `var element = React.createElement(Foo, null/* comment */);`,
    },

    {
      description: 'transpiles JSX component without attributes',
      input: `var element = <Hello />;`,
      output: `var element = React.createElement(Hello, null);`,
    },

    {
      description: 'transpiles JSX component without attributes with children',
      input: `var element = <Hello>hello</Hello>;`,
      output: `var element = React.createElement(Hello, null, "hello");`,
    },

    {
      description: 'transpiles namespaced JSX component',
      input: `var element = <Foo.Bar name={name}/>;`,
      output: `var element = React.createElement(Foo.Bar, { name: name });`,
    },

    {
      description: 'supports pragmas',
      options: { jsx: 'NotReact.createElement' },
      input: `var img = <img src='foo.gif'/>;`,
      output: `var img = NotReact.createElement('img', { src: 'foo.gif' });`,
    },

    {
      description: 'stringifies text children',
      input: `<h1>Hello {name}!</h1>`,
      output: `React.createElement('h1', null, "Hello ", name, "!")`,
    },

    {
      description: 'handles whitespace and quotes appropriately',
      input: `
        <h1>
          Hello {name}
          !
        </h1>`,
      output: `
        React.createElement('h1', null, "Hello ", name, "!")`,
    },

    {
      description: 'handles single-line whitespace and quotes appropriately',
      input: `
        <h1>
          Hello {name} – and goodbye!
        </h1>`,
      output: `
        React.createElement('h1', null, "Hello ", name, " – and goodbye!")`,
    },

    {
      description: 'handles single quotes in text children',
      input: `
        <h1>
          Hello {name}
          !${'      '}
          It's  nice to meet you
        </h1>`,
      output: `
        React.createElement('h1', null, "Hello ", name, "! It's  nice to meet you")`,
    },

    {
      description: 'transpiles tag with data attribute',
      input: `var element = <div data-name={name}/>;`,
      output: `var element = React.createElement('div', { 'data-name': name });`,
    },

    {
      description: 'transpiles JSX tag without value',
      input: `var div = <div contentEditable />;`,
      output: `var div = React.createElement('div', { contentEditable: true });`,
    },

    {
      description: 'transpiles JSX fragments',
      input: `var divs = <><div contentEditable /><div /></>;`,
      output: `var divs = React.createElement(React.Fragment, null, React.createElement('div', { contentEditable: true }), React.createElement('div', null));`,
    },

    {
      description: 'transpiles one JSX spread attributes',
      input: `var element = <div {...props} />;`,
      output: `var element = React.createElement('div', props);`,
    },

    {
      description: 'transpiles mixed JSX spread attributes ending in spread',
      options: {
        objectAssign: 'Object.assign',
      },
      input: `var element = <div a={1} {...props} {...stuff} />;`,
      output: `var element = React.createElement('div', Object.assign({}, { a: 1 }, props, stuff));`,
    },

    {
      description:
        'transpiles mixed JSX spread attributes ending in spread with custom Object.assign',
      options: {
        objectAssign: 'angular.extend',
      },
      input: `var element = <div a={1} {...props} {...stuff} />;`,
      output: `var element = React.createElement('div', angular.extend({}, { a: 1 }, props, stuff));`,
    },

    {
      description:
        'transpiles mixed JSX spread attributes ending in other values',
      options: {
        objectAssign: 'Object.assign',
      },
      input: `var element = <div a={1} {...props} b={2} c={3} {...stuff} more={things} />;`,
      output: `var element = React.createElement('div', Object.assign({}, { a: 1 }, props, { b: 2, c: 3 }, stuff, { more: things }));`,
    },

    {
      description: 'transpiles spread expressions (#64)',
      input: `<div {...this.props}/>`,
      output: `React.createElement('div', this.props)`,
    },

    {
      description: 'handles whitespace between elements on same line (#65)',

      input: `
        <Foo> <h1>Hello {name}!</h1>   </Foo>`,

      output: `
        React.createElement(Foo, null, " ", React.createElement('h1', null, "Hello ", name, "!"), "   ")`,
    },

    {
      description: 'fix Object.assign regression in JSXOpeningElement (#163)',

      options: {
        objectAssign: 'Object.assign',
      },
      input: `
        <Thing two={"This no longer fails"} {...props}></Thing>
      `,
      output: `
        React.createElement(Thing, Object.assign({}, { two: "This no longer fails" }, props))
      `,
    },

    {
      description: 'fix no space between JSXOpeningElement attributes (#178)',

      input: `
        <div style={{color:'#000000'}}className='content'/>
      `,
      output: `
        React.createElement('div', { style: {color:'#000000'}, className: 'content' })
      `,
    },

    {
      description: 'supports /* @jsx customPragma */ directives (#195)',
      input: `
        /* @jsx customPragma */
        var div = <div>Hello</div>
      `,
      output: `
        /* @jsx customPragma */
        var div = customPragma('div', null, "Hello")
      `,
    },

    {
      description:
        'ignores subsequent /* @jsx customPragma */ directives (#195)',
      input: `
        /* @jsx customPragma */
        /* @jsx customPragmaWannabe */
        var div = <div>Hello</div>
      `,
      output: `
        /* @jsx customPragma */
        /* @jsx customPragmaWannabe */
        var div = customPragma('div', null, "Hello")
      `,
    },

    {
      description: 'handles dash-cased value-less props',

      input: `
        <Thing data-foo></Thing>
      `,
      output: `
        React.createElement(Thing, { 'data-foo': true })
      `,
    },

    {
      description: 'respects non-breaking and advanced white-space characters',

      input: `
        <div>
          <a>\u00a01\u00a0</a>&nbsp;
          &nbsp;\u00a0
          \u2004\u2000
        </div>
      `,
      output: `
        React.createElement('div', null,
          React.createElement('a', null, "\u00a01\u00a0"), "\u00a0 \u00a0\u00a0 \u2004\u2000")
      `,
    },

    {
      description: 'transpiles entities',

      input: `
        <div>
          <a>1&lt;&aacute;</a>&nbsp;
        </div>
      `,
      output: `
        React.createElement('div', null,
          React.createElement('a', null, "1<á"), "\u00a0")
      `,
    },
  ];

  testCases.forEach(test => {
    it(test.description, () => {
      expect(
        transform(test.input, { plugins: [jsx(test.options)] }).code,
      ).toEqual(test.output);
    });
  });
});
