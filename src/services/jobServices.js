import instance from '../services/instance';

const jobServices = {
    getJobs: async () => {
        try {
            return await instance.get('/jobs');
        } catch (error) {
            console.log('Error fetching jobs', error);
        }
    }
}

export default jobServices;