import { dashboardActionTypes } from './actionTypes';
import dashboardService from '../services/dashboardService';

function getWatchlist(){
    return function(dispatch){
        dashboardService
            .getWatchlist()
            .then(watchlistData =>{
                const action = { type: dashboardActionTypes.WATCHLIST_DATA, payload:watchlistData.data};
                dispatch(action);
            });
    }
}
export default getWatchlist;