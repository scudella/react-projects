import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
  const [hexColor, setHexColor] = useState('');
  const [color, setColor] = useState(new Values('#f15025'));
  const [error, setError] = useState(false);

  const tintsShades = [
    [100, 0],
    [90, 0],
    [80, 0],
    [70, 0],
    [60, 0],
    [50, 0],
    [40, 0],
    [30, 0],
    [20, 0],
    [10, 0],
    [0, 0],
    [0, 10],
    [0, 20],
    [0, 30],
    [0, 40],
    [0, 50],
    [0, 60],
    [0, 70],
    [0, 80],
    [0, 90],
    [0, 100],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(hexColor);
      setColor(colors);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#f15025'
            value={hexColor}
            onChange={(e) => setHexColor(e.target.value)}
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {tintsShades.map((tintShade, index) => {
          return (
            <SingleColor
              key={index}
              color={color}
              tint={tintShade[0]}
              shade={tintShade[1]}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
