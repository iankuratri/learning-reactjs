import _http from "./httpService";

export function getMovies() {
  return _http.get("http://localhost:3900/api/movies");
}
