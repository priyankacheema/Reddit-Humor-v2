import ConnectedDisplay from './connectedDisplay';
import Display from './display';
import React from 'react';
import ReactDOM from 'react-dom';

import { expect } from 'code';
import { shallow } from 'enzyme';
import sinon from 'sinon'

import configureMockStore from 'redux-mock-store';

describe('Given a Connected Display Component', () => {
  const mockStore = configureMockStore();
  const store = mockStore({ 
    humor: {
      images: [],
      likes: {},
      nsfw: {},
      current: 0,
      gifDuration: {}
    }
  })

  function requiredProps(overRides={}) {
    const props = {};

    return { ...props, ...overRides }
  }

  function renderComponent(props = requiredProps()) {
    return (shallow(<connectedDisplay { ...props } store={store} />))
  }

  
  describe('mapStateToProps', () => {
    it('contains a prop of images', () => {
      const component = shallow(<ConnectedDisplay store={store} />)
      expect(component.props().images).to.equal([])
    })

    it('contains a prop of likes', () => {
      const component = shallow(<ConnectedDisplay store={store} />)
      expect(component.props().likes).to.equal({})
    })

    it('contains a prop of nsfw', () => {
      const component = shallow(<ConnectedDisplay store={store} />)
      expect(component.props().nsfw).to.equal({})
    })

    it('contains a prop of current', () => {
      const component = shallow(<ConnectedDisplay store={store} />)
      expect(component.props().current).to.equal(0)
    })
    
    it('contains a prop of gifDuration', () => {
      const component = shallow(<ConnectedDisplay store={store} />)
      expect(component.props().gifDuration).to.equal({})
    })
  })
  
})