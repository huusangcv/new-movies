import axios from '~/utils/customizeAxios';

const getMovies = {
  Single: async (page) => {
    let result = await axios.get(`phim-le?page=${page}`);
    return result.data;
  },
  Series: async (page) => {
    let result = await axios.get(`phim-bo?page=${page}`);
    return result.data;
  },
};

export default getMovies;
