import * as types from '../actions/actions-list'

export const initialState = {

    images: [],
    likes: {},
    nsfw: {},
    current: 0,
    gifDuration: {},

}

export const initStore = (state, dataLoad) => {

    const {images, likes, nsfw, gifDuration} = {dataLoad}
    const newLikes = {likes, ...state.likes}
    const newNsfw = {nsfw, ...state.nsfw}

    return {...state, images, likes: newLikes, nsfw: newNsfw, gifDuration}

}

export const setCurrentIndex = (state, {i}) => ({...state, current: i})

export const increaseLikes = (state, {id}) => {

    const numLikes = state.likes[id] + 1
    const likes = {...state.likes, id: numLikes}

    return {...state, likes}

}

export const setNsfw = (state, {id}) => {

    const nsfw = {...state.nsfw}
    nsfw[id] = true

    return {...state, nsfw}

}

export const humorReducer = (state = initialState, action) => {

    const actionsHandler = {

        [types.INIT_STORE]: initStore,
        [types.SET_CURRENT_INDEX]: setCurrentIndex,
        [types.INCREASE_LIKES]: increaseLikes,
        [types.SET_NSFW]: setNsfw

    }

    const reducer = actionsHandler[action.type]
    return reducer ? reducer(state, action) : state

}






