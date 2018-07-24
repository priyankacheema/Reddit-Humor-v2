import Buttons from './buttons';
import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'code';
import { shallow } from 'enzyme';

describe('Given Display', () => {
  function requiredProps(overRides={}) {
    const props = {};
    return { ...props, ...overRides }
  }

  function renderComponent(props = requiredProps()) {
    return (shallow(<Buttons { ...props } />))
  }

  it('should exist with a specifying class name', () => {
    const component = renderComponent();
    expect(component.is('section.user-buttons')).to.be.true();
  })
})