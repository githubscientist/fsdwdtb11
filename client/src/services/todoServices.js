import instance from "./instance";

const todoServices = {
    getTodos: async () => {
        try {
            return await instance.get('/todos');
        } catch (error) {
            console.log('Error fetching todos', error);
        }
    }
}

export default todoServices;