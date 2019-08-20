import React from 'react';
import { shallow, mount } from 'enzyme';
import RussianPeasantMultiplication from './RussianPeasantMultiplication';

describe('RussianPeasantMultiplication', () => {
  it('should render', () => {
    const wrapper = shallow(<RussianPeasantMultiplication />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render and calculate', () => {
    const wrapper = mount(<RussianPeasantMultiplication />);
    const xInput = wrapper.find('input[type="number"][placeholder="X"]');
    expect(xInput.getElements().length).toBe(1);
    const yInput = wrapper.find('input[type="number"][placeholder="Y"]');
    expect(yInput.getElements().length).toBe(1);
    xInput.simulate('change', {
      target: {
        value: 42,
      },
    });
    yInput.simulate('change', {
      target: {
        value: 47,
      },
    });
    const result = wrapper.find('span');
    expect(result.getElements()).toHaveLength(1);
    expect(result.first().text()).toBe('1974');
  });
});
