import axios from './index';

export const requestPOST = (url, params) => {
    return axios.post(url, params)
        .then(response => {
            if (typeof response.data === 'object') {
                var data = response.data.data ? response.data.data : response.data;
                return data;
            }
        })
        .catch(err => {
            return err;
        })
}

export const requestGET = (url) => {
    return axios.get(url)
        .then(response => {
            if (typeof response.data === 'object') {
                var data = response.data.data ? response.data.data : response.data;
                return data;
            }
        })
        .catch(err => {
            return err;
        })
}
