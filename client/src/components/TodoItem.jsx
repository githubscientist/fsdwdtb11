const TodoItem = ({ todo }) => {
    return <li>{todo.text} {todo.completed == 'yes' && '✅'}</li>
}

export default TodoItem;