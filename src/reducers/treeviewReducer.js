import * as actionTypes from '../treeview/actions/treeViewActionTypes';

const initialState = {
    tree: [],
    routeParams: []
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
                routeParams: action.routeParams
            }

        default:
            return currentState
    }
}

const updateTree = (currentState, updatedNode, clickedNode) => {
    if (updatedNode[0].type !== 'ROOTNODE') {
        return updateNode(currentState[0], updatedNode, clickedNode)
    }
    return updatedNode;
};

const updateNode = (newNode, updatedNode, clickedNode) => {
    const lowerSiblings = clickedNode.lowerSiblingCounts;
    let parent = "newNode";

    for (let i = 1; i < lowerSiblings.length; i++) {
        let index = eval(parent).children.length - (lowerSiblings[i] + 1);
        parent = parent + ".children[" + index + "]"
        if (i === lowerSiblings.length - 1) {
            parent = parent + " = updatedNode[0]";
        }
    }
    return eval(parent)
}

export default treeviewReducer;