import jobServices from "../services/jobServices";

const jobsLoader = async () => {
    try {
        const response = await jobServices.getJobs();

        return response.data;
    } catch (error) {
        return null;
    }
}

export default jobsLoader;