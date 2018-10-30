import * as types from '../actions/actions-list'

export const initialState = {

    images: [],
    likes: {},
    nsfw: {},
    current: 0,
    gifDuration: {},

}

export const initStore = (state = initialState, {dataLoad}) => {

    const likes = {...dataLoad.likes, ...state.likes}
    const nsfw = {...dataLoad.nsfw, ...state.nsfw}

    const images = [...dataLoad.images].filter((image) => !nsfw[image.id])

    const gifDuration = dataLoad.gifDuration

    return {...state, images, likes, nsfw, gifDuration}

}

export const setCurrentIndex = (state, {i}) => ({...state, current: i})

export const increaseLikes = (state, {id}) => {

    const numLikes = state.likes[id] + 1
    const likes = {...state.likes, [id]: numLikes}

    return {...state, likes}

}

export const setNsfw = (state, {id}) => {

    const nsfw = {...state.nsfw}
    nsfw[id] = true
    let images = state.images.filter(image => image.id !== id)
    console.log(images)

    return {...state, nsfw, images}

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






