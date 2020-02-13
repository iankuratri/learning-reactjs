import React, { Component } from "react";
import Like from "./like";

class MoviesTable extends Component {
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onSort(sortColumn);
  };

  render() {
    const { movies, onLike, onDelete } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th
              scope="col"
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("title")}
            >
              Title
            </th>
            <th
              scope="col"
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("genre.name")}
            >
              Genre
            </th>
            <th
              scope="col"
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("numberInStock")}
            >
              Stock
            </th>
            <th
              scope="col"
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort("dailyRentalRate")}
            >
              Rate
            </th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like onClick={() => onLike(movie)} isLiked={movie.liked} />
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => onDelete(movie)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MoviesTable;
