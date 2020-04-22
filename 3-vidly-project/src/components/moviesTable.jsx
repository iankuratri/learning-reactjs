import React, { Component } from "react";
import Table from "./common/table";
import Like from "./common/like";
import { Link } from "react-router-dom";
import auth from "./../services/authService";

class MoviesTable extends Component {
  columns = [
    {
      label: "Title",
      path: "title",
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
      ),
    },
    { label: "Genre", path: "genre.name" },
    { label: "Stock", path: "numberInStock" },
    { label: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: (movie) => (
        <Like onClick={() => this.props.onLike(movie)} isLiked={movie.liked} />
      ),
    },
  ];

  deleteColumn = {
    key: "delete",
    content: (movie) => (
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => this.props.onDelete(movie)}
      >
        Delete
      </button>
    ),
  };

  constructor() {
    super();

    const user = auth.getCurrentUser();
    if (user && user.isAdmin) {
      this.columns.push(this.deleteColumn);
    }
  }

  render() {
    const { movies, onSort, sortColumn } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
