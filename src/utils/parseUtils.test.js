import {expect} from 'code'
import {getUrl, isGif, getTitle, getPosts, getId, generateImages, generateLikes, generateNSFW, isImage, isStickied} from './parseUtils'

const data = require('../data/response')


describe('parseUtils', () => {

    describe('and a data load from /r/ProgrammerHumor is being parsed into posts', () => {

        it('should return an array of post information objects', () => {

            const posts = getPosts(data)

            expect(posts).to.be.a.array()
            expect(posts.length).to.equal(25)

        })

        it('should have no stickied posts in the array to prevent parsing functions from breaking', () => {

            const posts = getPosts(data)
            const noStickies = posts.every((post) => post.stickied === false)

            expect(noStickies).to.be.true()

        })

        it('should have no non-image posts in the array to prevent parsing functions from breaking', () => {

            const posts = getPosts(data)
            const allImages = posts.every((post) => post.preview !== false)

            expect(allImages).to.be.true()

        })

        it('each post should have an id, title, and image', () => {

            const posts = getPosts(data)
            const hasIdAndTitle = posts.every((post) => post.id && post.title && post.preview.images[0].source.url)

            expect(hasIdAndTitle).to.be.true()

        })

        describe('isImage', () => {

            it('should check if an image exists in a post', () => {

                const hasImage = {id: 'xyR56', title: 'some title', preview: 'preview-exists-then-image-exists'}
                const noImage = {id: 'xyR56', title: 'some title'}

                expect(isImage(hasImage)).to.be.true()
                expect(isImage(noImage)).to.be.false()

            })

        })

        describe('isStickied', () => {

            it('should check if a post is stickied on the subreddit', () => {

                const stickiedTrue = {stickied: true}
                const stickiedFalse = {stickied: false}

                expect(isStickied(stickiedTrue)).to.be.true()
                expect(isStickied(stickiedFalse)).to.be.false()

            })

        })

    })


    describe('and data is being extracted from posts', () => {

        describe('getId', () => {

            it('should return the post id', () => {

                const expectedId = 'xyzB47'
                const mockData = {id: expectedId}

                expect(getId(mockData)).to.equal(expectedId)

            })

        })

        describe('getTitle', () => {

            it('should return the post title', () => {

                const expectedTitle = 'Awesomeness'
                const mockData = {title: expectedTitle}

                expect(getTitle(mockData)).to.equal(expectedTitle)

            })

        })

        describe('isGif', () => {

            it('should return whether or not the post contains a gif', () => {

                const shouldContainGif = {
                    preview: {
                        variants: {
                            gif: true
                        }
                    }
                }

                const shouldNotContainGif = {
                    preview: {
                        variants: {
                            gif: false
                        }
                    }
                }

                const shouldAlsoNotContainGif = {
                    preview: {

                    }
                }

                expect(isGif(shouldContainGif)).to.be.true()
                expect(isGif(shouldNotContainGif)).to.be.false()
                expect(isGif(shouldAlsoNotContainGif)).to.be.false()

            })

        })

        describe('getUrl', () => {

           it('should return either a gif-image-url or a regular-image-url', () => {

               const gifUrl = 'https://isagif'
               const notGifUrl = 'https://notagif'

               const mockDataWithGif = {preview: {variants: {gif: {source: {url: gifUrl}}}}, gif: false}
               const mockDataNoGif = {preview: {images: [{source: {url: notGifUrl}}]}}

               expect(getUrl(mockDataWithGif)).to.equal(gifUrl)
               expect(getUrl(mockDataNoGif)).to.equal(notGifUrl)

           })

        })

        describe('generateImages', () => {

            it('should generate a structured object with properties set to the return values of `getId, getTitle, getUrl, isGif` fns', () => {

                const gifUrl = 'https://isagif'
                const notGifUrl = 'https://notagif'
                const expectedId = 'xyB79'
                const expectedTitle = '010101011100101'

                const mockDataWithGif = {id: expectedId, title:expectedTitle, preview: {variants: {gif: {source: {url: gifUrl}}}}, gif: true}
                const mockDataNoGif = {id: expectedId, title:expectedTitle, preview: {images: [{source: {url: notGifUrl}}]}, gif: false}

                const expectedDataWithGif = {id: getId(mockDataWithGif), title: getTitle(mockDataWithGif), url: getUrl(mockDataWithGif), gif: isGif(mockDataWithGif)}
                const expectedDataNoGif = {id: getId(mockDataNoGif), title: getTitle(mockDataNoGif), url: getUrl(mockDataNoGif), gif: isGif(mockDataNoGif)}

                expect(generateImages(mockDataWithGif)).to.equal(expectedDataWithGif)
                expect(generateImages(mockDataNoGif)).to.equal(expectedDataNoGif)

            })

        })

        describe('generateLikes', () => {


            it('should generate a table of id: likes, with likes set to 0', () => {

                const expectedData =  {xgtYU78: 0, ynHJ90: 0}
                const mockData = [{id: 'xgtYU78'}, {id: 'ynHJ90'}]

                const o1 = generateLikes(mockData[0])
                const o2 = generateLikes(mockData[1])

                const likes = {...o1, ...o2}

                expect(likes).to.equal(expectedData)

            })

        })

        describe('generateNSFW', () => {


            it('should generate a table of id: nsfw-flag, with nsfw set to false', () => {

                const expectedData =  {xgtYU78: false, ynHJ90: false}
                const mockData = [{id: 'xgtYU78'}, {id: 'ynHJ90'}]

                const o1 = generateNSFW(mockData[0])
                const o2 = generateNSFW(mockData[1])

                const nsfw = {...o1, ...o2}

                expect(nsfw).to.equal(expectedData)

            })

        })



    })

})
