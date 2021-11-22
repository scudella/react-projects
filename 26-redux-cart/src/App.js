import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff
import { createStore } from 'redux';

import reducer from './reducer';

import { Provider } from 'react-redux';

// initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 0,
};

// in the case we have multiple reducer files we can remove
// initialStore from here:
// const store = createStore(reducer);
// and set it up in the reducer file as a default parameter:
// function reducer(state = initialStore, action){}
// and move initialStore over there

// the third parameter is to make the redux browse extension work
// in a middleware can be installed as a package, but for simpler
// applications, this will do
const store = createStore(
  reducer,
  initialStore,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
