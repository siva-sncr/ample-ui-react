import * as actionTypes from '../header/actions/headerActionTypes';

const intialState = {
    currentRoute: '/'
}

const headerReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_ROUTE_CHANGE:
            return {
                ...currentState,
                currentRoute: action.route
            }
        default:
            return currentState
    }
}

export default headerReducer;