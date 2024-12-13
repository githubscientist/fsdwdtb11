import todoServices from "../services/todoServices";

const todosLoader = async () => {
    try {
        const response = await todoServices.getTodos();
        return response.data;
    } catch (error) {
        return null;
    }
}

export default todosLoader;