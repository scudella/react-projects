import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { news, handlePage } = useGlobalContext();
  const { page, nbPages } = news;
  return (
    <div className='btn-container'>
      <button
        onClick={(e) => {
          e.preventDefault();
          handlePage({ page: page, mode: 'dec' });
        }}
      >
        prev
      </button>
      <p>
        {page ? page + 1 : 1} of {nbPages ? nbPages : null}
      </p>
      <button
        onClick={(e) => {
          e.preventDefault();
          handlePage({ page: page, mode: 'inc' });
        }}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
