import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import treeviewReducer from './treeviewReducer';
import loginReducer from '../login/reducers/loginReducer';

const ampleReducer = combineReducers({
    headerData: headerReducer,
    loginData:loginReducer,
    treeviewData: treeviewReducer
});

export default ampleReducer;