import collectionReducer from './collectionReducer';
import currentMoviesTopReducer from './currentMoviesTopReducer';
import currentPageReducer from './currentPageReducer';
import filterReducer from './filterReducer';
import isLoadingReducer from './isLoadingReducer';
import isMultilineReducer from './isMultilineReducer';
import movieListReducer from './movieListReducer';
import movieReducer from './movieReducer';
import moviesNewUpdateReducer from './moviesNewUpdateReducer';
import toggleBarsReducer from './toggleBarsReducer';
import totalPageReducer from './totalPageReducer';
import userProfileReducer from './userProfileReducer';

const rootReducer = (state = {}, action) => {
  return {
    filterBy: filterReducer(state.filterBy, action),
    movie: movieReducer(state.movie, action),
    movies: movieListReducer(state.movies, action),
    newUpdateMovies: moviesNewUpdateReducer(state.newUpdateMovies, action),
    totalPage: totalPageReducer(state.totalPage, action),
    isShowBar: toggleBarsReducer(state.isShowBar, action),
    isLoading: isLoadingReducer(state.isLoading, action),
    currentPageMovies: currentPageReducer(state.currentPageMovies, action),
    moviesOnMultiline: isMultilineReducer(state.moviesOnMultiline, action),
    collectionMovies: collectionReducer(state.collectionMovies, action),
    currentMoviesTop: currentMoviesTopReducer(state.currentMoviesTop, action),
    userProfile: userProfileReducer(state.userProfile, action),
  };
};

export default rootReducer;
