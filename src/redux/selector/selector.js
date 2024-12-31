const moviesSelector = (state) => state.filterBy;
const moviesSingle = (state) => state.movies.single;
const moviesSeries = (state) => state.movies.series;
const moviesNew = (state) => state.movies.new;
const moviesTopSingle = (state) => state.movies.top.single;
const moviesTopSeries = (state) => state.movies.top.series;
const moviesSimilar = (state) => state.similarMovies;
const getTotalItems = (state) => state.totalPage;
const loading = (state) => state.isLoading;
const movieDetail = (state) => state.movie.item;
const movieNewUpdate = (state) => state.newUpdateMovies;
const currentPageMoviesSingle = (state) => state.currentPageMovies.single;
const currentPageMoviesSeries = (state) => state.currentPageMovies.series;
const currentPageMoviesNew = (state) => state.currentPageMovies.new;
const currentMoviesTop = (state) => state.currentMoviesTop;
const moviesOnMultiline = (state) => state.moviesOnMultiline;
const watchedMovies = (state) => state.collectionMovies.watched;
const wantToSeeMovies = (state) => state.collectionMovies.wantToSee;
const userProfile = (state) => state.userProfile;
const emailVerify = (state) => state.emailVerify;

export {
  moviesSelector,
  movieDetail,
  moviesSingle,
  moviesSeries,
  moviesNew,
  moviesTopSingle,
  moviesTopSeries,
  moviesSimilar,
  getTotalItems,
  movieNewUpdate,
  currentPageMoviesSingle,
  currentPageMoviesSeries,
  currentPageMoviesNew,
  currentMoviesTop,
  moviesOnMultiline,
  watchedMovies,
  wantToSeeMovies,
  loading,
  userProfile,
  emailVerify,
};
