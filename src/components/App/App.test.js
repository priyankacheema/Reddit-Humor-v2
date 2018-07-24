import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { expect } from 'code';
import { shallow } from 'enzyme';

describe('Given Display', () => {
  function requiredProps(overRides={}) {
    const props = {};
    return { ...props, ...overRides }
  }

  function renderComponent(props = requiredProps()) {
    return (shallow(<App { ...props } />))
  }

  it('should exist with a specifying class name', () => {
    const component = renderComponent();
    expect(component.is('main.App')).to.be.true();
  })

  it('should contain the Display Component', () => {
    const component = renderComponent();
    expect(component.find('Connect(Display)').exists()).to.be.true();
  })

})