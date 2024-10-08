const { GET_MOVIE_SINGLE, GET_MOVIE_SERIES, GET_MOVIE_NEW, GET_MOVIE_TOP } = require('../constans');

const initialState = {
  single: [],
  series: [],
  new: [],
  top: [],
};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_SINGLE:
      return {
        ...state,
        single: [...action.payload],
      };
    case GET_MOVIE_SERIES:
      return {
        ...state,
        series: [...action.payload],
      };
    case GET_MOVIE_NEW:
      return {
        ...state,
        new: [...action.payload],
      };
    case GET_MOVIE_TOP:
      return {
        ...state,
        top: [...action.payload],
      };
    default:
      return state;
  }
};

export default movieListReducer;
