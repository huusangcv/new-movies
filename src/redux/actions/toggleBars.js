const { TOGGLE_BARS } = require('../constans');

const toggleBars = (payload) => {
  return {
    type: TOGGLE_BARS,
    payload,
  };
};
export { toggleBars };
