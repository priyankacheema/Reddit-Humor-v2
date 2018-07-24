import Display from './display';
import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'code';
import { shallow } from 'enzyme';

describe('Given Display', () => {
  const images= [
    'https://i.redditmedia.com/hvSYlYPQ_ntzAM1kSpsIG1Tab6R6Ma8Oqyxlv5mf7uM.jpg?s=9c9b598827890400f80e0eb3ee2aaf49',
    'https://i.redditmedia.com/eT4C1WDPIvyrAj7JRQgx4K1QE6vgQJbNs9kQqVdgMss.png?s=7b9411547a5b2dbeb456ea728946d673',
    'https://i.redditmedia.com/ZF8CE_Phxa85sr8iBR8avJvBIg9yxVX_8SQs4o9NAY0.jpg?s=7b564c26c702b03e3c1fbcc9a22f5a5e'
  ]

  function requiredProps(overRides={}) {
    const props = {
      images,
      current: 0,
      gitDuration: 0
    };

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