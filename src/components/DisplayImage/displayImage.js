import React from 'react';
import PropTypes from 'prop-types';

const DisplayImage = (props) => {

  const currentImage = props.images[props.current]

  return (
    <section className="display-image">
      <img src={currentImage && currentImage.url} alt="reddit-humor" />
    </section>
  )
}

DisplayImage.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired
}

export default DisplayImage