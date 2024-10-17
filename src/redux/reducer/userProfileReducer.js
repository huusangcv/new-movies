const { USER_PROFILE } = require('../constans');

const initialState = {
  id: null,
  name: '',
  email: '',
};

const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_PROFILE:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userProfileReducer;
