const { SEARCH_NAME_MOVIES } = require('../constans');

const initialState = [
  {
    id: 1,
    title: 'Conan',
  },
];

const searchMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_NAME_MOVIES:
      const existingMovie = state.find((movie) => movie.title === action.payload);
      if (existingMovie) {
        return state;
      }
      return [
        ...state,
        {
          id: Math.random(),
          title: action.payload,
        },
      ];
    default:
      return state;
  }
};

export default searchMoviesReducer;
