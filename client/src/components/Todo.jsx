import { useLoaderData } from "react-router-dom";

const Todo = () => {

    const todo = useLoaderData();

    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
            <p>Created At: {todo.createdAt}</p>
        </div>
    )
}

export default Todo;