import { combineReducers } from 'redux';

import headerReducer from './headerReducer';
import treeviewReducer from './treeviewReducer';
import loginReducer from './loginReducer';
import dashboardReducer from '../mainContent/dashboard/reducers/dashboardReducer';

const ampleReducer = combineReducers({
    headerData: headerReducer,
    loginData:loginReducer,
    dashboardData:dashboardReducer,
    treeviewData: treeviewReducer
});

export default ampleReducer;