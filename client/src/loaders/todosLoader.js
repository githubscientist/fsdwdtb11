import todoServices from "../services/todoServices";

const todosLoader = async function getTodos() {
    try {
        const todos = await todoServices.getTodos();
        return todos.data;
    } catch (error) {
        return null;
    }
}

export default todosLoader;