import React from "react";
import Like from "./like";

const MoviesTable = props => {
  const { movies, onLike, onDelete, onSort } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th
            scope="col"
            style={{ cursor: "pointer" }}
            onClick={() => onSort("title")}
          >
            Title
          </th>
          <th
            scope="col"
            style={{ cursor: "pointer" }}
            onClick={() => onSort("genre.name")}
          >
            Genre
          </th>
          <th
            scope="col"
            style={{ cursor: "pointer" }}
            onClick={() => onSort("numberInStock")}
          >
            Stock
          </th>
          <th
            scope="col"
            style={{ cursor: "pointer" }}
            onClick={() => onSort("dailyRentalRate")}
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
};

export default MoviesTable;
