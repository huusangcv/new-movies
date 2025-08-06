const { GET_CURRENT_URL } = require('../constans');

const initialState = '';

const currentUrlReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_URL:
      return action.payload;
    default:
      return state;
  }
};

export default currentUrlReducer;
