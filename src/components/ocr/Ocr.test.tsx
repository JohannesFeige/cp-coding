import React from 'react';
import { shallow } from 'enzyme';
import Ocr from './Ocr';

describe('Ocr', () => {
  it('should render', () => {
    const wrapper = shallow(<Ocr />);
    expect(wrapper).toMatchSnapshot();
  });
});
