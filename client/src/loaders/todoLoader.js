import todoServices from "../services/todoServices";

const todoLoader = async ({ params }) => {
    try {
        const response = await todoServices.getTodo(params.id);
        return response.data;
    } catch (error) {
        return null;
    }
}

export default todoLoader;