import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { expect, it, vi } from 'vitest';
import { evaluate } from '../src/Provider.js';

it('evaluates repeated React imports with the renderer React instance', async () => {
  const resolveImports = vi.fn(async () => [React]);
  const { element, exports } = await evaluate(
    `import * as ReactNS from 'react';
     import ReactDefault from 'react';
     import { useState as useCounter } from 'react';
     import 'react';
     export const sameReact = ReactNS.useState === ReactDefault.useState;
     export const importedHook = useCounter;
     export default function Counter() {
       const [count, setCount] = useCounter(0);
       const value = { count };
       return <button onClick={() => setCount(count + 1)}>{value?.count ?? 0}</button>;
     }`,
    { resolveImports }
  );
  const wrapper = render(element);

  expect(resolveImports).toHaveBeenCalledOnce();
  expect(resolveImports).toHaveBeenCalledWith(['react']);
  expect(exports.sameReact).toBe(true);
  expect(exports.importedHook).toBe(React.useState);
  fireEvent.click(wrapper.getByRole('button'));
  expect(wrapper.getByRole('button').textContent).toBe('1');
});
