import React, { useState, useContext } from 'react';
// make sure to use https
import useFetch from './useFetch';
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [search, setSearch] = useState('xavier');
  const { loading, error, data: movies } = useFetch(`&s=${search}`);

  return (
    <AppContext.Provider
      value={{
        movies,
        loading,
        search,
        setSearch,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
