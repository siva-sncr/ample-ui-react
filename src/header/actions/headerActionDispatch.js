import * as actionTypes from './headerActionTypes';

export const changeRoute = (route) => {
    return {
        type: actionTypes.ON_ROUTE_CHANGE,
        route: route
    }
}