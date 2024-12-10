const TodoItem = ({ todo }) => {
    if (todo.completed) {
        return <li>{todo.text} {'✓'}</li>
    }

    return <li>{todo.text}</li>
}

export default TodoItem;