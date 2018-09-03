import * as actionTypes from './homeActionTypes';

export const setSession = (sessionData) => {
    return {
        type: actionTypes.SET_SESSION,
        sessionData: sessionData
    };
};