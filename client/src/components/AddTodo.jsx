import { useState } from 'react';
import './AddTodo.css';
import todoServices from '../services/todoServices';
import { useNavigate } from 'react-router-dom';

const AddTodo = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [completed, setCompleted] = useState(false);

    const navigate = useNavigate();

    const addTodoItem = async (todo) => {
        try {
            await todoServices.addTodo(todo);

            setTitle('');
            setDescription('');
            setCompleted(false);

            alert('Todo added successfully');

            navigate('/');
        } catch (error) {
            alert(error.message);
        }
    }

    const handleAddForm = (e) => {
        e.preventDefault();

        addTodoItem({
            title,
            description,
            completed
        });
    }

    return (
        <div>
            <h1>Add Todo</h1>
            <form className='addForm' onSubmit={handleAddForm}>
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

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddTodo;