import TodoItem from "./components/TodoItem";

const todos = [
  {
    id: 1,
    text: 'Buy groceries',
    completed: false
  },
  {
    id: 2,
    text: 'Clean the house',
    completed: true
  },
  {
    id: 3,
    text: 'Go for a walk',
    completed: false
  },
  {
    id: 4,
    text: 'Read a book',
    completed: true
  }
];

const App = () => {
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))
        }
      </ul>
    </div>
  )
}

export default App;