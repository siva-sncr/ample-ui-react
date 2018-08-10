import axios from './index';

const regionService = () => {
    return axios.get('/dummy.json');
}

export default regionService;