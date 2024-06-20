import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: './test/setup.ts',
    // TODO: remove include prop after complete Vitest migration
    include: ['test/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
  },
});
