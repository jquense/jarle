import { cleanup } from '@testing-library/react';
import { vi } from 'vitest';
import { afterEach } from 'vitest';

// @ts-ignore
window.__IMPORT__ = (s) => import(/* webpackIgnore: true */ s);

afterEach(() => {
  cleanup();
  vi.useRealTimers();
});
