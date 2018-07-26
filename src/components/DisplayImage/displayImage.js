import React from 'react'
import PropTypes from 'prop-types'

const shouldScale = url => {
  let scale = false
  const img = new Image()
  img.src = url
  img.onload = () => {
    if (img.height >= 600) scale = true
  }
  return scale
}

const image = props => {
  const currentImage = props.images[props.current]
  return shouldScale(currentImage && currentImage.url) ? (
    <div className="aspect-ratio aspect-ratio--5x8 mb4">
      <img
        className="aspect-ratio--object cover"
        src={currentImage && currentImage.url}
        alt="reddit-humor"
      />
    </div>
  ) : (
    <img src={currentImage && currentImage.url} alt="reddit-humor" />
  )
}

const DisplayImage = props => {
  return (
    <article className='display-image'>
      <h3 className="tc">
        {props.images[props.current] && props.images[props.current].title}
      </h3>
      <article className="display-image mw5 mt3 mw6-ns shadow-5 center">
        {image(props)}
      </article>
    </article>
  )
}

DisplayImage.defaultProps = {
  next: () => {}
}

DisplayImage.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired
}

export default DisplayImage
