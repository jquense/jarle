import React from 'react';

import { useError } from './Provider.js';

/**
 * Displays an syntax or runtime error that occurred when rendering the code
 */
export default function Error(props: React.HTMLProps<HTMLPreElement>) {
  const error = useError();

  return error ? <pre {...props}>{error.toString()}</pre> : null;
}
