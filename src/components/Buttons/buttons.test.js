import Buttons from './buttons'
import React from 'react'
import { expect } from 'code'
import { shallow } from 'enzyme'
import sinon from 'sinon'

describe('Given Buttons', () => {
  const like = sinon.spy()
  const next = sinon.spy()
  const nsfw = sinon.spy()
  const previous = sinon.spy()
  const share = sinon.spy()

  function requiredProps (overRides = {}) {
    const props = {
      current: 0,
      image: {
        id: '91mueb',
        url:
          'https://i.redditmedia.com/h7RZXBdN0a3WKIRZZnxRia6Y…pHymLr5wQI.jpg?s=96ddc2884cf238dc2cf46643290eb9d8',
        title: 'Conversion tables in Interstellar',
        gif: false
      },
      images: [
        {
          id: 1,
          url:
            'https://i.redditmedia.com/hvSYlYPQ_ntzAM1kSpsIG1Tab6R6Ma8Oqyxlv5mf7uM.jpg?s=9c9b598827890400f80e0eb3ee2aaf49',
          title: 'title1',
          gif: false
        },
        {
          id: 2,
          url:
            'https://i.redditmedia.com/eT4C1WDPIvyrAj7JRQgx4K1QE6vgQJbNs9kQqVdgMss.png?s=7b9411547a5b2dbeb456ea728946d673',
          title: 'title2',
          gif: false
        },
        {
          id: 3,
          url:
            'https://i.redditmedia.com/ZF8CE_Phxa85sr8iBR8avJvBIg9yxVX_8SQs4o9NAY0.jpg?s=7b564c26c702b03e3c1fbcc9a22f5a5e',
          title: 'title3',
          gif: false
        }
      ],
      like,
      likes = 0,
      next,
      nsfw,
      previous,
      share
    }
    return { ...props, ...overRides }
  }

  function renderComponent (props = requiredProps()) {
    return shallow(<Buttons {...props} />)
  }

  it('should exist with a specifying class name', () => {
    const component = renderComponent()
    expect(component.is('main.user-buttons')).to.be.true()
  })

  describe('The Like Button', () => {
    const component = renderComponent()
    const button = component.find('Heart.like')

    it('should contain a like button', () => {
      expect(button.exists()).to.be.true()
    })

    it('should call the like method when click', () => {
      button.simulate('click')
      sinon.assert.calledOnce(like)
    })
  })

  describe('The NSFW Button', () => {
    const component = renderComponent()
    const button = component.find('AlertTriangle.nsfw')

    it('should contain a NSFW button', () => {
      expect(button.exists()).to.be.true()
    })

    it('should call the nsfw method when click', () => {
      button.simulate('click')
      sinon.assert.calledOnce(nsfw)
    })
  })

  describe('The Previous Button', () => {
    const component = renderComponent()
    const button = component.find('ChevronsLeft.previous')

    it('should contain a previous button', () => {
      expect(button.exists()).to.be.true()
    })

    it('should call the previous method when click', () => {
      button.simulate('click')
      sinon.assert.calledOnce(previous)
    })
  })

  describe('The Next Button', () => {
    const component = renderComponent()
    const button = component.find('ChevronsRight.next')

    it('should contain a next button', () => {
      expect(button.exists()).to.be.true()
    })

    it('should call the next method when click', () => {
      button.simulate('click')
      sinon.assert.calledOnce(next)
    })
  })

  describe('The share Button', () => {
    const component = renderComponent()
    const button = component.find('Slack.share')

    it('should contain a share button', () => {
      expect(button.exists()).to.be.true()
    })

    it('should call the share method when click', () => {
      button.simulate('click')
      sinon.assert.calledOnce(share)
    })
  })
})
