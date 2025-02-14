const { IS_VISIT } = require('../constans');

const isVisit = (payload) => {
  return {
    type: IS_VISIT,
    payload,
  };
};
export { isVisit };
