import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    "Take Dogs to Walk",
    "Learn React",
    "Do LeetCode",
  ]);
  const [input, setInput] = useState("");

  // console.log('🤹',input);

  const addTodo = (event) => {
    // this fires off when button is clicked!
    // console.log('👾','Add Button Clicked');
    event.preventDefault(); // prevents PAGE REFRESH on ENTER
    setTodos([...todos, input]);
    console.log("🤬", todos);
  };

  return (
    <div className="App">
      <h1> Hello World</h1>
      <form>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
