import {
  GET_CURRENT_PAGE_MOVIES_NEW,
  GET_CURRENT_PAGE_MOVIES_SERIES,
  GET_CURRENT_PAGE_MOVIES_SINGLE,
} from '../constans';

const initialState = {
  single: 1,
  series: 1,
  new: 1,
};

const currentPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_PAGE_MOVIES_SINGLE:
      return {
        ...state,
        single: action.payload,
      };
    case GET_CURRENT_PAGE_MOVIES_SERIES:
      return {
        ...state,
        series: action.payload,
      };
    case GET_CURRENT_PAGE_MOVIES_NEW:
      return {
        ...state,
        new: action.payload,
      };
    default:
      return state;
  }
};

export default currentPageReducer;
