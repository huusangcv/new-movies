import axios from '~/utils/customizeAxios';

const getMovies = {
  Single: async (movieType, page, sort_field, category, country, year) => {
    let result = await axios.get(
      `danh-sach/${movieType}?page=${page}&sort_field=${sort_field}&category=${category}&country=${country}&year=${year}`,
    );
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
