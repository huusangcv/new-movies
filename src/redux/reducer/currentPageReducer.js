import { GET_CURRENT_PAGE_MOVIES } from '../constans';

const initialState = 1;

const currentPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PAGE_MOVIES:
      return action.payload;
    default:
      return state;
  }
};

export default currentPageReducer;
