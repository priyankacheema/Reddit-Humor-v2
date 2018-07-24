import Display from './display';
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
    return (shallow(<Display { ...props } />))
  }

  it('should exist with a specifying class name', () => {
    const component = renderComponent();
    expect(component.is('section.display')).to.be.true();
  })

  it('should contain the Buttons component', () => {
    const component = renderComponent();
    expect(component.find('Buttons').exists()).to.be.true();
  })

  it('should contain a DisplayImage component', () => {
    const component = renderComponent();
    expect(component.find('DisplayImage').exists()).to.be.true();
  })
})