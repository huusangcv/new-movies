import axios from '~/utils/custonizeAxiosAuth';

const user = {
  SignUp: async (data) => {
    const result = await axios.post(`register`, data);
    return result;
  },
  Login: async (data) => {
    const result = await axios.post(`login`, data);
    return result;
  },
  LogOut: async () => {
    const result = await axios.get(`logout`);
    return result;
  },
  Forgot: async (data) => {
    const result = await axios.post(`forgot-password`, data);
    return result;
  },
  updateProfile: async (data) => {
    const result = await axios.put(`update-profile`, data);
    return result;
  },
  updatePassword: async (data) => {
    const result = await axios.put(`update-password`, data);
    return result;
  },
  ResendVerification: async (data) => {
    const result = await axios.post(`resend-verification`, data);
    return result;
  },
  RetrievalPassword: async (data) => {
    const result = await axios.post(`renew-password`, data);
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
  ConfirmNewEmail: async (id, emailCode) => {
    const result = await axios.get(`confirm-update-profile/${id}/${emailCode}`);
    return result;
  },
};

export default user;
