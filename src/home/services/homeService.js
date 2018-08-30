import axios from '../../services/index';
import { getURL } from '../../providers/configProvider';

export const checkSession = () => {
    const url = getURL('login', 'customerInfo', {})
    return axios.get(url);
}
