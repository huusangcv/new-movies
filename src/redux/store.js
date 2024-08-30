import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import rootReducer from './reducer';

const composeEnhancers = composeWithDevTools();
const store = createStore(rootReducer, composeEnhancers);

export default store;
