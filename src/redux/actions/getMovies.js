import {
  FILTER_MOVIES,
  FILTER_MOVIES_CATEGORY,
  GET_CURRENT_PAGE_MOVIES,
  GET_MOVIE_DETAILS,
  GET_MOVIE_NEW,
  GET_MOVIE_SERIES,
  GET_MOVIE_SINGLE,
  GET_NEW_UPDATE_MOVIES,
  GET_TOTAL_ITEMS_MOVIES_NEW,
  GET_TOTAL_ITEMS_MOVIES_SERIES,
  GET_TOTAL_ITEMS_MOVIES_SINGLE,
  IS_MULTILINE,
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

const filterMoviesByCategory = (payload) => {
  return {
    type: FILTER_MOVIES_CATEGORY,
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

const getMoviesNew = (payload) => {
  return {
    type: GET_MOVIE_NEW,
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

const getTotalItemsNew = (payload) => {
  return {
    type: GET_TOTAL_ITEMS_MOVIES_NEW,
    payload,
  };
};

const getNewUpdateMovies = (payload) => {
  return {
    type: GET_NEW_UPDATE_MOVIES,
    payload: payload,
  };
};

const getCurrentPageMovies = (payload) => {
  return {
    type: GET_CURRENT_PAGE_MOVIES,
    payload: payload,
  };
};

const getMoviesOnMultiline = (payload) => {
  return {
    type: IS_MULTILINE,
    payload: payload,
  };
};

export {
  getMovieDetails,
  getTitle,
  filterMovies,
  filterMoviesByCategory,
  getMoviesSingle,
  getMoviesSeries,
  getMoviesNew,
  getTotalItemsSingle,
  getTotalItemsSeries,
  getTotalItemsNew,
  getNewUpdateMovies,
  getCurrentPageMovies,
  getMoviesOnMultiline,
};
