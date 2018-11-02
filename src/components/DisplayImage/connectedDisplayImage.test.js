import ConnectedDisplayImage from './connectedDisplayImage';
import React from 'react';

import { expect } from 'code';
import { shallow } from 'enzyme';
import sinon from 'sinon'

import configureMockStore from 'redux-mock-store';

describe('Given a Connected Display Component', () => {
  const images= [
    {id: 1, url: 'https://i.redditmedia.com/hvSYlYPQ_ntzAM1kSpsIG1Tab6R6Ma8Oqyxlv5mf7uM.jpg?s=9c9b598827890400f80e0eb3ee2aaf49', title: 'title1', gif: false},
    {id: 2, url: 'https://i.redditmedia.com/eT4C1WDPIvyrAj7JRQgx4K1QE6vgQJbNs9kQqVdgMss.png?s=7b9411547a5b2dbeb456ea728946d673', title: 'title2', gif: false },
    {id: 3, url: 'https://i.redditmedia.com/ZF8CE_Phxa85sr8iBR8avJvBIg9yxVX_8SQs4o9NAY0.jpg?s=7b564c26c702b03e3c1fbcc9a22f5a5e', title: 'title3', gif: false }
  ]

  const mockStore = configureMockStore();
  const store = mockStore({ 
    humor: {
      images,
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
    return (shallow(<ConnectedDisplayImage { ...props } store={store} />))
  }

  
  describe('mapStateToProps', () => {
    it('contains a prop of images', () => {
      const component = renderComponent();
      expect(component.props().images).to.equal(images)
    })

    it('contains a prop of current', () => {
      const component = renderComponent();
      expect(component.props().current).to.equal(0)
    })

    it('contains a prop of nsfw', () => {
      const component = renderComponent();
      expect(component.props().nsfw).to.equal({})
      expect(component.props().nsfw.id).to.equal(undefined)
    })
  })
  
})