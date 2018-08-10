import { dashboardActionTypes } from '../actions/actionTypes';

const intialState = {
    watchlistData : []
}

const dashboardReducer = function(currentState=intialState, action){
    switch(action.type){
        case dashboardActionTypes.WATCHLIST_DATA:
            return {
                ...currentState,
                watchlistData:action.payload
            };
        default:
            return currentState;
    }
}
export default dashboardReducer;