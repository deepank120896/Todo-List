import React from "react";
import { useState } from "react";
import "./Todo.css";
import {
  ListItemAvatar,
  List,
  ListItem,
  ListItemText,
  Button,
  Modal,
} from "@material-ui/core";

import DeleteIcon from "@material-ui/icons/Delete";
import db from "./firebase";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  // const handleClose = () => {
  //     setOpen(false);
  // };

  const updateTodo = () => {
    // update the Todo, with updated input
    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
      },
      { merge: true }
    );
    setOpen(false);
  };
  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a Modal</h1>
          <input
            placeholder={props.todo.text}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <Button onClick={updateTodo}>Update Todo</Button>
        </div>
      </Modal>
      <List className="todo__list">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.text} secondary="Description ℹ " />
        </ListItem>
        <div className="action__buttons">
          <Button variant="contained" onClick={(e) => setOpen(true)}>Edit</Button>
          <DeleteIcon
            onClick={(event) =>
              db.collection("todos").doc(props.todo.id).delete()
            }
          />
        </div>
      </List>
    </>
  );
}

export default Todo;
