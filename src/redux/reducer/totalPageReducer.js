const {
  GET_TOTAL_ITEMS_MOVIES_SINGLE,
  GET_TOTAL_ITEMS_MOVIES_SERIES,
  GET_TOTAL_ITEMS_MOVIES_NEW,
} = require('../constans');

const initialState = {
  moviesSingle: 0,
  moviesSeries: 0,
  moviesNew: 0,
};

const totalPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOTAL_ITEMS_MOVIES_SINGLE:
      return {
        ...state,
        moviesSingle: action.payload,
      };
    case GET_TOTAL_ITEMS_MOVIES_SERIES:
      return {
        ...state,
        moviesSeries: action.payload,
      };
    case GET_TOTAL_ITEMS_MOVIES_NEW:
      return {
        ...state,
        moviesNew: action.payload,
      };
    default:
      return state;
  }
};

export default totalPageReducer;
