import useCallbackRef from '@restart/hooks/useCallbackRef';
import React, { useEffect } from 'react';

import ErrorBoundary from './ErrorBoundary';
import { useElement, useError } from './Provider';

let holderjs;
if (typeof window !== 'undefined') {
  try {
    holderjs = require('holderjs');
  } catch (err) {
    /** ignore */
  }
}

/**
 * The component that renders the user's code.
 */
const Preview = ({
  className,
  holderTheme,
  ...props
}: {
  className?: string;

  /** An optional holder.js theme */
  holderTheme?: any;
}) => {
  const [example, attachRef] = useCallbackRef<HTMLDivElement>();
  const hasTheme = !!holderTheme && holderjs;
  const element = useElement();
  const error = useError();

  useEffect(() => {
    if (hasTheme) holderjs.addTheme('userTheme', holderTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasTheme]);

  useEffect(() => {
    if (!example || !holderjs) return;

    holderjs.run({
      theme: hasTheme ? 'userTheme' : undefined,
      images: example.querySelectorAll('img'),
    });
  }, [element, example, hasTheme]);

  // prevent links in examples from navigating
  const handleClick = (e: any) => {
    if (e.target.tagName === 'A' || e.target.closest('a')) e.preventDefault();
  };

  const previewProps = {
    role: "region",
    "aria-label": "Code Example",
    ...props,
    ref: attachRef,
    className: className,
    onClick: handleClick
  }

  return error ? null : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <div {...previewProps}>
      <ErrorBoundary element={element} />
    </div>
  );
};

export default Preview;
