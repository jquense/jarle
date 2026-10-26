/* eslint-disable require-await */

import { fireEvent, render, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import * as React from 'react';
import Provider, { Props, useElement, useError } from '../src/Provider.js';

describe('Provider', () => {
  async function mountProvider(props: Props<{}>) {
    let wrapper: ReturnType<typeof render>;

    function Child() {
      const el = useElement();
      const err = useError();
      if (err) console.error(err);
      return el;
    }

    wrapper = render(<Provider children={<Child />} {...props} />);

    await act(async () => {
      wrapper.rerender(<Provider children={<Child />} {...props} />);
    });

    return wrapper!;
  }

  it('should render', async () => {
    const wrapper = await mountProvider({
      code: `
        <div data-testid="test" />
      `,
    });

    expect(wrapper.getByTestId('test')).toBeDefined();
  });

  it.each([false, true])(
    'restores merged hidden imports with component mode %s',
    async (renderAsComponent) => {
      const resolveImports = vi.fn(async () => [React]);
      const body = `
        const [count, setCount] = useCounter(0);
        class Value { count = 1_000; }
        const value = new Value();
        return ReactNS.createElement('button', {
          onClick: () => setCount(count + 1)
        }, (value?.count ?? 0) + count);
      `;
      const wrapper = await mountProvider({
        showImports: false,
        renderAsComponent,
        resolveImports,
        code: `
          import * as ReactNS from 'react';
          import { useState as useCounter } from 'react';
          import 'react';
          ${renderAsComponent ? body : `function Counter() { ${body} }`}
        `,
      });

      expect(resolveImports).toHaveBeenCalledWith(['react']);
      expect(wrapper.getByRole('button').textContent).toBe('1000');
      fireEvent.click(wrapper.getByRole('button'));
      expect(wrapper.getByRole('button').textContent).toBe('1001');
    }
  );

  it('should render function component', async () => {
    const wrapper = await mountProvider({
      code: `
        function Example() {
          return <div data-testid="test" />
        }
      `,
    });

    expect(wrapper.getByTestId('test')).toBeDefined();
  });

  it('should render class component', async () => {
    const wrapper = await mountProvider({
      code: `
        class Example extends React.Component {
          render() {
            return <div data-testid="test" />
          }
        }
      `,
    });

    expect(wrapper.getByTestId('test')).toBeDefined();
  });

  it('should renderAsComponent', async () => {
    const wrapper = await mountProvider({
      renderAsComponent: true,
      code: `
        const [count, setCount] = useState(1);

        <div data-testid="test" onClick={() => setCount(2)}>{count}</div>
      `,
    });

    const div = wrapper.getByTestId('test');

    expect(div).toBeDefined();
    expect(div.textContent).toEqual('1');

    fireEvent.click(div);
    expect(div.textContent).toEqual('2');
  });
});
