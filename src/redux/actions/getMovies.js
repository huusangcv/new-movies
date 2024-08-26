import { GET_MOVIES_SERIES, GET_MOVIES_SINGLE, TITLE_MOVIES } from '../constans';

const getTitle = (payload) => {
  return {
    type: TITLE_MOVIES,
    payload,
  };
};

const getMoviesSingle = (payload) => {
  return {
    type: GET_MOVIES_SINGLE,
    payload,
  };
};
const getMoviesSeries = (payload) => {
  return {
    type: GET_MOVIES_SERIES,
    payload,
  };
};
export { getMoviesSingle, getMoviesSeries, getTitle };
