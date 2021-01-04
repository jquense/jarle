import React from 'react';

import { useError } from './Provider';

/**
 * Displays an sytax or runtime error that occured when rendering the code
 *
 */
export default function Error(props: React.HTMLProps<HTMLPreElement>) {
  const error = useError();

  return error ? <pre {...props}>{error.toString()}</pre> : null;
}
