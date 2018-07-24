import DisplayImage from './displayImage';
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
    return (shallow(<DisplayImage { ...props } />))
  }

  it('should exist with a specifying class name', () => {
    const component = renderComponent();
    expect(component.is('section.display-image')).to.be.true();
  })

  it('should contain an image', () => {
    const component = renderComponent();
    expect(component.find('img').exists()).to.be.true()
  })
})