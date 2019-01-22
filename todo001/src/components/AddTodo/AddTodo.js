import React, { Component } from "react";
import "./AddTodo.css";
import { Button, Grid } from "semantic-ui-react";

class AddTodo extends Component {
  state = {
    task: ""
  };

  onChange = e => {
    this.setState({
      task: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.task);
    this.setState({ task: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className="addTodo">
        <input
          className="input"
          type="text"
          placeholder="Add New Task"
          value={this.state.task}
          onChange={this.onChange}
        />
        <input type="submit" value=" + New" className="btn" />
      </form>
    );
  }
}

export default AddTodo;
