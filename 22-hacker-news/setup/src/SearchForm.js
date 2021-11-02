import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { search, handleSearch } = useGlobalContext();
  return (
    <form className='search-form'>
      <h2>search hacker news</h2>
      <input
        type='text'
        className='form-input'
        value={search}
        onChange={(e) => {
          e.preventDefault();
          handleSearch(e.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
