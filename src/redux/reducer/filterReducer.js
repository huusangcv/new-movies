const { FILTER_MOVIES, FILTER_MOVIES_CATEGORY } = require('../constans');

const initialState = {
  titlePage: '',
  filterState: false,
  moviesType: '',
  type: '',
  nation: '',
  year: '',
  sortBy: '',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_MOVIES:
    case FILTER_MOVIES_CATEGORY:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
