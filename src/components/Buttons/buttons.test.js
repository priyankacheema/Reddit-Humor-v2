import Buttons from './buttons';
import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'code';
import { shallow } from 'enzyme';

describe('Given Buttons', () => {
  function requiredProps(overRides={}) {
    const props = {
      current: 0
    };
    return { ...props, ...overRides }
  }

  function renderComponent(props = requiredProps()) {
    return (shallow(<Buttons { ...props } />))
  }

  it('should exist with a specifying class name', () => {
    const component = renderComponent();
    expect(component.is('section.user-buttons')).to.be.true();
  })

  describe('The Like Button', () => {
    const component = renderComponent();
    const button = component.find('button.like-button');

    it('should contain a like button', () => {
      expect(button.exists()).to.be.true();
    })
  })

  describe('The NSFW Button', () => {
    const component = renderComponent();
    const button = component.find('button.NSFW-button');

    it('should contain a NSFW button', () => {
      expect(button.exists()).to.be.true();
    })
  })

  describe('The Previous Button', () => {
    const component = renderComponent()
    const button = component.find('button.previous-button')

    it('should contain a previous button', () => {
      expect(button.exists()).to.be.true();
    })
  })
  
  describe('The Next Button', () => {
    const component = renderComponent();
    const button = component.find('button.next-button')
    
    it('should contain a next button', () => {
      expect((button).exists()).to.be.true();
    })
  })

  describe('The Slack Button', () => {
    const component = renderComponent();
    const button = component.find('button.slack-button')

    it('should contain a slack button', () => {
      expect(button.exists()).to.be.true();
    })
  })

})