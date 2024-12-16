import React, { useState } from 'react'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'

const Todos = () => {

    const todos = useLoaderData();
    const navigate = useNavigate();

    const [status, setStatus] = useState('all');

    return (
        <div>
            <h1>Todo List</h1>
            <select
                value={status}
                onChange={e => setStatus(e.target.value)}
            >
                <option value='all'>All</option>
                <option value='completed'>Completed</option>
                <option value='incomplete'>Incomplete</option>
            </select>
            <ul>
                {
                    todos
                        .filter(todo => {
                            if (status === 'all') {
                                return true;
                            } else if (status === 'completed') {
                                return todo.completed;
                            } else {
                                return !todo.completed;
                            }
                        })
                        .map(todo => <li key={todo.id}><Link to={`/todo/${todo.id}`}>{todo.title}</Link></li>)
                }
            </ul>

            <div>
                <button onClick={() => navigate('/todo/new')}>New Todo</button>
            </div>
        </div >
    )
}

export default Todos