import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem";
import Header from "../Header/Header";
import { List } from "semantic-ui-react";
import propTypes from "prop-types";

class Todos extends Component {
  render() {
    const fetchTodoItems = this.props.todos.map(todo => {
      if (!todo.completed) {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
            markComplete={this.props.markComplete}
            deleteItem={this.props.deleteItem}
          />
        );
      }
    });

    const fetchDoneItems = this.props.todos.map(todo => {
      if (todo.completed) {
        return (
          <TodoItem
            key={todo.id}
            title={todo.title}
            id={todo.id}
            completed={todo.completed}
            markComplete={this.props.markComplete}
            deleteItem={this.props.deleteItem}
          />
        );
      }
    });

    return (
      <div>
        <List className="todo" animated size="large" verticalAlign="middle">
          {fetchTodoItems}
        </List>
        <Header header="What You Have Done" />
        <List className="todo" animated size="large" verticalAlign="middle">
          {fetchDoneItems}
        </List>
      </div>
    );
  }
}

Todos.propTypes = {
  todos: propTypes.array.isRequired
};

export default Todos;
