import instance from "../services/instance";

const jobsLoader = async () => {
    try {
        const response = await instance.get('/jobs');

        return response.data;
    } catch (error) {
        return null;
    }
}

export default jobsLoader;