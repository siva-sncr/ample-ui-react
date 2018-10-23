import * as actionTypes from '../mainContent/deviceManagement/actions/deviceManagementActionTypes';

const intialState = {
    devicesData: [],
    deviceTypes : []
}

const deviceManagementReducer = (currentState = intialState, action) => {
    switch (action.type) {
        case actionTypes.GET_NODE_DATA:
            return {
                ...currentState,
                devicesData: action.devices
            }
        case actionTypes.GET_DEVICE_TYPES:
            return {
                ...currentState,
                deviceTypes:action.deviceTypes
            }
        default:
            return currentState
    }
}

export default deviceManagementReducer;