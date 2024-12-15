import { GET_NEW_UPDATE_MOVIES } from '../constans';

const initialState = {
  recommend: [],
  single: [],
  series: [],
};

const moviesNewUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEW_UPDATE_MOVIES:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default moviesNewUpdateReducer;
