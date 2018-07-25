import React from 'react'
import PropTypes from 'prop-types'
import sendToSlack from '../../utils/postToSlack'
import * as icon from 'react-feather'

const Buttons = props => {
  return (
    <main className="user-buttons tc pa4">
      <icon.Heart className="like  ph3" onClick={() => props.like(props.image.id)} />
      <icon.AlertTriangle
        className="nsfw ph3"
        onClick={() => props.nsfw(props.image.id)}
      />
      <icon.ChevronsLeft
        className='previous ph3'
        onClick={() =>
          props.previous(props.current === 0 ? 24 : props.current - 1)
        }
      />
      <icon.ChevronsRight
        className="next ph3"
        onClick={() => props.next(props.current === props.images.length -1 ? 0 : props.current + 1)}
      />
      <icon.Slack
        onClick={() => props.share(props.image)}
        className="share link hover-silver near-black ph3 dib h2 w2 mr3"

      />
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
