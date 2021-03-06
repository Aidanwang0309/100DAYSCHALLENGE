import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/AppNavbar/AppNavbar";
import ItemModal from "./components/ItemModal/ItemModal";
import { Container } from "reactstrap";
import ShoppingList from "./components/ShoppingList/ShoppingList";
import { Provider } from "react-redux";
import store from "./store/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
