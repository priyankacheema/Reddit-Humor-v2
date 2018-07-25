import React from 'react'
import PropTypes from 'prop-types'
import sendToSlack from '../../utils/postToSlack'

const Buttons = props => {
  return (
    <main className="user-buttons">
      <button className="like" onClick={() => props.like(props.image.id)}>
        Like
      </button>
      <button className="nsfw" onClick={() => props.nsfw(props.image.id)}>
        NSFW
      </button>
      <button
        className="previous"
        onClick={() =>
          props.previous(props.current === 0 ? 24 : props.current - 1)
        }
      >
        Previous
      </button>
      <button className="next" onClick={() => props.next(props.current + 1)}>
        Next
      </button>
      <button className="share" onClick={() => props.share(props.image)}>
        Share
      </button>
    </main>
  )
}

Buttons.defaultProps = {
  next: () => {},
  previous: () => {},
  like: () => {},
  nsfw: () => {},
  share: post => sendToSlack(post.title, post.url)
}

Buttons.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  like: PropTypes.func.isRequired,
  nsfw: PropTypes.func.isRequired,
  share: PropTypes.func.isRequired
}

export default Buttons
