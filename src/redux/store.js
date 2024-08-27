import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import reducer from './reducer';

const composeEnhancers = composeWithDevTools();
const store = createStore(reducer, composeEnhancers);

export default store;
