import _http from "./httpService";
import { apiUrl } from "./../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = `${apiUrl}/auth`;
const tokenKey = "token";

async function login(credentials) {
  const { data: jwt } = await _http.post(apiEndPoint, credentials);
  this.loginWithJwt(jwt);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

function logout() {
  localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
};
