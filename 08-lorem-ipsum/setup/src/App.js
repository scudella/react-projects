import React, { useState } from 'react';
import data from './data';
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [number, setNumber] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let loremNumber;
    if (number <= 0) {
      loremNumber = 1;
    } else if (number > data.length) {
      loremNumber = data.length;
    } else loremNumber = number;
    setParagraphs(data.slice(0, loremNumber));
  };

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs : </label>
        <input
          type='number'
          name='amount'
          id='amount'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
