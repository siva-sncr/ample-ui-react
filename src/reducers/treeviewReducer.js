import * as actionTypes from '../treeview/actions/treeViewActionTypes';

const initialState = {
    tree: [],
    routeParams: []
};

let levelStart = 3;
let childHierarchy = [];
let treeState = [];

const treeviewReducer = function (currentState = initialState, action) {
    switch (action.type) {
        case actionTypes.LOAD_INITIAL_TREE:
            return {
                ...currentState,
                tree: action.tree
            }
        case actionTypes.LOAD_DROPPED_TREE:
            return {
                ...currentState,
                tree: action.tree
            }
        case actionTypes.EXPAND_NODE:
            const newNode = updateTree(currentState.tree, action.updatedNode, action.routeParams);
            return {
                ...currentState,
                tree: Object.assign([], currentState.tree, newNode),
                routeParams: action.routeParams
            }

        default:
            return currentState
    }
}

const updateTree = (currentState, updatedNode, routeParams) => {
    treeState = currentState[0];
    let newNode = currentState[0];
    levelStart = 3;
    childHierarchy = [];
    if (updatedNode[0].type !== 'ROOTNODE') {
        return updateNode(newNode, updatedNode, routeParams)
    }
    return updatedNode;
};

const updateNode = (newNode, updatedNode, routeParams) => {
    newNode.children.map((node, index) => {
        if (node.name === routeParams[levelStart].name) {
            childHierarchy.unshift(index);
            if (levelStart === routeParams.length - 1) {
                let updatingNode = "treeState"
                for (let i = 0; i < childHierarchy.length; i++) {
                    updatingNode = updatingNode + ".children[" + childHierarchy[i] + "]"
                    if (i === childHierarchy.length - 1) {
                        updatingNode = updatingNode + " = updatedNode[0]";
                    }
                }
                return [eval(updatingNode)];
            } else {
                levelStart = levelStart + 2;
                updateNode(node, updatedNode, routeParams)
            }
        }
    })
}

export default treeviewReducer;