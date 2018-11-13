
export const getPosts = (response) => response.data.children.reduce(postReducer, [])

const postReducer = (posts, child) => {

    const post = child.data
    if (!isStickied(post) && isImage(post)) posts.push(post)
    return posts

}

export const isImage = (post) => post.preview ? true : false
export const isStickied = (post) => post.stickied ? true : false
export const getId = (post) => post.id
export const getTitle = (post) => post.title
export const isGif = (post) => post.preview && post.preview.variants && post.preview.variants.gif ? true : false
export const getUrl = post => (
    isGif(post)
    ? post.preview.variants.gif.source.url
    : post.preview.images[0].source.url
    
)
 export const isUsableHeight = post => (post.preview.images[0].source.height < 1799 ? true : false)


export const getPostImageInfo = (post) => ({id: getId(post), url: getUrl(post), title: getTitle(post), gif: isGif(post), height:isUsableHeight(post)})

export const extractForStore = (posts) => {
    const images = []
    const likes = {}
    const nsfw = {}
    const gifDuration = {}

    posts.forEach((post) => {
        const imageData = getPostImageInfo(post)
        images.push(imageData)
        const {id} = imageData
        likes[id] = 0
        nsfw[id] = false
        gifDuration[id] = 0

    })

    return {images, likes, nsfw, gifDuration}

}
