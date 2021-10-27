import React from 'react';

const Follower = ({ name, image, url }) => {
  return (
    <article className='card'>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <a href={url} className='btn'>
        view profile
      </a>
    </article>
  );
};

export default Follower;
