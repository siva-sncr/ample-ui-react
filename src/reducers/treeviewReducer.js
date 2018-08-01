import * as actionTypes from '../treeview/actions/actionTypes';

const initialState = {
    tree: []
};

const treeviewReducer = function(currentState=initialState, action){
    switch( action.type ) {
        case actionTypes.LOAD_INTIAL_TREE: 
            return {
                ...currentState,
                tree: action.tree
            }
        default:
            return currentState
    }
}

export default treeviewReducer;