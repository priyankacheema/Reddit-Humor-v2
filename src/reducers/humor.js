import * as types from '../actions/actions-list'

export const initialState = {

    images: [],
    likes: {},
    nsfw: {},
    current: 0,
    gifDuration: {},

}

export const setImagesData = (dataLoad, state) => {

    const {images, likes, nsfw, gifDuration} = {dataLoad}
    const newLikes = {likes, ...state.likes}
    const newNsfw = {nsfw, ...state.nsfw}

    return {images, likes: newLikes, nsfw: newNsfw, gifDuration}

}



