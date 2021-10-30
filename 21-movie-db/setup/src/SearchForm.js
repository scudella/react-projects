import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { search, setSearch, getMovies, urlSearch, error } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('search');
    getMovies(urlSearch);
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
        {error ? <div className='error'>movie not found</div> : null}
      </form>
    </>
  );
};

export default SearchForm;
