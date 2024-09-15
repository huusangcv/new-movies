const { IS_MULTILINE } = require('../constans');

const initialState = false;

const isMultilineReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_MULTILINE:
      return action.payload;
    default:
      return state;
  }
};

export default isMultilineReducer;
