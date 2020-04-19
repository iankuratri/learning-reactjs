import _http from "./httpService";

export function getGenres() {
  return _http.get("http://localhost:3900/api/genres");
}
