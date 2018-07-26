import React from 'react'
import PropTypes from 'prop-types'
import sendToSlack from '../../utils/postToSlack'
import * as icon from 'react-feather'
import './buttons.css'

const Buttons = props => {
  const id = props.image && props.image.id
  return (
    <main className="user-buttons relative justify-center flex items-center pa4">
      <icon.Heart
        className="like grow ph3"
        onClick={() => props.like(props.image.id)}
      />
      <h2 className='ph3'>{props.likes[id]}</h2>
      <icon.AlertTriangle
        className="nsfw grow link ph3"
        onClick={() => props.nsfw(props.image.id)}
      />
      <icon.ChevronsLeft
        className="previous dim grow link ph3"
        onClick={() =>
          props.previous(props.current === 0 ? props.images.length - 1 : props.current - 1)
        }
      />
      <icon.ChevronsRight
        className="next dim grow link ph3"
        onClick={() =>
          props.next(
            props.current === props.images.length - 1 ? 0 : props.current + 1
          )
        }
      />
      <div
        onClick={() => props.share(props.image)}
        className="share grow link hover-silver near-black ph3 dib h2 w1 mr3"
      />
    </main>
  )
}

Buttons.defaultProps = {
  next: () => {},
  previous: () => {},
  like: () => {},
  nsfw: () => {},
  share: post => sendToSlack(post.title, post.url, post.id)
}

Buttons.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  like: PropTypes.func.isRequired,
  nsfw: PropTypes.func.isRequired,
  share: PropTypes.func.isRequired
}

export default Buttons
