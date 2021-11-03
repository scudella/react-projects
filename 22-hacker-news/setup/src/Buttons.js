import React from 'react';
import { useGlobalContext } from './context';

const Buttons = () => {
  const { loading, handlePage, page, nbPages } = useGlobalContext();
  return (
    <div className='btn-container'>
      <button
        disabled={loading}
        onClick={() => {
          handlePage('dec');
        }}
      >
        prev
      </button>
      <p>
        {page ? page + 1 : 1} of {nbPages ? nbPages : null}
      </p>
      <button
        disabled={loading}
        onClick={() => {
          handlePage('inc');
        }}
      >
        next
      </button>
    </div>
  );
};

export default Buttons;
