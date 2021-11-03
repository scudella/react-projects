import {
  SET_LOADING,
  SET_STORIES,
  REMOVE_STORY,
  HANDLE_PAGE,
  HANDLE_SEARCH,
} from './actions';

const reducer = (state, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === SET_STORIES) {
    return {
      ...state,
      hits: action.payload.hits,
      nbPages: action.payload.nbPages,
      loading: false,
    };
  }
  if (action.type === HANDLE_SEARCH) {
    return { ...state, search: action.payload, page: 0 };
  }
  if (action.type === HANDLE_PAGE) {
    let newPage;
    if (action.payload === 'dec') {
      newPage = state.page - 1 < 0 ? state.nbPages - 1 : state.page - 1;
    } else {
      newPage = state.page + 1 >= state.nbPages ? 0 : state.page + 1;
    }
    return { ...state, page: newPage };
  }
  if (action.type === REMOVE_STORY) {
    const { hits } = state;
    const newStories = hits.filter(
      (story) => story.objectID !== action.payload
    );

    return { ...state, hits: newStories };
  }
};
export default reducer;
