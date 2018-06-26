import React from 'react';
import { shallow } from 'enzyme';
import ButtonWrapper from './ButtonWrapper';

describe('<ButtonWrapper />', () => {
  test('renders', () => {
    const wrapper = shallow(<ButtonWrapper />);
    expect(wrapper).toMatchSnapshot();
  });
});
