import { INCREASE, DECREASE, CLEAR_CART, REMOVE, GET_TOTALS } from './actions';

function reducer(state, action) {
  switch (action.type) {
    case CLEAR_CART:
      return { ...state, cart: [] };

    case DECREASE:
      let tempCart = [];
      if (action.payload.amount === 1) {
        tempCart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        tempCart = state.cart.map((item) => {
          if (action.payload.id === item.id) {
            item = { ...item, amount: item.amount - 1 };
          }
          return item;
        });
      }
      return { ...state, cart: tempCart };

    case INCREASE:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (action.payload.id === item.id) {
            return { ...item, amount: item.amount + 1 };
          } else return item;
        }),
      };
    case REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => action.payload.id !== item.id),
      };
    case GET_TOTALS:
      let { total, amount } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const { price, amount } = cartItem;
          const itemTotal = price * amount;
          cartTotal.total += itemTotal;
          cartTotal.amount += amount;
          return cartTotal;
        },
        { total: 0, amount: 0 }
      );

      total = parseFloat(total.toFixed(2));
      return { ...state, total, amount };
    default:
      return state;
  }
}

export default reducer;
