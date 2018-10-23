
import * as services from '../services/treeService';
import * as actionDispatch  from './treeViewActionDispatch';
import { groupRouteParams } from '../../services/utilityService';

export const initTree = (data) => {
    return dispatch => {
        dispatch(actionDispatch.setTree(data.data));
    };
};

export const dropTree = (tree) => {
    return dispatch => {
        dispatch(actionDispatch.onDropTree(tree));
    };
};

export const expandNode = (clickedNode, routeParams) => {
    let paramsObj = groupRouteParams({}, routeParams);

    return dispatch => {
        services.loadNextLevel(paramsObj)
            .then(response => {
                dispatch(actionDispatch.onExpandNode(response, clickedNode, routeParams));
            })
            .catch(error => {
                dispatch(actionDispatch.fetchTreeFailed());
            });
    };
};

export const onEditNode = (newNode, clickedNode, routeParams) => {
    let paramsObj = groupRouteParams({}, routeParams);
    paramsObj[clickedNode.node.type] = {
        id: null,
        name: clickedNode.node.title,
        title: clickedNode.node.title,
        type: clickedNode.node.type
    }
    paramsObj['apiType'] = clickedNode.node.type;
    return dispatch => {
        services.editNode(paramsObj, {name: newNode, type: clickedNode.node.type})
            .then(response => {
                dispatch(actionDispatch.onEditNode(newNode, clickedNode, routeParams));
            })
            .catch(error => {
                dispatch(actionDispatch.fetchTreeFailed());
            });
    };
};


