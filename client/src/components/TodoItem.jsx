const TodoItem = ({ todo }) => {
    return todo.completed ? (
        <li>{todo.text} {'✓'}</li>
    ) : (
        <li>{todo.text}</li>
    )
}

export default TodoItem;