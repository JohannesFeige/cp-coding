import React from 'react';
import RomanNumeral from './RomanNumeral';
import { shallow, ShallowWrapper } from 'enzyme';

describe('RomanNumeral', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<RomanNumeral />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('should render', () => {
    expect(wrapper).not.toBe(null);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render and tranlate', () => {
    expect(wrapper).not.toBe(null);
    const input = wrapper.find('input[type="number"]');

    expect(input.getElements().length).toBe(1);
    input.simulate('change', {
      target: {
        value: 42,
      },
    });

    const result = wrapper.find('span');
    expect(result.getElements()).toHaveLength(2);
    expect(result.last().text()).toBe('Roman Numeral: XLII');
  });
});
