import * as actionTypes from './treeViewActionTypes';
import { initialTree } from '../services/treeService';
import { initRegions } from '../services/treeService';

export const setTree = (tree) => {
    //map response tree name to title - since tree view library needs tittle. 
    const mapedTree = tree.map(node => {
       return {
           ...node,
           ['title']: node.name
       }
    })
    return {
        type: actionTypes.LOAD_INITIAL_TREE,
        tree: mapedTree
    };
};

export const onDropTree = (tree) => {
    return {
        type: actionTypes.LOAD_DROPPED_TREE,
        tree: tree
    };
};

export const fetchTreeFailed = () => {
    return {
        type: actionTypes.FETCH_TREE_FAILED
    };
};

export const onExpandNode = (nextLevelNodes, clickedNode) => {
    const mapedTree = nextLevelNodes.map(node => {
        return {
            ...node,
            ['title']: node.name
        }
     })
    const updatedNode = {
        ...clickedNode.node,
        ['children']: mapedTree
    }
    return {
        type: actionTypes.EXPAND_NODE,
        updatedNode: [updatedNode]
    }
}

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
