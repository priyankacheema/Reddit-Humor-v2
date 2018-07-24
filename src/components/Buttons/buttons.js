import React from 'react';

const Buttons = (props) => {
  return (
    <section className="user-buttons">
      <button className="like-button">Like</button>
      <button className="NSFW-button">NSFW</button>
      <button className="previous-button">Previous</button>
      <button className="next-button">Next</button>
      <button className="slack-button">Share To Slack</button>
    </section>
  )
}

export default Buttons