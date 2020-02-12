import React, { Component } from "react";
import { paginate } from "../utils/paginate";
import { getGenres } from "./../services/fakeGenreService";
import { getMovies } from "./../services/fakeMovieService";
import ListGroup from "./common/listGroup";
import MoviesTable from "./common/moviesTable";
import Paginator from "./common/paginator";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres });
  }

  handleDelete = movie => {
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

  handleGenreSelect = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre
    } = this.state;

    const { length: count } = allMovies;

    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter(m => m.genre._id === selectedGenre._id)
        : allMovies;

    const movies = paginate(filteredMovies, currentPage, pageSize);

    if (count === 0) return <p>There are no movies in the database.</p>;
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>
        <div className="col">
          <p>Showing {filteredMovies.length} movies from the database.</p>

          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
          />

          <Paginator
            itemsCount={filteredMovies.length}
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
