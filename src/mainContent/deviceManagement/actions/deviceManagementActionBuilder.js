import  * as deviceService  from '../services/deviceService';
import * as dispatchDeviceManagement  from './deviceManagementActionDispatch';

export const buildNodeData = (params, payload) => {
    return dispatch => {
        deviceService.getNodeData(params, payload)
            .then(response => {
                dispatch(dispatchDeviceManagement.dispatchNodeData(Array.isArray(response) ? response : response));
            })
    }
}

export const getFiltersData = (params) => {
        deviceService.getFilters(params)
            .then(response => {
                return response;
            })
}

export const setDeviceTypes = () => {
   return dispatch => {
       deviceService.loadDeviceTypeList()
        .then(response => {
            console.log(response);
        })
   }
}