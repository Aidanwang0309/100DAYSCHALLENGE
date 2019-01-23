import React, { Component } from "react";
import FormPersonalDetail from "../FormPersonalDetail/FormPersonalDetail";
import FormProductDetail from "../FormProductDetail/FormProductDetail";
import Confirm from "../Confirm/Confirm";
import Success from "../Success/Success";

class Form extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    batchId: "",
    startDate: "2019-01-01",
    endDate: "2019-01-01",
    transactionAmount: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const {
      step,
      firstName,
      lastName,
      email,
      batchId,
      startDate,
      endDate,
      transactionAmount
    } = this.state;

    const values = {
      firstName,
      lastName,
      email,
      batchId,
      startDate,
      endDate,
      transactionAmount
    };

    switch (step) {
      case 1:
        return (
          <FormPersonalDetail
            nextStep={this.nextStep}
            onChange={this.onChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormProductDetail
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            onChange={this.onChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            prevStep={this.prevStep}
            nextStep={this.nextStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
    }
  }
}

export default Form;
