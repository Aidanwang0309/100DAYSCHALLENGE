import React, { Component } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_EVENTS":
      return {
        ...state,
        events: action.payload,
        heading: "Search Results"
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    events: [],
    heading: "testing header",
    dispatch: action => this.setState(state => reducer(state, action))
  };

  componentDidMount = async () => {
    try {
      const events = await axios.get(
        `https://www.mogl.com/api/v2/venues/{venue}/token=${
          process.env.REACT_APP_EB_KEY
        }`
      );
      this.setState({
        events: events,
        heading: "aboutheading"
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
