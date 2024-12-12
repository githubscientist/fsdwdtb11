import axios from "axios";

const baseURL = `https://jsonplaceholder.typicode.com`;

// create an axios instance
const instance = axios.create({
    baseURL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
});

// export the instance
export default instance;