const moviesSelector = (state) => state.filterBy;
const moviesSingle = (state) => state.movies.single;
const moviesSeries = (state) => state.movies.series;
const moviesNew = (state) => state.movies.new;
const moviesTop = (state) => state.movies.top;
const getTotalItems = (state) => state.totalPage;
const loading = (state) => state.isLoading;
const movieDetail = (state) => state.movie.item;
const movieNewUpdate = (state) => state.newUpdateMovies;
const currentPageMovies = (state) => state.currentPageMovies;
const currentMoviesTop = (state) => state.currentMoviesTop;
const moviesOnMultiline = (state) => state.moviesOnMultiline;
const watchedMovies = (state) => state.collectionMovies.watched;
const wantToSeeMovies = (state) => state.collectionMovies.wantToSee;

export {
  moviesSelector,
  movieDetail,
  moviesSingle,
  moviesSeries,
  moviesNew,
  moviesTop,
  getTotalItems,
  movieNewUpdate,
  currentPageMovies,
  currentMoviesTop,
  moviesOnMultiline,
  watchedMovies,
  wantToSeeMovies,
  loading,
};
