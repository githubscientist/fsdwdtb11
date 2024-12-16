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
    },
    deleteTodo: async (id) => {
        try {
            return await instance.delete('/todos/' + id);
        } catch (error) {
            console.log('Error delete todo', error);
        }
    }
}

export default todoServices;