import axios from "axios";

const baseURL = `https://676195b946efb37323724255.mockapi.io`;

// create a new axios instance
const instance = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json"
    },
    timeout: 3000
});

export default instance;