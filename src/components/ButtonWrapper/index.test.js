import React from 'react';
import { shallow } from 'enzyme';
import Index from './index';

describe('<Index />', () => {
  test('renders', () => {
    const wrapper = shallow(<Index />);
  });
});
