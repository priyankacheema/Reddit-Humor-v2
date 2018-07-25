import React from 'react'
import PropTypes from 'prop-types'

const shouldScale = url => {
  let scale
  let img = new Image()
  img.src = url
  img.onload = () => {
    if (img.height >= 600) scale = true
  }
  return scale
}

const shouldSkip = (url, props) => {
  let img = new Image()
  img.src = url
  img.onload = () => {
    if (img.height >= 1800) {
      props.next(props.current === 24 ? 0 : props.current + 1)
    }
  }
}

const image = props => {
  const currentImage = props.images[props.current]
  shouldSkip(currentImage && currentImage.url, props)
  return shouldScale(currentImage && currentImage.url) ? (
    <div className="aspect-ratio aspect-ratio--5x8 mb4">
      <div
        className="aspect-ratio--object cover"
        style="background:url(currentImage.url) center;"
      />
    </div>
  ) : (
    <img src={currentImage && currentImage.url} alt="reddit-humor" />
  )
}

const DisplayImage = props => {
  return (
    <article className="display-image mw5 mt6 mw6-ns shadow-5 center">
      {image(props)}
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
