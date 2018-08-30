import * as loginDispatch from './loginActionDispatch';

export const logIn = (postData) => {
    return dispatch => {
        dispatch(loginDispatch.onLogIn(postData));
    };
};

export const logOut = () => {
    return dispatch => {
        dispatch(loginDispatch.onLogOut());
    }

}
