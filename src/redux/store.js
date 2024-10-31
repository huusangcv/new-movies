import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import rootReducer from './reducer';
import { persistStore, persistReducer } from 'redux-persist';
import persistConfig from './persistConfig';

const composeEnhancers = composeWithDevTools();

const persistedReducer = persistReducer(persistConfig, rootReducer, composeEnhancers);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
