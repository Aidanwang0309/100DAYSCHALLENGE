import React, { Component } from "react";
import { Consumer } from "../../Context";
import Eventcard from "../Eventcard/Eventcard";
import { Card } from "semantic-ui-react";
import "./Events.css";

class Events extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value);
          const { events, heading } = value;

          if (events.length === 0 || events === undefined) {
            return <span />;
          } else {
            const results = events.data.events;
            const card = results.map(event => {
              return (
                <Eventcard
                  key={event.id}
                  eventName={event.name.text}
                  eventDate={event.start.local}
                  eventDescription={event.description.text}
                  eventLogo={event.logo.url}
                />
              );
            });
            return (
              <Card.Group className="cardsContainer" itemsPerRow={4}>
                {" "}
                {card}{" "}
              </Card.Group>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Events;
