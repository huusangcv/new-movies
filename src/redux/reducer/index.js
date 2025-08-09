import collectionReducer from './collectionReducer';
import currentEpisodeMovieReducer from './currentEpisodeMovieReducer';
import currentEpisodeReducer from './currentEpisodeReducer';
import currentMoviesTopReducer from './currentMoviesTopReducer';
import currentPageReducer from './currentPageReducer';
import currentUrlReducer from './currentUrlReducer';
import fillFilterReducer from './fillFilterReducer';
import filterReducer from './filterReducer';
import isLoadingReducer from './isLoadingReducer';
import isMultilineReducer from './isMultilineReducer';
import isVisitReducer from './isVisitReducer';
import movieListReducer from './movieListReducer';
import movieReducer from './movieReducer';
import moviesNewUpdateReducer from './moviesNewUpdateReducer';
import searchMoviesReducer from './searchReducer';
import similarMoviesReducer from './similarMoviesReducer';
import toggleBarsReducer from './toggleBarsReducer';
import totalPageReducer from './totalPageReducer';
import userProfileReducer from './userProfileReducer';
import verifyEmailReducer from './verifyEmailReducer';

const rootReducer = (state = {}, action) => {
  return {
    filterBy: filterReducer(state.filterBy, action),
    movie: movieReducer(state.movie, action),
    movies: movieListReducer(state.movies, action),
    newUpdateMovies: moviesNewUpdateReducer(state.newUpdateMovies, action),
    totalPage: totalPageReducer(state.totalPage, action),
    isShowBar: toggleBarsReducer(state.isShowBar, action),
    isLoading: isLoadingReducer(state.isLoading, action),
    isVisit: isVisitReducer(state.isLoading, action),
    currentPageMovies: currentPageReducer(state.currentPageMovies, action),
    moviesOnMultiline: isMultilineReducer(state.moviesOnMultiline, action),
    collectionMovies: collectionReducer(state.collectionMovies, action),
    currentMoviesTop: currentMoviesTopReducer(state.currentMoviesTop, action),
    userProfile: userProfileReducer(state.userProfile, action),
    emailVerify: verifyEmailReducer(state.emailVerify, action),
    similarMovies: similarMoviesReducer(state.similarMovies, action),
    searchMovies: searchMoviesReducer(state.searchMovies, action),
    currentEpisode: currentEpisodeReducer(state.currentEpisode, action),
    currentUrl: currentUrlReducer(state.currentUrl, action),
    currentEpisodeMovie: currentEpisodeMovieReducer(state.currentEpisodeMovie, action),
    fillFilter: fillFilterReducer(state.fillFilter, action),
  };
};

export default rootReducer;
