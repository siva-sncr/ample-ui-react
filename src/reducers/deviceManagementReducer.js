import * as actionTypes from '../mainContent/deviceManagement/actions/deviceManagementActionTypes';

const intialState = {
    devicesData: []
}

const deviceManagementReducer = (currentState = intialState, action) => {
    switch (action.type) {
        case actionTypes.GET_NODE_DATA:
            return {
                ...currentState,
                devicesData: action.devices
            }
        default:
            return currentState
    }
}

export default deviceManagementReducer;