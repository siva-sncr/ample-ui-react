import * as actionTypes from '../login/actions/loginActionTypes';

const intialState = {
    loggedIn: false,
    sessionData: null,
    loginData: null
}

const loginReducer = function (currentState = intialState, action) {
    switch (action.type) {
        case actionTypes.ON_LOGIN:
            return {
                ...currentState,
                loggedIn: action.loggedIn,
                loginData: action.loginData
            }
        case actionTypes.SET_SESSION:
            return {
                ...currentState,
                loggedIn: action.sessionData.loggedIn,
                sessionData: action.sessionData
            }
        default:
            return currentState
    }
}

export default loginReducer;