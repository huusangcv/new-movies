const { EMAIL_VERIFY } = require('../constans');

const initialState = '';

const verifyEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMAIL_VERIFY:
      return action.payload;
    default:
      return state;
  }
};

export default verifyEmailReducer;
