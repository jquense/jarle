import * as React from 'react';
import {
  Editor,
  Preview,
  Provider,
  InfoMessage,
  useError,
} from '../../../../src';

import * as Jarle from '../../../../src';

import clsx from 'clsx';

import styles from './styles.module.css';

// needed for importing and demostrating JARLE in itself
// this is because we are using `src` directly
window.__IMPORT__ = (s) => import(/* webpackIgnore: true */ s);

const Info = (props) => (
  <InfoMessage
    {...props}
    className={clsx(props.className, styles.infoMessage)}
  />
);

function resolveImports(sources) {
  return Promise.all(
    sources.map((s) => {
      if (s === 'jarle') {
        return Jarle;
      }

      return import(/* webpackIgnore: true */ s);
    })
  );
}

function Playground({
  children,
  theme,
  className,
  lineNumbers,
  inline,
  ...props
}) {
  const error = useError();
  const ref = React.useRef(null);

  React.useEffect(() => {
    let observer = new ResizeObserver(([entry]) => {
      const box = entry.contentRect;
      const hasSpace = inline == null ? box.width > 700 : !inline;

      ref.current.classList.toggle(styles.inline, hasSpace);
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={ref}>
      <Provider
        resolveImports={resolveImports}
        code={children.replace(/\n$/, '')}
        theme={theme}
        {...props}
      >
        <Editor
          infoComponent={Info}
          lineNumbers={lineNumbers}
          className={styles.playgroundEditor}
          style={theme?.plain}
        />

        <div className={styles.playgroundPreview}>
          <Preview />
          <Error />
        </div>
      </Provider>
    </div>
  );
}

function Error(props) {
  const error = useError();

  return error ? (
    <div className={styles.errorOverlay}>
      <pre className={styles.error}>{error.toString()}</pre>
    </div>
  ) : null;
}

export default Playground;
