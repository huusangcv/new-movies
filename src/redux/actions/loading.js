const { IS_LOADING } = require('../constans');

const isLoading = (payload) => {
  return {
    type: IS_LOADING,
    payload,
  };
};
export { isLoading };
