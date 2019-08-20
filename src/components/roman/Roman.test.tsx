import React from 'react';
import { shallow } from 'enzyme';
import Roman from './Roman';

describe('Roman', () => {
  it('should render', () => {
    const wrapper = shallow(<Roman />);
    expect(wrapper).toMatchSnapshot();
  });
});
