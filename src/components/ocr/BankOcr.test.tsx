import React from 'react';
import { shallow } from 'enzyme';
import BankOcr from './BankOcr';

describe('BankOcr', () => {
  it('should render', () => {
    const wrapper = shallow(<BankOcr />);
    expect(wrapper).toMatchSnapshot();
  });
});
