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

  it('should contain a like button', () => {
    const component = renderComponent();
    expect(component.find('button.like-button').exists()).to.be.true();
  })

  it('should contain a NSFW button', () => {
    const component = renderComponent();
    expect(component.find('button.NSFW-button').exists()).to.be.true();
  })

  it('should contain a previous button', () => {
    const component = renderComponent();
    expect(component.find('button.previous-button').exists()).to.be.true();
  })

  it('should contain a next button', () => {
    const component = renderComponent();
    expect(component.find('button.next-button').exists()).to.be.true();
  })

  it('should contain a slack button', () => {
    const component = renderComponent();
    expect(component.find('button.slack-button').exists()).to.be.true();
  })
})