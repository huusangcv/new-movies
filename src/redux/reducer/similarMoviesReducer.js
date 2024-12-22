import { GET_SMILAR_MOVIES } from '../constans';

const initialState = [];

const similarMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SMILAR_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default similarMoviesReducer;
