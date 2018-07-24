import gifInfo from 'gif-me-info'

export default async function getGifDuration (url) {
    const gif = [url]
    const result = await gifInfo(gif)
    return result[0].duration
}
