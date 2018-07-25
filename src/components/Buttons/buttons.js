import React from 'react';

const Buttons = (props) => {

  return (
    <section className="user-buttons">
      <button className="like-button" name='like'>Like</button>
      <button className="NSFW-button" name='NSFW'>NSFW</button>
      <button className="previous-button" name='previous'>Previous</button>
      <button className="next-button" name='next'>Next</button>
      <button className="slack-button" name='slack'>Share To Slack</button>
    </section>
  )
}

export default Buttons