import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons/buttons';

class Display extends Component {
  
  render() {
    return (
      <section className="display-image">
        <Buttons />
      </section>
    )
  }
}

Display.defaultProps = {
  images: [
    'https://i.redditmedia.com/hvSYlYPQ_ntzAM1kSpsIG1Tab6R6Ma8Oqyxlv5mf7uM.jpg?s=9c9b598827890400f80e0eb3ee2aaf49',
    'https://i.redditmedia.com/eT4C1WDPIvyrAj7JRQgx4K1QE6vgQJbNs9kQqVdgMss.png?s=7b9411547a5b2dbeb456ea728946d673',
    'https://i.redditmedia.com/ZF8CE_Phxa85sr8iBR8avJvBIg9yxVX_8SQs4o9NAY0.jpg?s=7b564c26c702b03e3c1fbcc9a22f5a5e'
  ],
  current: 0,
  gitDuration: 0
}

Display.propTypes = {
  images: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired,
  gitDuration: PropTypes.number.isRequired
}


export default Display;