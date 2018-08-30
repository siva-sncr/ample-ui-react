import axios from 'axios';

const instance = axios.create({
    baseURL: '172.18.2.121',

});

export default instance;