import React, { Component } from "react";
import { Consumer } from "../../Context";
import "./Search.css";
import axios from "axios";

class Search extends Component {
  state = {
    artist: "",
    location: "",
    genre: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  findEvents = async (dispatch, e) => {
    e.preventDefault();
    try {
      const events = await axios.get(
        `https://www.eventbriteapi.com/v3/events/search/?q=${
          this.state.artist
        }&location.address=${this.state.location}&
        subcategories=3006&
        sort_by=best&token=${process.env.REACT_APP_EB_KEY}`
      );

      dispatch({
        type: "SEARCH_EVENTS",
        payload: events
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch } = value;
          return (
            <div className="searchContainer">
              <form
                className="ui form four column grid"
                onSubmit={this.findEvents.bind(this, dispatch)}
              >
                <div className="field column">
                  <input
                    type="text"
                    name="artist"
                    value={this.state.artist}
                    placeholder="Artist"
                    onChange={this.onChange}
                  />
                </div>

                <div className="field column">
                  <input
                    type="text"
                    name="location"
                    value={this.state.location}
                    placeholder="Location"
                    onChange={this.onChange}
                  />
                </div>

                <div className="field column">
                  <input
                    type="text"
                    name="genre"
                    value={this.state.genre}
                    placeholder="Genre"
                    onChange={this.onChange}
                  />
                </div>
                <div className="field column">
                  <button className=" ui button" type="submit">
                    Get Events
                  </button>
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
