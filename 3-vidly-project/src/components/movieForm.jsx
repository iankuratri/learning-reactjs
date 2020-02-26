import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";

class MovieForm extends Form {
  state = {
    data: { title: "", genreId: "", numberInStock: "", dailyRentalRate: "" },
    genres: [],
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    genreId: Joi.string()
      .required()
      .label("Genre"),
    numberInStock: Joi.string()
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.string()
      .required()
      .label("Rate")
  };

  doSubmit = () => {
    console.log("form submitted");

    this.handleSave();
  };

  handleSave = () => {
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie From {this.props.match.params.id}</h1>
        {/* <button className="btn btn-primary" onClick={this.handleSave}>
          Save
        </button> */}

        <form className="mt-5" onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
