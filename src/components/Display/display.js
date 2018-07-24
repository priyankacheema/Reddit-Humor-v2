import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/buttons';
import ConnectedDisplayImage from '../DisplayImage/connectedDisplayImage';

class Display extends Component {

  componentDidMount() {
    this.props.getHumor()
  }

  render() {
    return (
      <section className="display">
        <Buttons />
        <ConnectedDisplayImage />
      </section>
    )
  }
}

Display.propTypes = {
  getHumor: PropTypes.func.isRequired
}

export default Display;