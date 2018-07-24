import React from 'react';

const DisplayImage = (props) => {
  return (
    <section className="display-image">
      <img src={props.image} />
    </section>
  )
}

export default DisplayImage