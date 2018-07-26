export const getNextIndex = (images, current) => {

    const maxIndex = images.length - 1
    const nextIndex = current + 1 > maxIndex ? 0 : current + 1

    return images[nextIndex].nsfw ? getNextIndex() : nextIndex

}