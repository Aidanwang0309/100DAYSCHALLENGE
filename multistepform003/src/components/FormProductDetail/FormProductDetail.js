import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
// import "./FormProductDetail.css";
// import RaisedButton from "@material-ui/core/RaisedButton";

class FormProductDetail extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
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
          label="BatchId"
          name="batchId"
          onChange={onChange}
          value={values.batchId}
        />
        <br />
        <TextField
          id="date"
          type="date"
          label="StartDate"
          name="startDate"
          onChange={onChange}
          value={values.startDate}
        />
        <br />
        <TextField
          id="date"
          type="date"
          label="EndDate"
          name="endDate"
          onChange={onChange}
          value={values.endDate}
        />
        <br />
        <TextField
          label="TransactionAmount"
          name="transactionAmount"
          onChange={onChange}
          value={values.transactionAmount}
        />
        <br />
        <Button style={{ margin: "15px" }} onClick={this.back}>
          Back
        </Button>
        <Button style={{ margin: "15px" }} onClick={this.continue}>
          Next
        </Button>
      </div>
    );
  }
}

export default FormProductDetail;
