import * as actiontypes from './deviceManagementActionTypes';

export const dispatchNodeData = (devices) => {
    return {
        type: actiontypes.GET_NODE_DATA,
        devices: devices
    }
}

export const dispatchDeviceTypes = (types) => {
    return {
        type: actiontypes.GET_DEVICE_TYPES,
        deviceTypes: types
    }
}