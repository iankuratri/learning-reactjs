import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";
import { register } from "./../services/userService";
import auth from "./../services/authService";

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "", isAdmin: "user" },
    errors: {},
    radio: [
      { value: "user", label: "User", id: 1 },
      { value: "admin", label: "Admin", id: 2 },
    ],
  };

  schema = {
    username: Joi.string().email().required().label("Username"),
    password: Joi.string().min(5).required().label("Password"),
    name: Joi.string().required().label("Name"),
    isAdmin: Joi.string().required().label("Role"),
  };

  doSubmit = async () => {
    try {
      const response = await register(this.state.data);
      auth.loginWithJwt(response.headers["x-auth-token"]);

      window.location = "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;

        this.setState({ errors });
      }
    }
  };

  render() {
    return (
      <div>
        <h1>Register</h1>

        <form className="mt-5" onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderRadio("isAdmin", "Role", this.state.radio)}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
