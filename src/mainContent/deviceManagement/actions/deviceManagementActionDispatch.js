import * as actiontypes from './deviceManagementActionTypes';

export const dispatchNodeData = (devices) => {
    return {
        type: actiontypes.GET_NODE_DATA,
        devices: devices
    }
}