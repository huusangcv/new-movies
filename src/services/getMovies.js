import axios from '~/utils/customizeAxios';

const getMovies = {
  Single: async (page) => {
    let result = await axios.get(`danh-sach/phim-le?page=${page}`);
    return result.data;
  },
  Series: async (page) => {
    let result = await axios.get(`danh-sach/phim-bo?page=${page}`);
    return result.data;
  },
  Detail: async (slug) => {
    let result = await axios.get(`phim/${slug}`);
    return result.data;
  },
};

export default getMovies;
