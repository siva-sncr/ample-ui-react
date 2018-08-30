
import { initRegions } from '../services/treeService';
import { setTree, onDropTree, onExpandNode, fetchTreeFailed } from './treeViewActionDispatch';

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

export const expandNode = (clickedNode) => {
    return dispatch => {
        initRegions(clickedNode)
            .then(response => {
                dispatch(onExpandNode(response.data.data, clickedNode));
            })
            .catch(error => {
                dispatch(fetchTreeFailed());
            });
    };
};
