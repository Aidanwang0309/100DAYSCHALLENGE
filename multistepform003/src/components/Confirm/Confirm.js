import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";

class Confirm extends Component {
  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        batchId,
        startDate,
        endDate,
        transactionAmount
      }
    } = this.props;

    return (
      <div className="FormPersonalDetailContainer">
        <AppBar position="static" title="Enter User Details">
          <Toolbar className="toolbar">
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Enter User Details
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <br />
        <List>
          <ListItem style={{ "text-align": "center" }}>
            <ListItemText primary="First Name" secondary={firstName} />
          </ListItem>

          <ListItem style={{ "text-align": "center" }}>
            <ListItemText primary="Last Name" secondary={lastName} />
          </ListItem>

          <ListItem style={{ "text-align": "center" }}>
            <ListItemText primary="Email" secondary={email} />
          </ListItem>

          <ListItem style={{ "text-align": "center" }}>
            <ListItemText primary="BatchId" secondary={batchId} />
          </ListItem>

          <ListItem style={{ "text-align": "center" }}>
            <ListItemText primary="StartDate" secondary={startDate} />
          </ListItem>

          <ListItem style={{ "text-align": "center" }}>
            <ListItemText primary="EndDate" secondary={endDate} />
          </ListItem>

          <ListItem style={{ "text-align": "center" }}>
            <ListItemText
              primary="TransactionAmount"
              secondary={transactionAmount}
            />
          </ListItem>
        </List>
        <br />
        <Button style={{ margin: "15px" }} onClick={this.back}>
          Back
        </Button>
        <Button
          style={{ margin: "15px" }}
          color="primary"
          onClick={this.continue}
        >
          Confirm
        </Button>
      </div>
    );
  }
}

export default Confirm;
