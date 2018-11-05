import { requestPOST, requestGET } from '../../../services/extendedService';
import { getURL } from '../../../providers/configProvider';
import axios from 'axios';

export const getNodeData = (params, reqBody) => {
    let url = getURL('devicemanagement', 'data', params);
    return requestPOST(url, reqBody);
}

export const getFilters = (name) => {
    let url = getURL('deviceManagement',  'getfilters', {'MODULE': name,'apiType':'DEVICE'});
	return axios
		.get(url)
		.then((reposnse) => {
            return reposnse;
          })
         .catch(function (error) {
            console.log(error);
         });
}

export const loadDeviceTypeList = () => {
    let url = getURL('groupManagement', 'productnamelist', {'apiType':'data'});
    return requestGET(url);

}
