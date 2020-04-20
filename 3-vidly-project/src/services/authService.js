import _http from "./httpService";
import { apiUrl } from "./../config.json";

const apiEndPoint = `${apiUrl}/auth`;

export function login(credentials) {
  return _http.post(apiEndPoint, credentials);
}
