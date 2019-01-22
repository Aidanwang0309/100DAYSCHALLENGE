import React from "react";
import { List, Button, Checkbox } from "semantic-ui-react";
import "./TodoItem.css";

const TodoItem = props => {
  const getStyle = () => {
    return {
      textDecoration: props.completed ? "line-through" : "none"
    };
  };

  return (
    <List.Item style={getStyle()}>
      <List.Content
        floated="left"
        className={props.completed ? "checked" : "nochecked"}
      >
        <input
          type="checkbox"
          onChange={props.markComplete.bind(this, props.id)}
        />
      </List.Content>
      <List.Content floated="right">
        <Button onClick={props.deleteItem.bind(this, props.id)}>Delete</Button>
      </List.Content>
      <List.Content>{props.title}</List.Content>
    </List.Item>
  );
};

export default TodoItem;
