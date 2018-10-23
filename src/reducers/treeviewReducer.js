import * as actionTypes from '../treeview/actions/treeViewActionTypes';

const initialState = {
    tree: [],
    routeParams: [],
    currentNode: 'ROOTNODE'
};

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
            const newNode = updateTree(currentState.tree, action.updatedNode, action.clickedNode);
            return {
                ...currentState,
                tree: Object.assign([], currentState.tree, newNode),
                routeParams: action.routeParams,
                currentNode: action.clickedNode.node.type
            }
        case actionTypes.EDIT_NODE:
            const editedTree = findAndUpdateNode(currentState.tree[0], action.newNode, action.clickedNode);
            return {
                ...currentState,
                tree: Object.assign([], currentState.tree, editedTree),
            }
        case actionTypes.CLOSE_NODE:
            const closeEditedTree = findAndUpdateNode(currentState.tree[0], action.newNode, action.clickedNode);
            return {
                ...currentState,
                tree: Object.assign([], currentState.tree, closeEditedTree),
            }
        case actionTypes.SET_ROUTE_PARAMS:
            return {
                ...currentState,
                routeParams: action.routeParams,
            }

        default:
            return currentState
    }
}

const updateTree = (currentState, updatedNode, clickedNode) => {
    if (updatedNode[0].type !== 'ROOTNODE') {
        if (clickedNode.node.type.indexOf('SITE') === -1) {
            return findAndUpdateNode(currentState[0], updatedNode, clickedNode);
        } else {
            return [];
        }
    }
    return updatedNode;
};

const findAndUpdateNode = (newNode, updatedNode, clickedNode) => {
    const lowerSiblings = clickedNode.lowerSiblingCounts;
    let parent = "newNode";
    for (let i = 1; i < lowerSiblings.length; i++) {
        let index = eval(parent).children.length - (lowerSiblings[i] + 1);
        parent = parent + ".children[" + index + "]"
        if (i === lowerSiblings.length - 1) {
            parent = parent + " = updatedNode[0]";
        }
    }
    return eval(parent);
}

export default treeviewReducer;