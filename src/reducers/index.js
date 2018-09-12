import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import treeviewReducer from './treeviewReducer';
import loginReducer from './loginReducer';
import deviceManagementReducer from './deviceManagementReducer';

const ampleReducer = combineReducers({
    headerData: headerReducer,
    loginData:loginReducer,
    treeviewData: treeviewReducer,
    deviceManagementData: deviceManagementReducer
});

export default ampleReducer;