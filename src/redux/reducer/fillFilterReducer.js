const { ADD_FILTER_FILL } = require('../constans');

const initialState = {
  types: [],
  nations: [],
  years: [],
};

const fillFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER_FILL:
      return action.payload;
    default:
      return state;
  }
};

export default fillFilterReducer;
