<h1 align="center">J.A.R.L.E</h1>
<p align="center">
  <strong>Just Another React Live Editor</strong>
</p>

Jarle is a as light weight and feature rich React component editor with live
preview. 


## Usage

```js
import { Provider, Editor, Error, Preview } from 'jarle';

function LiveEditor() {
  return (
    <Provider code="<strong>Hello World!</strong>">
      <Editor />
      <Error />
      <Preview />
    </Provider>
  );
}
```

See **https://jquense.github.io/jarle/** for docs.

### Rendering Code

Jarle removes boilerplate code in your examples, by rendering the **last** expression in your code block.
Define variables, components, whatever, as long as the last line is a JSX expression.

```js
<Provider
  code={`
    function Example({ subject }) {
      return <div>Hello {subject}</div>
    }

    <Example subject="World"/>
  `}
/>
```

If you do need more control over what get's rendered, or need to render asynchronously, a
`render` function is always in scope:

```js
setTimeout(() => {
  render(<div>I'm late!</div>);
}, 1000);
```

Jarle also supports rendering your code _as a component_, helpful for illustrating
hooks or render behavior with minimal extra code. When using `renderAsComponent`
the code text is used as the body of React function component, so you can use
state and other hooks.

```js
<Provider
  renderAsComponent
  code={`
    const [secondsPast, setSeconds] = useState(0)

    useEffect(() => {
      let interval = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000)

      return () => clearInterval(interval)
    }, [])

    <div>Seconds past: {secondsPast}</div>
  `}
/>
```

## Differences from React Live

- No extra compiling. Jarle only packages a JSX transformer, making it lighter
  than alternatives.

- Smart rendering
