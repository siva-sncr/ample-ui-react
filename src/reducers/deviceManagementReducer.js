import * as actionTypes from '../mainContent/deviceManagement/actions/deviceManagementActionTypes';

const intialState = {
    devices: []
}

const deviceManagementReducer = (currentState = intialState, action) => {
    switch (action.type) {
        case actionTypes.GET_NODE_DATA:
            return {
                ...currentState,
                devices: action.devices
            }
        default:
            return currentState
    }
}

export default deviceManagementReducer;