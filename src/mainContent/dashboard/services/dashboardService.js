import axios from 'axios';
import {
    config
} from '../../../config';

let baseUrl = config.apiUrl;

function getWatchlist() {
    return axios
        .get(baseUrl + 'em/rest/watchlistsubscriptions/getmywatchlist?orgId=1&range=1')
        .then(response => response.data);
}

let dashboardServe = {
    getWatchlist
};

export default dashboardServe;