import * as actionTypes from './loginActionTypes';

export const onLogIn = (loginData) => {
    return {
        type: actionTypes.ON_LOGIN,
        loggedIn: loginData.username && loginData.password ? true: false,
        loginData: loginData
    };
};

export const onLogOut = () => {
    return {
        type: actionTypes.ON_LOGOUT,
        loggedIn: false,
        loginData: {}
    };
};

export const setSession = (sessionData) => {
    return {
        type: actionTypes.SET_SESSION,
        sessionData: sessionData
    };
};