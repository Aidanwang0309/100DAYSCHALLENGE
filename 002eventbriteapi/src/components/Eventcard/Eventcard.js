import React, { Component } from "react";
import "./Eventcard.css";
import { Card, Icon, Image } from "semantic-ui-react";

const Eventcard = props => {
  return (
    <Card style={{ height: "300px", overflow: "hidden" }}>
      <Image src={props.eventLogo} />
      <Card.Content>
        <Card.Header>{props.eventName}</Card.Header>
        <Card.Meta>
          <span className="date">{props.eventDate}</span>
        </Card.Meta>
        <Card.Description />
      </Card.Content>
    </Card>
  );
};

export default Eventcard;
