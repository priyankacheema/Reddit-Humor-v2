import Display from './display';
import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'code';
import { shallow } from 'enzyme';
import sinon from 'sinon'

import * as Actions from '../../actions/humor';

describe('Given Display', () => {
  const images= [
    {id: 1, url: 'https://i.redditmedia.com/hvSYlYPQ_ntzAM1kSpsIG1Tab6R6Ma8Oqyxlv5mf7uM.jpg?s=9c9b598827890400f80e0eb3ee2aaf49', title: 'title1', gif: false},
    {id: 2, url: 'https://i.redditmedia.com/eT4C1WDPIvyrAj7JRQgx4K1QE6vgQJbNs9kQqVdgMss.png?s=7b9411547a5b2dbeb456ea728946d673', title: 'title2', gif: false },
    {id: 3, url: 'https://i.redditmedia.com/ZF8CE_Phxa85sr8iBR8avJvBIg9yxVX_8SQs4o9NAY0.jpg?s=7b564c26c702b03e3c1fbcc9a22f5a5e', title: 'title3', gif: false }
  ]

  function requiredProps(overRides={}) {

    const props = {
      images,
      current: 0,
      gifDuration: {},
      likes: { 1:0, 2:0, 3:0},
      getHumor: sinon.spy()
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

  it('should fetch images upon mounting', () => {
    const getHumorSpy = sinon.spy();
    renderComponent(requiredProps({ getHumor: getHumorSpy }));
    sinon.assert.calledOnce(getHumorSpy)
  })
})