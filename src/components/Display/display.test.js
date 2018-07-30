import Display from './display';
import React from 'react';
import {expect} from 'code';
import {shallow} from 'enzyme';
import sinon from 'sinon'

import {getNextIndex} from '../../utils/getNextIndex'

describe('Given Display', () => {

    function requiredProps(overRides = {}) {

        const props = {

            images: [],
            current: 0,
            gifDuration: {},
            likes: {1: 0, 2: 0, 3: 0},
            getHumor: sinon.spy(),
            setCurrentIndex: sinon.spy(),
            getNextIndex
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

    describe('Fetching Images', () => {
        let clock, getHumorSpy;

        beforeEach(() => {
            clock = sinon.useFakeTimers();
            getHumorSpy = sinon.spy();
        })

        afterEach(() => {
            sinon.restore()
        })

        it('should fetch images when the component first mounts', () => {
            renderComponent(requiredProps({ getHumor: getHumorSpy }));
            sinon.assert.calledOnce(getHumorSpy)
        })

        it('should refetch images from Reddit every 3600000 ms', async () => {
            renderComponent(requiredProps({ getHumor: getHumorSpy }));
            await Promise.resolve();
    
            clock.tick(3600000)
    
            sinon.assert.calledTwice(getHumorSpy)
        })
    
    })

    describe('Displaying next Image', () => {
        let clock, setCurrentIndexSpy, images;

        beforeEach(() => {
            clock = sinon.useFakeTimers(); 
            setCurrentIndexSpy = sinon.spy();

            images = [
                { id: '1', url: 'http://www.fake.com', title: 'pic1', gif: false },
                { id: '2', url: 'http://www.fake2.com', title: 'pic2', gif: false },
                { id: '3', url: 'http://www.fake3.com', title: 'pic3', gif: false }
            ]
        })

        afterEach(() => {
            sinon.restore();
        })

        it('should render a new image every 20000 ms', async () => { 
            const component = renderComponent(requiredProps({ 
                images, 
                setCurrentIndex: setCurrentIndexSpy
            }));
            
            component.setState()
            await Promise.resolve()
    
            clock.tick(20000);

            sinon.assert.calledOnce(setCurrentIndexSpy)
            sinon.assert.calledWithExactly(setCurrentIndexSpy, 1)
        })
    
        it('if gif, should render a new image after displaying the gif for three times', async () => {
            const gifDuration = 10000;
            images = [
                { id: '1', url: 'http://www.fake.com', title: 'pic1', gif: true },
                { id: '2', url: 'http://www.fake2.com', title: 'pic2', gif: true },
                { id: '3', url: 'http://www.fake3.com', title: 'pic3', gif: true }
            ]

            const component = renderComponent(requiredProps({ 
                images, 
                setCurrentIndex: setCurrentIndexSpy, 
                getGifDuration: sinon.stub().returns(gifDuration)
            }));
            
            component.setState()
            await Promise.resolve()

            clock.tick(gifDuration * 3);
    
            sinon.assert.calledOnce(setCurrentIndexSpy)
            sinon.assert.calledWithExactly(setCurrentIndexSpy, 1)
        })
    })

    

})