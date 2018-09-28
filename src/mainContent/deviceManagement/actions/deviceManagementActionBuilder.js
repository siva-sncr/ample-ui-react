import { getNodeData } from '../services/deviceService';
import * as dispatchDeviceManagement  from './deviceManagementActionDispatch';

export const buildNodeData = (params, payload) => {
    return dispatch => {
        getNodeData(params, payload)
            .then(response => {
                dispatch(dispatchDeviceManagement.dispatchNodeData(Array.isArray(response) ? response : response.devices));
            })
    }
}
