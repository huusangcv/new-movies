const { ADD_CURRENT_EPISODE_MOVIE } = require('../constans');

const initialState = [
  {
    episode: 0,
    slug: '',
  },
];

const currentEpisodeMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_EPISODE_MOVIE:
      const { slug, episode } = action?.payload;
      const existingSlug = state.find((item) => item.slug === slug);
      console.log('chekc', existingSlug);

      if (existingSlug) {
        const updatedState = state.map((item) => {
          if (item.slug === existingSlug.slug) {
            return {
              ...item,
              episode,
            };
          }
          return item;
        });
        return updatedState;
      }
      return [...state, { slug, episode }];
    default:
      return state;
  }
};

export default currentEpisodeMovieReducer;
