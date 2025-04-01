/* eslint-disable require-await */

import { fireEvent, render, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
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
