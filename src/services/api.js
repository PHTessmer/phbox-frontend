import axios from 'axios';

const api = axios.create({
    baseURL: 'https://phbox-backend.herokuapp.com',
});

export default api;