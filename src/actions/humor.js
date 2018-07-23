import * as types from './actions-list'
import {fetchProgrammerHumor} from '../utils/fetchProgrammerHumor'
import {getPosts, getId, generateImageData} from '../utils/parseUtils'

export const updateImages = async (dispatch) => {

    const response = await fetchProgrammerHumor()
    const posts = getPosts(response)

        const images = []
        const likes = {}
        const nsfw = {}
        const gifDuration = {}

        posts.map((post) => {

            const imageData = generateImageData(post)
            const {id} = imageData

            images.push(imageData)
            likes[id] = 0
            nsfw[id] = false
            gifDuration[id] = 0

        })

    const action = setImagesData({images, likes, nsfw, gifDuration})
    dispatch(action)

}

export const setImagesData = (dataLoad) => ({type: types.SET_IMAGES_DATA, dataLoad})
export const setCurrentIndex = (i) => ({type: types.SET_CURRENT_INDEX, i})
export const increaseLikes = (id) => ({type: types.INCREASE_LIKES, id})
export const setNSFW = (id) => ({type: types.SET_NSFW, id})