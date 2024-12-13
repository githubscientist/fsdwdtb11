import axios from 'axios';

const baseURL = `https://675c4a06fe09df667f6358cf.mockapi.io`;

const instance = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 3000,
});

export default instance;