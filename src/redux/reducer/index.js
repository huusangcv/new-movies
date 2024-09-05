import currentPageReducer from './currentPageReducer';
import filterReducer from './filterReducer';
import movieListReducer from './movieListReducer';
import movieReducer from './movieReducer';
import moviesNewUpdateReducer from './moviesNewUpdateReducer';
import toggleBarsReducer from './toggleBarsReducer';
import totalPageReducer from './totalPageReducer';

const rootReducer = (state = {}, action) => {
  return {
    filterBy: filterReducer(state.filterBy, action),
    movie: movieReducer(state.movie, action),
    movies: movieListReducer(state.movies, action),
    newUpdateMovies: moviesNewUpdateReducer(state.newUpdateMovies, action),
    totalPage: totalPageReducer(state.totalPage, action),
    isShowBar: toggleBarsReducer(state.isShowBar, action),
    currentPageMovies: currentPageReducer(state.currentPageMovies, action),
  };
};

export default rootReducer;
