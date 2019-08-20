import React from 'react';
import { shallow } from 'enzyme';
import Russian from './Russian';

describe('Russian', () => {
  it('should render', () => {
    const wrapper = shallow(<Russian />);
    expect(wrapper).toMatchSnapshot();
  });
});
