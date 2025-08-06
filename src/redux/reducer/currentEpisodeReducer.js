const { GET_CURRENT_EPISODE } = require('../constans');

const initialState = 0;

const currentEpisodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_EPISODE:
      return action.payload;
    default:
      return state;
  }
};

export default currentEpisodeReducer;
