import * as actionTypes from './actionTypes';
import intialTree from '../../services/tree';

export const setTree = (tree) => {
    //map response tree name to title - since tree view library needs tittle. 
    const mapedTree = tree.map(node => {
       return {
           ...node,
           ['title']: node.name
       }
    })

    return {
        type: actionTypes.LOAD_INTIAL_TREE,
        tree: mapedTree
    };
};

export const fetchTreeFailed = () => {
    return {
        type: actionTypes.FETCH_TREE_FAILED
    };
};

export const initTree = () => {
    return dispatch => {
        intialTree()
            .then(response => {
                dispatch(setTree(response.data.data));
            })
            .catch(error => {
                dispatch(fetchTreeFailed());
            });
    };
};
