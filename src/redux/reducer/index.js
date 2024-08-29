import {
  FILTER_MOVIES,
  FILTER_MOVIES_CATEGORY,
  GET_MOVIE_DETAILS,
  GET_MOVIE_NEW,
  GET_MOVIE_SERIES,
  GET_MOVIE_SINGLE,
  GET_TOTAL_ITEMS_MOVIES_NEW,
  GET_TOTAL_ITEMS_MOVIES_SERIES,
  GET_TOTAL_ITEMS_MOVIES_SINGLE,
  TOGGLE_BARS,
} from '../constans';

const init = {
  filterBy: {
    titlePage: '',
    filterState: false,
    moviesType: '',
    type: '',
    nation: '',
    year: '',
    sortBy: '',
  },
  movie: {},
  movies: {
    single: [],
    series: [],
    new: [],
  },
  totalPage: {
    moviesSingle: 0,
    moviesSeries: 0,
    moviesNew: 0,
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
    case FILTER_MOVIES:
      return {
        ...state,
        filterBy: { ...state.filterBy, ...action.payload },
      };
    case FILTER_MOVIES_CATEGORY:
      return {
        ...state,
        filterBy: { ...state.filterBy, ...action.payload },
      };
    case GET_MOVIE_DETAILS:
      return {
        ...state,
        movie: { ...action.payload },
      };
    case GET_MOVIE_SINGLE:
      return {
        ...state,
        movies: { ...state.movies, single: [...action.payload] },
      };
    case GET_MOVIE_SERIES:
      return {
        ...state,
        movies: { ...state.movies, series: [...action.payload] },
      };
    case GET_MOVIE_NEW:
      return {
        ...state,
        movies: { ...state.movies, new: [...action.payload] },
      };
    case GET_TOTAL_ITEMS_MOVIES_SINGLE:
      return {
        ...state,
        totalPage: { ...state.totalPage, moviesSingle: action.payload },
      };
    case GET_TOTAL_ITEMS_MOVIES_SERIES:
      return {
        ...state,
        totalPage: { ...state.totalPage, moviesSeries: action.payload },
      };
    case GET_TOTAL_ITEMS_MOVIES_NEW:
      return {
        ...state,
        totalPage: { ...state.totalPage, moviesNew: action.payload },
      };
    default:
      return state;
  }
};

export default Reducer;
