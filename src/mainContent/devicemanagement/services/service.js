import axios from './index';

const dataTableService = () => {
    return axios.get('/device.json');
}

export default dataTableService;