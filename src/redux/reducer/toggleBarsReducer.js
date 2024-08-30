const { TOGGLE_BARS } = require('../constans');

const initialState = false;

const toggleBarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_BARS:
      return action.payload;
    default:
      return state;
  }
};

export default toggleBarsReducer;
