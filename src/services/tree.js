import axios from './index';

const intialTree = () => {
    return axios.get('/tree.json');
}

export default intialTree;