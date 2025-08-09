import axios from '../utils/customizeAxios';
const endpointMethods = {
  getFillTypes: async () => {
    const result = await axios.get(`the-loai`);
    return result;
  },
  getFillNations: async () => {
    const result = await axios.get(`quoc-gia`);
    return result;
  },
  getFillYears: async () => {
    const result = await axios.get(`nam-phat-hanh`);
    return result;
  },
};

export default endpointMethods;
