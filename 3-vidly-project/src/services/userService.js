import _http from "./httpService";
import { apiUrl } from "./../config.json";

const apiEndPoint = `${apiUrl}/users`;

export function register(user) {
  const body = {
    email: user.username,
    name: user.name,
    password: user.password,
    isAdmin: !!(user.isAdmin === "admin"),
  };

  return _http.post(apiEndPoint, body);
}
