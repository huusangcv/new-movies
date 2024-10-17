import axios from '~/utils/custonizeAxiosAuth';
const API_URL = 'http://127.0.0.1:8000/api';

const user = {
  SignUp: async (data) => {
    const result = await axios.post(`${API_URL}/users`, data);
    return result.data;
  },
  Donate: async (data) => {
    const result = await axios.post('https://api.vietqr.io/v2/generate', data);
    return result;
  },
  Account: async (data) => {
    const result = await axios.get('auth/profile');
    return result;
  },
};

export default user;
