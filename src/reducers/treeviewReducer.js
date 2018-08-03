import * as actionTypes from '../treeview/actions/treeViewActionTypes';

const initialState = {
    tree: []
};

const treeviewReducer = function(currentState=initialState, action){
    switch( action.type ) {
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
            return {
                ...currentState,
                tree: Object.assign([], currentState.tree, action.updatedNode)
            }

        default:
            return currentState
    }
}

export default treeviewReducer;