
import { requestGET } from '../../services/extendedService';
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