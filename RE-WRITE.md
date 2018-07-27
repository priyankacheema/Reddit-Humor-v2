# Reddit Humor Re-write

This is a draft for a ground up rebuild with sound architecture using Redux and TDD so it can
be more easily maintained and extended in the future. The current, visual design can be maintained.

### Goals
Each of these are set with the next set of developers coming in behind us in mind.
* The app follows conventions.
* Improve the app with bug fixes.
* There is a clear architecture so when it is reviewed by the next group they see a cohesive code base.
* Improve the app with additional features.
  
  
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
  * This is an `array` of `objects` containing an image `url` , `id`, and `title`: `{url: 'https://dafa', id: 1, title: 'some title', gif: true}`
* `current:  0`
  * This is the current `index` of `images` being displayed
* `likes: {}`
  * This is a `table` of `id` to `number_of_likes`, this is important to store independently because the `images array` will be wiped and replaced on a timer. `{ [id]: 0, [id]: 2 }`
* `nsfw: {}`
  * This is another `table`, except is will be a mapping of flagged posts: `{ [id]: true, [id]: false }`
* `gifDuration: {}`
  * This is another `table`, if an `image` is a `gif` then it's duration will be stored here: `{ [id]: 1021, [id]: 111 }`