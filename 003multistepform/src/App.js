import React, { Component } from "react";
import Form from "./components/Form/Form";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        <Form />
      </div>
    );
  }
}

export default App;
