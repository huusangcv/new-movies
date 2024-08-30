const { GET_MOVIE_DETAILS } = require('../constans');

const initialState = {};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_DETAILS:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
