import instance from "./instance";

const todoServices = {
    getTodos: async () => {
        try {
            return await instance.get('/todos');
        } catch (error) {
            console.log('Error fetching todos', error);
        }
    },
    getTodo: async (id) => {
        try {
            return await instance.get('/todos/' + id);
        } catch (error) {
            console.log('Error fetching todo', error);
        }
    }
}

export default todoServices;