import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import "./FormPersonalDetail.css";
// import RaisedButton from "@material-ui/core/RaisedButton";

class FormPersonalDetail extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, onChange } = this.props;
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
        <TextField
          label="FirstName"
          name="firstName"
          onChange={onChange}
          value={values.firstName}
        />
        <br />
        <TextField
          label="LastName"
          name="lastName"
          onChange={onChange}
          value={values.lastName}
        />
        <br />
        <TextField
          label="Email"
          name="email"
          onChange={onChange}
          value={values.email}
        />
        <br />
        <Button style={{ margin: "15px" }} onClick={this.continue}>
          Next
        </Button>
      </div>
    );
  }
}

export default FormPersonalDetail;
