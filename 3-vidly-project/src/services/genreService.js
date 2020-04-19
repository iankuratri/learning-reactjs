import _http from "./httpService";
import { apiUrl } from "./../config.json";

export function getGenres() {
  return _http.get(`${apiUrl}/genres`);
}
