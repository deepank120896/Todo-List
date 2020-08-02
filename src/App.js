import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import "./App.css";
import Todo from "./Todo";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // when the app loads, we need to listen to DB and fetch new todos as they get added/removed
  useEffect(() => {
    //  effect
    // this code here ... , fires when app.js loads
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docs.map(doc => doc.data().todo))
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, text: doc.data().todo }))
        );
      });
  }, []);

  // console.log('🤹',input);

  const addTodo = (event) => {
    // this fires off when button is clicked!
    // console.log('👾','Add Button Clicked');
    event.preventDefault(); // prevents PAGE REFRESH on ENTER

    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setTodos([...todos, input]);
    // console.log("🤬", todos);
    setInput("");
  };

  return (
    <div className="App">
      <h1>To Do App</h1>
      <form>
        {/* <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        /> */}
        <FormControl>
          <InputLabel>📔 Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          variant="contained"
          color="primary"
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo) => (
          <Todo todo={todo}></Todo>
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
