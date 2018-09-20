
import { loadNextLevel } from '../services/treeService';
import { setTree, onDropTree, onExpandNode, fetchTreeFailed } from './treeViewActionDispatch';
import { groupRouteParams } from '../../services/utilityService';

export const initTree = (data) => {
    return dispatch => {
        dispatch(setTree(data.data));
    };
};

export const dropTree = (tree) => {
    return dispatch => {
        dispatch(onDropTree(tree));
    };
};

export const expandNode = (clickedNode, routeParams) => {
    let paramsObj = groupRouteParams({}, routeParams);

    return dispatch => {
        loadNextLevel(paramsObj)
            .then(response => {
                dispatch(onExpandNode(response, clickedNode, routeParams));
            })
            .catch(error => {
                dispatch(fetchTreeFailed());
            });
    };
};


