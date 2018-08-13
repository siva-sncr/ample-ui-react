import axios from './index';

const deviceService = () => {
    return axios.get('/device.json');
}

export default deviceService;