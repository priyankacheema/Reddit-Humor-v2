import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/connectedButtons';
import DisplayImage from '../DisplayImage/connectedDisplayImage';

class Display extends Component {

  componentDidMount() {
    this.props.getHumor()
  }

  render() {
    return (
      <section className="display">
        <Buttons />
        <DisplayImage />
      </section>
    )
  }
}

Display.propTypes = {
  getHumor: PropTypes.func.isRequired
}

export default Display;