import React, { useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.cart]);

  useEffect(() => {
    dispatch({ type: 'LOADING' });
    async function fetchCart() {
      try {
        const resp = await fetch(url);
        const cart = await resp.json();
        dispatch({ type: 'DISPLAY_ITEMS', payload: cart });
      } catch (error) {
        console.log(error);
      }
    }
    fetchCart();
  }, []);

  const removeItem = (id) => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const increaseItem = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  };

  const decreaseItem = (id) => {
    dispatch({ type: 'DECREASE', payload: id });
  };

  // combine increase and decrease itens in the same dispatch
  const toggleAmount = (id, type) => {
    dispatch({ type: 'TOGGLE_AMOUNT', payload: { id, type } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        removeItem,
        increaseItem,
        decreaseItem,
        clearCart,
        toggleAmount,
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
