import React, { Component } from "react";
import Input from "./common/input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  // react ref
  //   username = React.createRef();
  //   componentDidMount() {
  //     this.username.current.focus();
  //   }

  validate = () => {
    const errors = {};
    const { account } = this.state;

    if (account.username === "") errors.username = "Username is required.";
    if (account.password === "") errors.password = "Password is required";

    return Object.keys(errors).length ? errors : null;
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.username.current.value);

    const errors = this.validate();
    console.log(errors);
    this.setState({ errors: errors || {} });
    if (errors) return;

    console.log("submitted");
  };

  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required.";
    }

    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account, errors });
  };

  render() {
    const { account, errors } = this.state;

    return (
      <div>
        <h1>Login Form</h1>

        <form className="mt-5" onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            name="username"
            value={account.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            label="Password"
            name="password"
            value={account.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary mt-3">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
