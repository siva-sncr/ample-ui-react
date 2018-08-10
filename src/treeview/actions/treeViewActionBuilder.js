
import { initialTree, initRegions } from '../services/treeService';
import { setTree, onDropTree, onExpandNode, fetchTreeFailed} from './treeViewActionDispatch';

export const initTree = () => {
    return dispatch => {
        initialTree()
            .then(response => {
                dispatch(setTree(response.data.data));
            })
            .catch(error => {
                dispatch(fetchTreeFailed());
            });
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
