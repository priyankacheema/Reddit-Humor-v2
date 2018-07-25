import React from 'react';
import PropTypes from 'prop-types';

const DisplayImage = (props) => {
  return (
    <section className="display-image">
      <img src={props.image.url} alt="reddit-humor" />
    </section>
  )
}

DisplayImage.propTypes = {
  image: PropTypes.string.isRequired
}

export default DisplayImage