import React from 'react';
import PropTypes from 'prop-types';

const Buttons = (props) => {
  const { increaseCurrent, decreaseCurrent, updateLike, updateNSFW, shareWithSlack  } = props;

  const handleClick = (e) => {
    const buttonType = e.target.name;

    switch(buttonType) {
      case 'next': 
        return increaseCurrent();
      case 'previous': 
        return decreaseCurrent();
      case 'like': 
        return updateLike();
      case 'NSFW': 
        return updateNSFW();
      case 'slack': 
        return shareWithSlack();
      default:
        return
    }
  }
  
  return (
    <section className="user-buttons">
      <button className="like-button" name='like' onClick={handleClick}>Like</button>
      <button className="NSFW-button" name='NSFW' onClick={handleClick}>NSFW</button>
      <button className="previous-button" name='previous' onClick={handleClick}>Previous</button>
      <button className="next-button" name='next' onClick={handleClick}>Next</button>
      <button className="slack-button" name='slack' onClick={handleClick}>Share To Slack</button>
    </section>
  )
}

Buttons.defaultProps = {
  increaseCurrent: () => {},
  decreaseCurrent: () => {},
  updateLike: () => {},
  updateNSFW: () => {},
  shareWithSlack: () => {}
}

Buttons.propTypes = {
  increaseCurrent: PropTypes.func.isRequired,
  decreaseCurrent: PropTypes.func.isRequired,
  updateLike: PropTypes.func.isRequired,
  updateNSFW: PropTypes.func.isRequired,
  shareWithSlack: PropTypes.func.isRequired
}

export default Buttons