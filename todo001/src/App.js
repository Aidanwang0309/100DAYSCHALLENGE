import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todo/Todo";
import AddTodo from "./components/AddTodo/AddTodo";
import Header from "./components/Header/Header";
import uuid from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Testing Todo 1",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Testing Todo 2",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Testing Todo 3",
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  deleteItem = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title: title,
      completed: false
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  render() {
    return (
      <div className="Main">
        <div className="container">
          <Header header="Things To Do" />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            deleteItem={this.deleteItem}
          />
        </div>
      </div>
    );
  }
}

export default App;
