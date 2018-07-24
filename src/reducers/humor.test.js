import * as actions from '../actions/humor'
import * as reducers from './humor'
import * as types from '../actions/actions-list'
import {expect} from 'code'


describe('humor reducers', () => {


    describe('humorReducer', () => {

        describe('and INIT_STORE action is passed', () => {

            it('should update the store with the data load', () => {

                const dataLoad = {images: [{}, {}, {}], likes: {xyz8u0B: 0}, nsfw: {xyz8u0B: false}, gifDuration: {xyz8u0B: 0}}
                const action = actions.initStore(dataLoad)

                const expectedState = {...reducers.initialState, ...dataLoad}
                const newState = reducers.humorReducer(undefined, action)

                expect(newState).to.equal(expectedState)

            })

        })

    })

})