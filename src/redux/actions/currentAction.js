const { GET_CURRENT_EPISODE, GET_CURRENT_URL, ADD_CURRENT_EPISODE_MOVIE, ADD_FILTER_FILL } = require('../constans');

const getCurrentEpisode = (payload) => {
  return {
    type: GET_CURRENT_EPISODE,
    payload,
  };
};

const getCurrentUrl = (payload) => {
  return {
    type: GET_CURRENT_URL,
    payload,
  };
};

const addCurrentEpisodeMovie = (payload) => {
  return {
    type: ADD_CURRENT_EPISODE_MOVIE,
    payload,
  };
};

const addFilter = (payload) => {
  return {
    type: ADD_FILTER_FILL,
    payload,
  };
};

export { getCurrentEpisode, getCurrentUrl, addCurrentEpisodeMovie, addFilter };
