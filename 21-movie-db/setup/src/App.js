import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useGlobalContext } from './context';

import Home from './Home';
import Movie from './SingleMovie';

function App() {
  const { loading } = useGlobalContext();
  if (loading) {
    return <h1 className='loading'>Loading ...</h1>;
  }
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/movies/:id'>
        <Movie />
      </Route>
    </Switch>
  );
}

export default App;
