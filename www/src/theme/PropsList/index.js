import React from 'react';
import renderProps from '@docpocalypse/props-table';
import { MDXRenderer } from '@mdx-js/react';
import Heading from '@theme/Heading';

import styles from './styles.module.css';

const H3 = Heading('h3');

function PropsTable({ metadata }) {
  const { name } = metadata;

  const props = renderProps(metadata.props || []);

  return (
    <>
      {props.map((prop) => (
        <React.Fragment key={prop.name}>
          <H3 id={prop.name}>
            <span>{prop.name}</span>
            {prop.propData.required && (
              <strong className={styles.required}>required</strong>
            )}
          </H3>

          {React.createElement(prop.propData.description)}
          <div>
            <div>
              <strong>type:</strong> <span>{prop.type}</span>
            </div>
            {prop.defaultValue && (
              <div className="mt-1">
                <strong>default:</strong>
                <code>{prop.defaultValue}</code>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
    </>
  );
}

export default PropsTable;
