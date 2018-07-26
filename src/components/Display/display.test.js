import Display from './display';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon'

describe('Given Display', () => {

    function requiredProps(overRides = {}) {

        const props = {

            images: [],
            current: 0,
            gifDuration: {},
            likes: {1: 0, 2: 0, 3: 0},
            getHumor: sinon.spy(),
            setCurrentIndex: sinon.spy(),

        };

        return {...props, ...overRides}
    }

    function renderComponent(props = requiredProps()) {
        return (shallow(<Display {...props} />))
    }

    it('should exist with a specifying class name', () => {
        const component = renderComponent();
        expect(component.is('section.display')).to.be.true();
    })

    it('should contain the Buttons component', () => {
        const component = renderComponent();
        expect(component.find('Connect(Buttons)').exists()).to.be.true();
    })

    it('should contain a DisplayImage component', () => {
        const component = renderComponent();
        expect(component.find('Connect(DisplayImage)').exists()).to.be.true();
    })

})