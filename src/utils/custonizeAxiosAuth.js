import axios from 'axios';

const getTokenFromCookie = () => {
  const name = 'token=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};
const instanceUser = axios.create({
  baseURL: 'https://api.newmoviesz.online/api/',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${getTokenFromCookie()}`,
  },
});

// Add a request interceptor
instanceUser.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const token = getTokenFromCookie();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
instanceUser.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error && error.response ? error.response.data : Promise.reject(error);
  },
);

export default instanceUser;
