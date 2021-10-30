import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { search, setSearch, error } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className='search-form' onSubmit={handleSubmit}>
        <h2>search movies</h2>
        <input
          type='text'
          className='form-input'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
        {error.show && <div className='error'>{error.msg}</div>}
      </form>
    </>
  );
};

export default SearchForm;
