import * as React from 'react';
import { Editor, Error, Preview, Provider, InfoMessage } from '../../../../src';
import clsx from 'clsx';

import styles from './styles.module.css';
// import { Context } from '../ImportContext'

const Info = (props) => (
  <InfoMessage
    {...props}
    className={clsx(props.className, styles.infoMessage)}
  />
);

function Playground({
  children,
  theme,
  className,
  lineNumbers,
  inline,
  ...props
}) {
  const ref = React.useRef(null);
  const previewRef = React.useRef(null);
  // const resolveImports = React.useContext(Context)

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
        // resolveImports={resolveImports}
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
          <Error className={styles.error} />
        </div>
      </Provider>
    </div>
  );
}

export default Playground;
