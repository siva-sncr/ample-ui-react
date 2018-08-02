import { createStore, applyMiddleware } from '../../../Library/Caches/typescript/2.9/node_modules/redux';
import thunk from 'redux-thunk';
import ampleReducer from '../reducers';

const ampleStore = createStore(ampleReducer, applyMiddleware(thunk));

export default ampleStore;