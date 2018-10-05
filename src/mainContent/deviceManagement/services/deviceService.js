import { requestPOST } from '../../../services/extendedService';
import { getURL } from '../../../providers/configProvider';

export const getNodeData = (params, reqBody) => {
    let url = getURL('devicemanagement', 'data', params);
    return requestPOST(url, reqBody);
}