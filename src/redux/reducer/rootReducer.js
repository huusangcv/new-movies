import filterReducer from './filterReducer';
import movieReducer from './movieReducer';
import movieListReducer from './movieListReducer';
import totalPageReducer from './totalPageReducer';
import toggleBarsReducer from './toggleBarsReducer';

const rootReducer = (state, action) => {
  return {
    filterBy: filterReducer(state.filterBy, action),
    movie: movieReducer(state.movie, action),
    movies: movieListReducer(state.movies, action),
    totalPage: totalPageReducer(state.totalPage, action),
    isShowBar: toggleBarsReducer(state.isShowBar, action),
  };
};

export default rootReducer;
