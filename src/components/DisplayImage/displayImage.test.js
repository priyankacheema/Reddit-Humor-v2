import DisplayImage from './displayImage';
import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'code';
import { shallow } from 'enzyme';

describe('Given Display', () => {
  const image = 'https://i.redditmedia.com/hvSYlYPQ_ntzAM1kSpsIG1Tab6R6Ma8Oqyxlv5mf7uM.jpg?s=9c9b598827890400f80e0eb3ee2aaf49'
  function requiredProps(overRides={}) {
    const props = { image };
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