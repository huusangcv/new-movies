const moviesSelector = (state) => state.filterBy;
const moviesSingle = (state) => state.movies.single;
const moviesSeries = (state) => state.movies.series;
const moviesNew = (state) => state.movies.new;
const getTotalItems = (state) => state.totalPage;
const movieDetail = (state) => state.movie.item;
const movieNewUpdate = (state) => state.newUpdateMovies;

export { moviesSelector, movieDetail, moviesSingle, moviesSeries, moviesNew, getTotalItems, movieNewUpdate };
