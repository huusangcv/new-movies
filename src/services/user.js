import axios from '~/utils/customizeAxios';
const API_URL = 'http://127.0.0.1:8000/api';

const user = {
    SignUp: async(data) => {
        const result = await axios.post(`${API_URL}/users`,data)
        return result.data;
    },
}

export default user;