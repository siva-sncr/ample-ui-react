import axios from '../../services/index';

export const initialTree = () => {
    return axios.get('/org.json');
}

export const initRegions = () => {
    return axios.get('/region.json');
}