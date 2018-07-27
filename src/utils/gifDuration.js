import gifyParse from 'gify-parse'; 

export default async function getGifDuration(url) {
    const data = await fetch(url)
    const buffer = await data.arrayBuffer()
    const pictureDataInBinary = Buffer.from(buffer, 'base64')
    return gifyParse.getInfo(pictureDataInBinary).duration
}
