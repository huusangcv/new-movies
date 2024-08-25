import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import reducer from './reducer';
import logger from './logger';

const composeEnhancers = composeWithDevTools();
const store = createStore(logger(reducer), composeEnhancers);

export default store;
