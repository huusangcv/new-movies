const { IS_VISIT } = require('../constans');

const initialState = false;

const isVisitReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_VISIT:
      return action.payload;
    default:
      return state;
  }
};

export default isVisitReducer;
