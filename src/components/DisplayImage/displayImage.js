import React from 'react'
import PropTypes from 'prop-types'

const image = props => {
  const currentImage = props.images[props.current]
  return <img src={currentImage && currentImage.url} alt='reddit-humor' />
}

const DisplayImage = props => {
  return (
    <article className='display-image'>
      <h3 className='tc'>
        {props.images[props.current] && props.images[props.current].title}
      </h3>
      <article className='display-image mw5 br3 mt3 tc mw6-ns shadow-5 center'>
        {image(props)}
      </article>
    </article>
  )
}

DisplayImage.defaultProps = {
  next: () => {},
  images: [],
  current: undefined,
  nsfw: {}
}

DisplayImage.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  nsfw: PropTypes.shape({
    id: PropTypes.bool
  }),
}

export default DisplayImage
