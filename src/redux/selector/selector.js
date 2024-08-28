const moviesSelector = (state) => state.filterBy;
const moviesSingle = (state) => state.movies.single;
const moviesSeries = (state) => state.movies.series;
const getTotalItems = (state) => state.totalPage;

export { moviesSelector, moviesSingle, moviesSeries, getTotalItems };
