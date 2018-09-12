
import { requestGET } from '../../services/extendedService';
import { getURL } from '../../providers/configProvider';


export const loadNextLevel = (params) => {
    let url = getURL('groupManagement', 'nodes', params);
    return requestGET(url);
}