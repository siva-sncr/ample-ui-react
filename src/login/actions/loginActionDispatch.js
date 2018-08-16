import * as actionTypes from './loginActionTypes';

export const onLogIn = (loginData) => {

    console.log(loginData);
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