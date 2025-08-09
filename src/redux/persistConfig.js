import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
  timeout: 7 * 24 * 60 * 60 * 1000, // 1 tuần
  blacklist: ['newUpdateMovies'],
};

export default persistConfig;
