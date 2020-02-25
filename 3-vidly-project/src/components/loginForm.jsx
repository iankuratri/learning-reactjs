import React from "react";
import Form from "./common/form";
import Input from "./common/input";
import Joi from "joi-browser";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = () => {
    console.log("form submitted");
  };

  render() {
    const { data, errors } = this.state;

    return (
      <div>
        <h1>Login Form</h1>

        <form className="mt-5" onSubmit={this.handleSubmit}>
          <Input
            label="Username"
            name="username"
            value={data.username}
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            label="Password"
            name="password"
            value={data.password}
            onChange={this.handleChange}
            error={errors.password}
          />
          <button disabled={this.validate()} className="btn btn-primary mt-3">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
