import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
  const [active, setActive] = useState(0);

  const previousReview = () => {
    !active ? setActive(data.length - 1) : setActive(active - 1);
  };

  const nextReview = () => {
    active + 1 === data.length ? setActive(0) : setActive(active + 1);
  };

  useEffect(() => {
    const autoReview = () => {
      active + 1 === data.length ? setActive(0) : setActive(active + 1);
    };
    const slide = setInterval(autoReview, 5000);
    return () => {
      clearInterval(slide);
    };
  }, [active]);

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className='section-center'>
        {data.map((review, index) => {
          const { image, name, title, quote } = review;
          return (
            <article
              key={index}
              className={`${
                index === active
                  ? 'activeSlide'
                  : index === active - 1
                  ? 'lastSlide'
                  : active === 0 && index === data.length - 1
                  ? 'lastSlide'
                  : 'nextSlide'
              }`}
            >
              <img className='person-img' src={image} alt={name} />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          );
        })}
        <button className='prev' onClick={previousReview}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={nextReview}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
