import axios from '~/utils/custonizeAxiosAuth';
const API_URL = 'https://api.newmoviesz.online/api';

const user = {
  SignUp: async (data) => {
    const result = await axios.post(`${API_URL}/register`, data);
    return result;
  },
  Login: async (data) => {
    const result = await axios.post(`${API_URL}/login`, data);
    return result;
  },
  LogOut: async () => {
    const result = await axios.get(`${API_URL}/logout`);
    return result;
  },
  Forgot: async (data) => {
    const result = await axios.post(`${API_URL}/forgot-password`, data);
    return result;
  },
  updateProfile: async (data) => {
    const result = await axios.put(`${API_URL}/update-profile`, data);
    return result;
  },
  updatePassword: async (data) => {
    const result = await axios.put(`${API_URL}/update-password`, data);
    return result;
  },
  ResendVerification: async (data) => {
    const result = await axios.post(`${API_URL}/resend-verification`, data);
    return result;
  },
  RetrievalPassword: async (data) => {
    const result = await axios.post(`${API_URL}/renew-password`, data);
    return result;
  },
  Donate: async (data) => {
    const result = await axios.post('https://api.vietqr.io/v2/generate', data);
    return result;
  },
  profile: async () => {
    const result = await axios.get('profile');
    return result;
  },
};

export default user;
