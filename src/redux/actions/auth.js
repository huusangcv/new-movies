const { EMAIL_VERIFY } = require('../constans');

const emailVerify = (payload) => {
  return {
    type: EMAIL_VERIFY,
    payload,
  };
};
export { emailVerify };
