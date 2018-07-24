import gifInfo from 'gif-me-info'

export default async function getGifDuration (url) {
    let gif = [url]
    let result = await gifInfo(gif)
    return result[0].duration
}
