import * as actions from './humor'
import * as types from './actions-list'
import {expect} from 'code'
import configureMockStore from 'redux-mock-store'
import {getPosts, extractForStore} from '../utils/parseUtils'
import thunk from 'redux-thunk'
import sinon from 'sinon'
import {initialState} from '../reducers/humor'



describe('humor actions', () => {


    describe('getHumor', () => {

        let fetchStub
        const humorResponse = require('../data/response')

        beforeEach(() => {

            fetchStub = sinon.stub(global, 'fetch')
            fetchStub.resolves({json: () => humorResponse})


        })

        afterEach(() => {

            sinon.restore()

        })

        it('should fetch data from programmer humor, parse the info, and dispatch the action', async () => {

            const middlewares = [thunk]
            const mockStore = configureMockStore(middlewares)

            const posts = getPosts(humorResponse)
            const dataLoad = extractForStore(posts)
            const store = mockStore(initialState)

            await store.dispatch(actions.getHumor())
            const expectedAction = actions.initStore(dataLoad)

            expect(store.getActions()[0]).to.equal(expectedAction)

        })

    })
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