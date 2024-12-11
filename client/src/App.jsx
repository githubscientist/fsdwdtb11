import { useState } from "react";

const App = () => {

  // ' ❌' ' ✅'
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Learn React",
      completed: false
    },
    {
      id: 2,
      text: "Buy groceries",
      completed: false
    },
    {
      id: 3,
      text: "Watch a movie",
      completed: true
    },
    {
      id: 4,
      text: "Go for a walk",
      completed: false
    }
  ]);

  console.log(todos);

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {
          todos.map(todo => {
            return <li key={todo.id}>{todo.text} {todo.completed && ' ✅'} {!todo.completed && ' ❌'}</li>;
          })
        }
      </ul>
    </div>
  )
}

export default App;