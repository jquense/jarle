/* eslint-disable require-await */

import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import Provider, { Props, useElement, useError } from '../src/Provider';

describe('Provider', () => {
  async function mountProvider(props: Props<{}>) {
    let wrapper: ReturnType<typeof mount>;

    function Child() {
      const el = useElement();
      const err = useError();
      if (err) console.error(err);
      return el;
    }

    await act(async () => {
      // eslint-disable-next-line react/no-children-prop
      wrapper = mount(<Provider children={<Child />} {...props} />);
    });

    wrapper!.update();
    return wrapper!;
  }

  it('should render', async () => {
    const wrapper = await mountProvider({
      code: `
        <div className="test" />
      `,
    });

    expect(wrapper.find('div.test')).toHaveLength(1);
  });

  it('should renderAsComponent', async () => {
    const wrapper = await mountProvider({
      renderAsComponent: true,
      code: `
        const [count, setCount] = useState(1);

        <div className="test" onClick={() => setCount(2)}>{count}</div>
      `,
    });

    expect(wrapper.find('StateContainer')).toHaveLength(1);
    const div = wrapper.find('.test');

    expect(div).toHaveLength(1);
    expect(div.text()).toEqual('1');

    div.simulate('click');
    expect(div.text()).toEqual('2');
  });
});
