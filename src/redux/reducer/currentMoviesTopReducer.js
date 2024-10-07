const { CURRENT_MOVIES_TOP } = require('../constans');

const initialState = '';

const currentMoviesTopReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_MOVIES_TOP:
      return action.payload;
    default:
      return state;
  }
};

export default currentMoviesTopReducer;
