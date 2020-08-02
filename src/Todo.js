import React from "react";
import './Todo.css';
import { ListItemAvatar, List, ListItem, Avatar, ListItemText } from "@material-ui/core";

function Todo(props) {
  return (
    <List className="todo__list">
    <ListItem>
        <ListItemAvatar>
        </ListItemAvatar>
      <ListItemText primary={props.text} secondary="Description ℹ " />
    </ListItem>
  </List>
  );
}

export default Todo;
