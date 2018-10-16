
import { requestGET, requestPOST } from '../../services/extendedService';
import { getURL } from '../../providers/configProvider';


export const loadNextLevel = (params) => {
    let url = '';
    if (params.apiType.indexOf('SITE') >= 0) {
        url = getURL('deviceManagement', 'data', params);
    } else {
        url = getURL('groupManagement', 'nodes', params);
    }
    return requestGET(url);
}

export const editNode = (params, reqBody) => {
    let url = getURL('groupManagement', 'editNode', params);
    return requestPOST(url, reqBody);
}