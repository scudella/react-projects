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
    return { ...state, news: action.payload, loading: false };
  }
  if (action.type === HANDLE_SEARCH) {
    return { ...state, search: action.payload, page: 0 };
  }
  if (action.type === HANDLE_PAGE) {
    let newPage;
    if (action.payload.mode === 'dec') {
      newPage =
        action.payload.page - 1 < 0
          ? state.news.nbPages - 1
          : action.payload.page - 1;
    } else {
      newPage =
        action.payload.page + 1 >= state.news.nbPages
          ? 0
          : action.payload.page + 1;
    }
    return { ...state, page: newPage };
  }
  if (action.type === REMOVE_STORY) {
    const { news } = state;
    const { hits: stories } = news;
    const newStories = stories.filter(
      (story) => story.objectID !== action.payload
    );

    return { ...state, news: { ...news, hits: newStories } };
  }
};
export default reducer;
