import Joi from "joi-browser";
import { Component } from "react";

class Form extends Component {
  state = { data: {}, errors: {} };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);

    const errors = {};

    if (!error) return null;
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    this.doSubmit();
  };

  validateProperty = ({ name, value }) => {
    const formControl = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(formControl, schema);
    return error ? error.details[0].message : null;
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;

    this.setState({ data, errors });
  };
}

export default Form;
