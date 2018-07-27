# Reddit Humor V2 (RHv2)

RHv2 is a ground up rewrite of the original [Reddit Humor](https://github.com/aquent-it-solutions/reddit-humor), the goal was to develop a maintainable codebase that could be easily extended by trainees.

##### What is Reddit Humor?
Reddit humor is a fun internal web app intended to be displayed on a communal monitor. The app pulls data from [/r/ProgrammerHumor](https://www.reddit.com/r/ProgrammerHumor/) every hour and grabs the top 25 posts. It then displays each title and image for 20 seconds before cycling to the next! It has some great interactivity such as liking and sharing. 
### New Features
 * Previous button to cycle to the last displayed image.
 * Like button to allow users to interact with funny images.
 * Share to Slack button which will post the currently displayed image to our `#reddithumor` channel.
 * Gifs are now correctly displayed, accounting for their duration.

### State Management
* Application state is managed using Redux.

### Additional Dependencies
 * icons: [react-feather](https://github.com/carmelopullara/react-feather)
 * design: [tachyons](https://tachyons.io/) 
 * gif duration extraction: [gif-me-info](https://github.com/STRsplit/gif-me-info)
 
### Contribution
 * Check open issues or file a new one, PR's are always welcome!
 * For feature additions please avoid using React state for consistency.
