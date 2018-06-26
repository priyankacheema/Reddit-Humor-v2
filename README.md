# Reddit Humor Re-write

This is a draft for a ground up rebuild with sound architecture using Redux and TDD so it can
be more easily maintained and extended in the future. The current, visual design can be maintained.

### Goals
Each of these are set with the next set of developers coming in behind us in mind.
* The app follows conventions we've covered in class and that are used at Deere
* Improve the app with bug fixes
* There is a clear architecture so when it is reviewed by the next group they see a cohesive code base.
  * If you examine the current code, it's really messy. By working together and taking the same approach we can circumvent this.
* Improve the app with additional features
  
  
### Feature Fixes:
* Display `gifs`
  * Currently they are displayed as a static images due to not accounting for `gif` duration
    * `gifs` can be extracted from `data.preview.variants.gif.source.url`
* Scale images appropriately,
  * Low resolution images should be `fit-center` and high resolution images should be `scaled-center`
  
### New Features:
* Like button
* Previous button
* Share to Slack button

#
### Implemention Details
##### Shape of the Redux Store
* `images: []`,
  * This is an `array` of `objects` containing an image `url` , `id`, and `title`: `{url: 'https://dafa', id: 1, title: 'some title'}`
* `current:  0`
  * This is the current `index` of `images` being displayed
* `likes: {}`
  * This is a `table` of `id` to `number_of_likes`, this is important to store independently because the `images array` will be wiped and replaced on a timer. `{ [id]: 0, [id]: 2 }`
* `nsfw: {}`
  * This is another `table`, except is will be a mapping of flagged posts: `{ [id]: true, [id]: false }`
* `gifDuration: {}`
  * This is another `table`, if an `image` is a `gif` then it's duration will be stored here: `{ [id]: true, [id]: false }`
  * If an image is not a gif, perform a lookup in this table will return `undefined`
  
##### Components
* `App` `dispatch: yes`,
   * This is the root level component, when it is mounted, given an interval, it should retrieve top posts from reddit.
     * The retrieved posts should overwrite the `images` array in redux store.
 * `Display` `props: images, current, gifDuration`, `dispatch: yes`
   * This component handles actually displaying the images.
     * `Display` will always display the image on the `current` index
     * Given an interval, once the component has mounted, it should `dispatch` to update the `current` index in the store
       * This should account for `gif` duration
         * This requires a helper function: `getGifDuration`
 * `Next Button` `props: `,
   * This component will update `current` in the redux store with the next image in `images`
  * `Prev Button`,
    * This component will update `current` in the redux store with the next image in `images`
  * `NSFW Button`,
    * This component will flag the `current index`  by updating the `nsfw table` in the redux store
  * `Fullscreen Button`,
    * This component will make the browser window full screen
  * `Like Button`,
    * This component will increment the `current image id` in `likes` in the redux store, it will also display the number of likes next to the button.
  * `Slack Share`,
    * This component will utilize the Slack Web-hook to post the `image` to one of our Slack channels
    * Create a new channel on Slack
    
 ##### Reddit API Request
