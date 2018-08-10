import { changeRoute } from './headerActionDispatch';

export const onRouteChange = (route) => {
    return dispatch => {
        dispatch(changeRoute(route));
    };
};