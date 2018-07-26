import * as actions from '../actions/humor'
import * as reducers from './humor'
import * as types from '../actions/actions-list'
import {expect} from 'code'


describe('humor reducers', () => {

    describe('humorReducer', () => {

        describe('and INIT_STORE action is passed', () => {

            it('should update the store with the data load', () => {

                const dataLoad = {

                    images: [{id: 'xyz8u0B'}, {id: 'xadsfds21'}, {id: 'zcvcsad3J'}],
                    likes: {xyz8u0B: 0, xadsfds21: 0, zcvcsad3J: 0},
                    nsfw: {xyz8u0B: false, xadsfds21: false, zcvcsad3J: false},
                    gifDuration: {xyz8u0B: 0, xadsfds21: 0, zcvcsad3J: 0}

                }

                const action = actions.initStore(dataLoad)

                const expectedState = {...reducers.initialState, ...dataLoad}
                const newState = reducers.humorReducer(undefined, action)

                expect(newState).to.equal(expectedState)

            })

            it('should contain no images that have been flagged as NSFW', () => {

                const dataLoad = {

                    images: [{id: 'xyz8u0B'}, {id: 'xadsfds21'}, {id: 'zcvcsad3J'}],
                    likes: {xyz8u0B: 0, xadsfds21: 0, zcvcsad3J: 0},
                    nsfw: {xyz8u0B: true, xadsfds21: false, zcvcsad3J: false},
                    gifDuration: {xyz8u0B: 0, xadsfds21: 0, zcvcsad3J: 0}

                }

                const action = actions.initStore(dataLoad)
                const newState = reducers.humorReducer(undefined, action)

                const hasNoNsfw = newState.images.every((image) => image.id !== 'xyz8u0B')
                expect(hasNoNsfw).to.equal(true)

            })

        })

        describe('and SET_CURRENT_INDEX action is passed', () => {


            it('should set the current index equal to the given index', () => {

                const expectedIndex = 10
                const action = actions.setCurrentIndex(expectedIndex)

                const expectedState = {...reducers.initialState, current: expectedIndex}

                const newState = reducers.humorReducer(undefined, action)

                expect(newState).to.equal(expectedState)

            })


        })

        describe('and INCREASE_LIKES action is passed', () => {

            it('should increase the number of likes of the given id', () => {

                const id = 'xyz8uoB'
                const numLikes = 1

                const inputState = {...reducers.initialState}
                inputState.likes[id] = numLikes

                const expectedState = {...reducers.initialState, likes: {[id]: 2}}

                const action = actions.increaseLikes(id)
                const newState = reducers.humorReducer(inputState, action)

                expect(newState).to.equal(expectedState)

            })

        })

        describe('and SET_NSFW action is passed', () => {

            it('should flag the given id as NSFW', () => {

                const id = 'xyz8uoB'
                const action = actions.setNsfw(id)

                const expectedState = {...reducers.initialState, nsfw: {[id]: true}}

                const newState = reducers.humorReducer(undefined, action)

                expect(newState).to.equal(expectedState)

            })

        })

        describe('and no valid action is passed', () => {

            describe('and the store is in initial state', () => {

                it('should return the current state', () => {

                    const fakeAction = {type: 'muawhaha'}

                    expect(reducers.humorReducer(undefined, fakeAction)).to.equal(reducers.initialState)

                })

            })

            describe('and a state is passed in', () => {

                it('should return that state', () => {

                    const fakeAction = {type: 'fake'}
                    const mockState = {someMock: ''}

                    expect(reducers.humorReducer(mockState, fakeAction)).to.equal(mockState)

                })

            })

        })

    })

})