import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [review, setReview] = useState(0);

  const rightClick = () => {
    const nextReview = review + 1;
    nextReview === people.length ? setReview(0) : setReview(nextReview);
  };

  const leftClick = () => {
    const nextReview = review - 1;
    nextReview < 0 ? setReview(people.length - 1) : setReview(nextReview);
  };

  const surprise = () => {
    let nextReview = 0;
    do {
      nextReview = Math.floor(Math.random() * people.length);
    } while (nextReview === review);
    setReview(nextReview);
  };

  const { name, job, image, text } = people[review];

  return (
    <React.Fragment>
      <article className='review'>
        <div className='img-container'>
          <img className='person-img' src={image} alt={name} />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'>{name}</h4>
        <p className='job'>{job}</p>
        <p className='info'>{text}</p>
        <div className='botton-container'>
          <button className='prev-btn' onClick={leftClick}>
            <FaChevronLeft />
          </button>
          <button className='next-btn' onClick={rightClick}>
            <FaChevronRight />{' '}
          </button>
        </div>
        <button className='random-btn' onClick={surprise}>
          surprise me
        </button>
      </article>
    </React.Fragment>
  );
};

export default Review;
