import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    // needs to use the spread operator to copy the object, instead of reference it
    return {
      ...state,
      allProducts: [...action.payload],
      filteredProducts: [...action.payload],
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
