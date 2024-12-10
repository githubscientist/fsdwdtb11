import TodoItem from "./components/TodoItem";

const todos = [
  {
    id: 1,
    text: 'Buy groceries',
    completed: 'no'
  },
  {
    id: 2,
    text: 'Clean the house',
    completed: 'yes'
  },
  {
    id: 3,
    text: 'Go for a walk',
    completed: 'no'
  },
  {
    id: 4,
    text: 'Read a book',
    completed: 'yes'
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