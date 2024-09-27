const { IS_LOADING } = require('../constans');

const initialState = true;

const isLoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING:
      return action.payload;
    default:
      return state;
  }
};

export default isLoadingReducer;
