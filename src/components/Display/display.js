import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/buttons';
import DisplayImage from '../DisplayImage/displayImage';

class Display extends Component {

  componentDidMount() {
    this.props.getHumor()
  }

  render() {
    const { images, current } = this.props;

    return (
      <section className="display">
        <Buttons />
        { images.length && <DisplayImage image={images[current]} /> }
      </section>
    )
  }
}

Display.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  gifDuration: PropTypes.object.isRequired,
  likes: PropTypes.object.isRequired,
  getHumor: PropTypes.func.isRequired
}

export default Display;