import { useState } from 'react';
import './AddTodo.css';
import todoServices from '../services/todoServices';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditTodo = () => {

    const todo = useLoaderData();

    const [title, setTitle] = useState(todo.title);
    const [description, setDescription] = useState(todo.description);
    const [completed, setCompleted] = useState(todo.completed);

    const navigate = useNavigate();

    const updateTodoItem = async (todoArg) => {
        try {
            await todoServices.updateTodo(todo.id, todoArg);

            alert('Todo updated successfully');

            // navigate one step back
            navigate(-1);
        } catch (error) {
            alert(error.message);
        }
    }

    const handleEditForm = (e) => {
        e.preventDefault();

        updateTodoItem({
            title,
            description,
            completed
        });
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <form className='addForm' onSubmit={handleEditForm}>
                <input
                    type="text"
                    placeholder="title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="description..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <select
                    value={completed}
                    onChange={(e) => setCompleted(e.target.value)}
                >
                    <option
                        value={false}
                    >Incomplete</option>
                    <option
                        value={true}
                    >Completed</option>
                </select>

                <button type="submit">Update</button>
            </form>
        </div>
    )
}

export default EditTodo;