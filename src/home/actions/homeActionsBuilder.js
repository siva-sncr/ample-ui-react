import { checkSession } from '../services/homeService';
import * as homeDispatch from './homeActionDispatch';

export const setSession = () => {
    return dispatch => {
        checkSession()
            .then(response => {
                if(response.data.data !== undefined) {
                    response['loggedIn'] = true;
                }
                dispatch(homeDispatch.setSession(response));
            })
            .catch(function (error) {
                dispatch(homeDispatch.setSession(error));
            });
    };
}