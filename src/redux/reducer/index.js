import { GET_MOVIES_SERIES, GET_MOVIES_SINGLE, TOGGLE_BARS } from '../constans';

const init = {
  movies: {
    title: '',
    single: [],
    series: [],
  },
  isShowBar: false,
};

const Reducer = (state = init, action) => {
  switch (action.type) {
    case TOGGLE_BARS:
      return {
        ...state,
        isShowBar: action.payload,
      };
    case GET_MOVIES_SINGLE:
      console.log('Check actions', action.payload);
      return {
        ...state,
        movies: {
          ...state.movies,
          single: [...action.payload],
        },
      };
    case GET_MOVIES_SERIES:
      console.log('Check actions', action.payload);
      return {
        ...state,
        movies: {
          ...state.movies,
          series: [...action.payload],
        },
      };
    default:
      return state;
  }
};

export default Reducer;
