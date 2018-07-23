import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import treeviewReducer from './treeviewReducer';

const ampleReducer = combineReducers({
    headerData: headerReducer,
    treeviewData: treeviewReducer
});

export default ampleReducer;