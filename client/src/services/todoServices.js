import instance from "./instance";

const todoServices = {
    getTodos: async () => {
        try {
            return await instance.get('/todos');
        } catch (error) {
            console.log(error);
        }
    },
    getTodoByID: async (id) => {
        try {
            return await instance.get(`/todos/${id}`);
        } catch (error) {
            console.log(error);
        }
    },
    createTodo: async (todo) => {
        try {
            return await instance.post('/todos', todo);
        } catch (error) {
            console.log(error);
        }
    },
    updateTodo: async (id, todo) => {
        try {
            return await instance.put(`/todos/${id}`, todo);
        } catch (error) {
            console.log(error);
        }
    },
    deleteTodo: async (id) => {
        try {
            return await instance.delete(`/todos/${id}`);
        } catch (error) {
            console.log(error);
        }
    }
}

export default todoServices;