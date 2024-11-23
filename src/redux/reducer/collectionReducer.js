const {
  WATCHED,
  WANT_TO_SEE,
  UPDATE_WATCHED,
  UPDATE_WANT_TO_SEE,
  DELETE_WATCHED,
  DELETE_WANT_TO_SEE,
} = require('../constans');

const initialState = {
  watched: [],
  wantToSee: [],
};

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case WATCHED:
      return {
        ...state,
        watched: [...state.watched, action.payload],
      };
    case WANT_TO_SEE:
      return {
        ...state,
        wantToSee: [...state.wantToSee, action.payload],
      };
    case UPDATE_WATCHED: {
      const movies = state.wantToSee.filter((movie) => movie.id !== action.payload.id);
      return {
        watched: [...state.watched, action.payload],
        wantToSee: movies,
      };
    }
    case UPDATE_WANT_TO_SEE: {
      const movies = state.watched.filter((movie) => movie.id !== action.payload.id);
      return {
        watched: movies,
        wantToSee: [...state.wantToSee, action.payload],
      };
    }
    case DELETE_WATCHED: {
      const movies = state.watched.filter((movie) => movie.id !== action.payload.id);
      return {
        ...state,
        watched: movies,
      };
    }
    case DELETE_WANT_TO_SEE: {
      const movies = state.watched.filter((movie) => movie.id !== action.payload.id);
      return {
        ...state,
        wantToSee: movies,
      };
    }
    default:
      return state;
  }
};

export default collectionReducer;
