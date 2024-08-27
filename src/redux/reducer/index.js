import { FILTER_MOVIES, GET_MOVIE_DETAILS, TOGGLE_BARS } from '../constans';

const init = {
  filterBy: {
    moviesType: '',
    type: '',
    nation: '',
    year: '',
    sortBy: '',
  },
  movie: {},
  isShowBar: false,
};

const Reducer = (state = init, action) => {
  switch (action.type) {
    case TOGGLE_BARS:
      return {
        ...state,
        isShowBar: action.payload,
      };
    case FILTER_MOVIES:
      return {
        ...state,
        filterBy: { ...state.filterBy, ...action.payload },
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: { ...action.payload },
      };
    default:
      return state;
  }
};

export default Reducer;
