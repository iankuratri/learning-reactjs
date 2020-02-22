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
    this.setState({ errors });
    if (errors) return;

    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account });
  };

  render() {
    const { account } = this.state;

    return (
      <div>
        <h1>Login Form</h1>

        <form className="mt-5" onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            name="username"
            value={account.username}
            onChange={this.handleChange}
          />
          <Input
            label="Password"
            name="password"
            value={account.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-primary mt-3">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
