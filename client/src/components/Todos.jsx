import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Todos = () => {

    const todos = useLoaderData();

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {
                    todos.map(todo => <li key={todo.id}>{todo.title}</li>)
                }
            </ul>
        </div>
    )
}

export default Todos