import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";
import { getGenres } from "../services/fakeGenreService";
import { saveMovie, getMovie } from "../services/fakeMovieService";

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
    numberInStock: Joi.number()
      .integer()
      .min(1)
      .max(10)
      .required()
      .label("Number In Stock"),
    dailyRentalRate: Joi.number()
      .min(1)
      .max(5)
      .required()
      .required()
      .label("Rate")
  };

  doSubmit = () => {
    const movie = { ...this.state.data };
    saveMovie(movie);
    this.handleSave();
  };

  handleSave = () => {
    this.props.history.replace("/movies");
  };

  handleAutofill = () => {
    const id = this.props.match.params.id;

    if (id) {
      const movie = getMovie(id);
      const data = {};

      data.title = movie.title;
      data.genreId = movie.genre._id;
      data.numberInStock = movie.numberInStock;
      data.dailyRentalRate = movie.dailyRentalRate;

      this.setState({ data });
    }
  };

  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    this.handleAutofill();
  }

  render() {
    return (
      <div>
        <h1>{this.props.match.params.id ? "Edit Movie" : "Add Movie"}</h1>
        <form className="mt-5" onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
