import React, { useContext, useEffect, useReducer } from 'react';

import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';
import reducer from './reducer';

const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?';

const initialState = {
  loading: true,
  hits: [],
  search: 'react 18',
  page: 0,
  nbPages: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { page, search } = state;

  useEffect(() => {
    const url = `${API_ENDPOINT}query=${search}&page=${page}`;
    dispatch({ type: SET_LOADING });
    async function fetchNews() {
      try {
        const response = await fetch(url);
        const news = await response.json();
        dispatch({
          type: SET_STORIES,
          payload: { hits: news.hits, nbPages: news.nbPages },
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchNews();
  }, [page, search]);

  const handleSearch = (value) => {
    dispatch({ type: HANDLE_SEARCH, payload: value });
  };

  const handlePage = (mode) => {
    dispatch({ type: HANDLE_PAGE, payload: mode });
  };

  const removeStory = (id) => {
    dispatch({ type: REMOVE_STORY, payload: id });
  };

  return (
    <AppContext.Provider
      value={{ ...state, handleSearch, handlePage, removeStory }}
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
