const { WATCHED, WANT_TO_SEE } = require('../constans');

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
    default:
      return state;
  }
};

export default collectionReducer;
