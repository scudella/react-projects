import React, { useState, useContext, useEffect } from 'react';
// make sure to use https
export const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API_KEY}`;
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('xavier');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const urlSearch = `${API_ENDPOINT}&s=${search}`;

  const getMovies = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === 'False') {
        setError(true);
        setLoading(false);
        return;
      }
      setMovies(data.Search);
      setError(false);
      setLoading(false);
    } catch (error) {
      setError(false);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    console.log('useeffect');
    getMovies(urlSearch);
    // eslint-disable-next-line
  }, []);

  return (
    <AppContext.Provider
      value={{
        movies,
        loading,
        setLoading,
        search,
        setSearch,
        getMovies,
        urlSearch,
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
