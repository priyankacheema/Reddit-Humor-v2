import React from 'react';

const Buttons = (props) => {

  const handleClick = (e) => {
    const buttonType = e.target.name;

    switch(buttonType) {
      case 'next': 
        alert(`dispatch action to update ${buttonType}!`)
      case 'previous': 
        alert(`dispatch action to update ${buttonType}!`)
      case 'like': 
        alert(`dispatch action to update ${buttonType}!`)
      case 'NSFW': 
        alert(`dispatch action to update ${buttonType}!`)
      case 'slack': 
        alert(`dispatch action to update ${buttonType}!`)
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

export default Buttons