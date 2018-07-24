import * as actions from './humor'
import * as types from './actions-list'
import {expect} from 'code'


describe('humor actions', () => {


    describe('initStore', () => {

        it('should generate an action to initialize the store with a data load', () => {

            const dataLoad = {images: [], likes: {}, nsfw: {}, current: 0, gifDuration: {}}
            const expectedAction = {type: types.INIT_STORE, dataLoad}

            expect(actions.initStore(dataLoad)).to.equal(expectedAction)


        })

    })

    describe('setCurrentIndex', () => {

        it('should generate an action to update the current index', () => {

            const expectedIndex = 10
            const expectedAction = {type: types.SET_CURRENT_INDEX, i: expectedIndex}

            expect(actions.setCurrentIndex(expectedIndex)).to.equal(expectedAction)


        })

    })

    describe('increaseLikes', () => {

        it('should generate an action to increment the number of likes', () => {

            const expectedId = 'xyz72o8'
            const expectedAction = {type: types.INCREASE_LIKES, id: expectedId}

            expect(actions.increaseLikes(expectedId)).to.equal(expectedAction)

        })

    })

    describe('setNsfw', () => {

        it('should generate an action to flag an image as NSFW', () => {

            const expectedId = 'xyz72o8'
            const expectedAction = {type: types.SET_NSFW, id: expectedId}

            expect(actions.setNsfw(expectedId)).to.equal(expectedAction)

        })

    })

})