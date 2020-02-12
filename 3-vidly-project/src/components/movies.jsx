import React, { Component } from "react";
import { getMovies } from "./../services/fakeMovieService";
import { getGenres } from "./../services/fakeGenreService";
import Like from "./common/like";
import Paginator from "./common/paginator";
import ListGroup from "./common/listGroup";
import { paginate } from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  deleteMovie = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie };
    movies[index].liked = !movies[index].liked;

    this.setState({ movies });
  };

  handlePageChange = currentPage => {
    this.setState({ currentPage });
  };

  handleGenreChange = genre => {
    console.log(genre);
  };

  render() {
    const { pageSize, currentPage, movies: allMovies, genres } = this.state;
    const { length: count } = allMovies;

    const movies = paginate(allMovies, currentPage, pageSize);

    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <div className="row">
        <div className="col-2">
          <ListGroup items={genres} onGenreChange={this.handleGenreChange} />
        </div>
        <div className="col">
          <p>Showing {count} movies from the database.</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
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
                    <Like
                      onClick={() => this.handleLike(movie)}
                      isLiked={movie.liked}
                    />
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => this.deleteMovie(movie)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginator
            itemsCount={count}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
