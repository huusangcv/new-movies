import {
  CURRENT_MOVIES_TOP,
  FILTER_MOVIES,
  FILTER_MOVIES_CATEGORY,
  GET_CURRENT_PAGE_MOVIES_NEW,
  GET_CURRENT_PAGE_MOVIES_SERIES,
  GET_CURRENT_PAGE_MOVIES_SINGLE,
  GET_MOVIE_DETAILS,
  GET_MOVIE_NEW,
  GET_MOVIE_SERIES,
  GET_MOVIE_SINGLE,
  GET_MOVIE_TOP_SINGLE,
  GET_MOVIE_TOP_SERIES,
  GET_NEW_UPDATE_MOVIES,
  GET_TOTAL_ITEMS_MOVIES_NEW,
  GET_TOTAL_ITEMS_MOVIES_SERIES,
  GET_TOTAL_ITEMS_MOVIES_SINGLE,
  GET_TOTAL_ITEMS_MOVIES_TOP,
  IS_MULTILINE,
  TITLE_MOVIES,
  USER_PROFILE,
  WANT_TO_SEE,
  WATCHED,
  UPDATE_WATCHED,
  UPDATE_WANT_TO_SEE,
  DELETE_WATCHED,
  DELETE_WANT_TO_SEE,
  GET_SMILAR_MOVIES,
  SEARCH_NAME_MOVIES,
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

const getMoviesTopSingle = (payload) => {
  return {
    type: GET_MOVIE_TOP_SINGLE,
    payload,
  };
};
const getMoviesTopSeries = (payload) => {
  return {
    type: GET_MOVIE_TOP_SERIES,
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

const getTotalItemsTop = (payload) => {
  return {
    type: GET_TOTAL_ITEMS_MOVIES_TOP,
    payload,
  };
};

const getNewUpdateMovies = (payload) => {
  return {
    type: GET_NEW_UPDATE_MOVIES,
    payload: payload,
  };
};

const getSimilarMovies = (payload) => {
  return {
    type: GET_SMILAR_MOVIES,
    payload,
  };
};

const getMoviesBySearchName = (payload) => {
  return {
    type: SEARCH_NAME_MOVIES,
    payload,
  };
};

const getCurrentPageMoviesSingle = (payload) => {
  return {
    type: GET_CURRENT_PAGE_MOVIES_SINGLE,
    payload: payload,
  };
};

const getCurrentPageMoviesSeries = (payload) => {
  return {
    type: GET_CURRENT_PAGE_MOVIES_SERIES,
    payload: payload,
  };
};

const getCurrentPageMoviesNew = (payload) => {
  return {
    type: GET_CURRENT_PAGE_MOVIES_NEW,
    payload: payload,
  };
};

const getCurrentMoviesTop = (payload) => {
  return {
    type: CURRENT_MOVIES_TOP,
    payload: payload,
  };
};

const getMoviesOnMultiline = (payload) => {
  return {
    type: IS_MULTILINE,
    payload: payload,
  };
};

const addMoviesWatched = (payload) => {
  return {
    type: WATCHED,
    payload: payload,
  };
};

const addMoviesWantToSee = (payload) => {
  return {
    type: WANT_TO_SEE,
    payload: payload,
  };
};

const updateMoviesWatched = (payload) => {
  return {
    type: UPDATE_WATCHED,
    payload: payload,
  };
};
const updateMoviesWantToSee = (payload) => {
  return {
    type: UPDATE_WANT_TO_SEE,
    payload: payload,
  };
};

const deleteMoviesWatched = (payload) => {
  return {
    type: DELETE_WATCHED,
    payload: payload,
  };
};

const deleteMoviesWantToSee = (payload) => {
  return {
    type: DELETE_WANT_TO_SEE,
    payload: payload,
  };
};

const getUserProfile = (payload) => {
  return {
    type: USER_PROFILE,
    payload,
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
  getMoviesTopSingle,
  getMoviesTopSeries,
  getTotalItemsSingle,
  getTotalItemsSeries,
  getTotalItemsNew,
  getTotalItemsTop,
  getNewUpdateMovies,
  getSimilarMovies,
  getCurrentPageMoviesSingle,
  getCurrentPageMoviesSeries,
  getCurrentPageMoviesNew,
  getCurrentMoviesTop,
  getMoviesOnMultiline,
  addMoviesWatched,
  addMoviesWantToSee,
  deleteMoviesWatched,
  deleteMoviesWantToSee,
  updateMoviesWantToSee,
  updateMoviesWatched,
  getUserProfile,
  getMoviesBySearchName,
};
