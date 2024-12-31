const {
  GET_MOVIE_SINGLE,
  GET_MOVIE_SERIES,
  GET_MOVIE_NEW,
  GET_MOVIE_TOP,
  GET_MOVIE_TOP_SINGLE,
  GET_MOVIE_TOP_SERIES,
} = require('../constans');

const initialState = {
  single: [],
  series: [],
  new: [],
  top: {
    single: [],
    series: [],
  },
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
    case GET_MOVIE_TOP_SINGLE:
      return {
        ...state,
        top: {
          ...state.top,
          single: [...action.payload],
        },
      };
    case GET_MOVIE_TOP_SERIES:
      return {
        ...state,
        top: {
          ...state.top,
          series: [...action.payload],
        },
      };
    default:
      return state;
  }
};

export default movieListReducer;
