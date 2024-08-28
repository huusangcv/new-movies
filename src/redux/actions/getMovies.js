import {
  FILTER_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_SERIES,
  GET_MOVIE_SINGLE,
  GET_TOTAL_ITEMS_MOVIES_SERIES,
  GET_TOTAL_ITEMS_MOVIES_SINGLE,
  TITLE_MOVIES,
} from '../constans';

const getTitle = (payload) => {
  return {
    type: TITLE_MOVIES,
    payload,
  };
};

const filterMovies = (payload) => {
  return {
    type: FILTER_MOVIES,
    payload,
  };
};

const getMovieDetails = (payload) => {
  return {
    type: GET_MOVIE_DETAILS,
    payload,
  };
};

const getMoviesSingle = (payload) => {
  return {
    type: GET_MOVIE_SINGLE,
    payload,
  };
};

const getMoviesSeries = (payload) => {
  return {
    type: GET_MOVIE_SERIES,
    payload,
  };
};

const getTotalItemsSingle = (payload) => {
  return {
    type: GET_TOTAL_ITEMS_MOVIES_SINGLE,
    payload,
  };
};

const getTotalItemsSeries = (payload) => {
  return {
    type: GET_TOTAL_ITEMS_MOVIES_SERIES,
    payload,
  };
};

export {
  getMovieDetails,
  getTitle,
  filterMovies,
  getMoviesSingle,
  getMoviesSeries,
  getTotalItemsSingle,
  getTotalItemsSeries,
};
