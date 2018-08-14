import axios from '../../../services/index';

const deviceService = () => {
    return axios.get('/device.json');
}

export default deviceService;