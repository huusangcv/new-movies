import { TOGGLE_BARS } from '../constans';

const init = {
  isShowBar: false,
};

const Reducer = (state = init, action) => {
  switch (action.type) {
    case TOGGLE_BARS: {
      console.log(action.payload);
      return {
        isShowBar: action.payload,
      };
    }
    default:
      return state;
  }
};

export default Reducer;
