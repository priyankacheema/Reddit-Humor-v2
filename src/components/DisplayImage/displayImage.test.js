import DisplayImage from './displayImage';
import React from 'react';

import { expect } from 'code';
import { shallow } from 'enzyme';

describe('Given DisplayImage', () => {
  const images= [
    {id: 1, url: 'https://i.redditmedia.com/hvSYlYPQ_ntzAM1kSpsIG1Tab6R6Ma8Oqyxlv5mf7uM.jpg?s=9c9b598827890400f80e0eb3ee2aaf49', title: 'title1', gif: false},
    {id: 2, url: 'https://i.redditmedia.com/eT4C1WDPIvyrAj7JRQgx4K1QE6vgQJbNs9kQqVdgMss.png?s=7b9411547a5b2dbeb456ea728946d673', title: 'title2', gif: false },
    {id: 3, url: 'https://i.redditmedia.com/ZF8CE_Phxa85sr8iBR8avJvBIg9yxVX_8SQs4o9NAY0.jpg?s=7b564c26c702b03e3c1fbcc9a22f5a5e', title: 'title3', gif: false }
  ]

  function requiredProps(overRides={}) {
    const props = {
      images,
      current: 0
    };

    return { ...props, ...overRides }
  }

  function renderComponent(props = requiredProps()) {
    return (shallow(<DisplayImage { ...props } />))
  }

  it('should exist with a specifying class name', () => {
    const component = renderComponent();
    expect(component.is('article.display-image')).to.be.true();
  })

  it('should contain an image', () => {
    const component = renderComponent();
    expect(component.find('img').exists()).to.be.true()
  })
})
