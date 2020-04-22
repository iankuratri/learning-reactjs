import _http from "./httpService";
import { apiUrl } from "./../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = `${apiUrl}/auth`;

_http.setJwt(getJwt());

async function login(credentials) {
  const { data: jwt } = await _http.post(apiEndPoint, credentials);
  this.loginWithJwt(jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

function logout() {
  localStorage.removeItem("token");
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

function getJwt() {
  return localStorage.getItem("token");
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
};
