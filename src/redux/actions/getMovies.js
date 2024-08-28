import { FILTER_MOVIES, GET_MOVIE_DETAILS, GET_MOVIE_SINGLE, TITLE_MOVIES } from '../constans';

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

export { getMovieDetails, getTitle, filterMovies, getMoviesSingle };
