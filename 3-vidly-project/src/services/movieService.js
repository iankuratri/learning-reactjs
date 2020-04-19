import _http from "./httpService";
import { apiUrl } from "./../config.json";

const apiEndPoint = `${apiUrl}/movies`;

export function getMovies() {
  return _http.get(apiEndPoint);
}

export function deleteMovie(movieId) {
  return _http.delete(`${apiEndPoint}/${movieId}`);
}

export function getMovie(movieId) {
  return _http.get(`${apiEndPoint}/${movieId}`);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return _http.put(`${apiEndPoint}/${movie._id}`, body);
  }

  return _http.post(apiEndPoint, movie);
}
