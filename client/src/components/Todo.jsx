import { useLoaderData, useNavigate } from "react-router-dom";
import todoServices from "../services/todoServices";

const Todo = () => {

    const todo = useLoaderData();
    const navigate = useNavigate();

    const handleDelete = () => {
        // get the confirmation from the user
        const confirmation = confirm("Are you sure you want to delete this todo?");
        if (confirmation) {
            // api call to delete the todo item with todo.id
            todoServices.deleteTodo(todo.id)
                .then(() => {
                    alert('Todo deleted successfully');

                    // navigate the user to the home page
                    navigate('/');
                })
                .catch((error) => {
                    alert(error.message);
                })
        } else {
            return null;
        }
    }

    return (
        <div>
            <h1>{todo.title}</h1>
            <p>{todo.description}</p>
            <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
            <p>Created At: {todo.createdAt}</p>
            <div>
                <button onClick={() => navigate('/todo/edit/' + todo.id)}>Edit</button> &nbsp;&nbsp;<button onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Todo;