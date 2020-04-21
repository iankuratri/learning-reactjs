import _http from "./httpService";
import { apiUrl } from "./../config.json";
import jwtDecode from "jwt-decode";

const apiEndPoint = `${apiUrl}/auth`;
const tokenKey = "token";

export async function login(credentials) {
  const { data: jwt } = await _http.post(apiEndPoint, credentials);
  this.loginWithJwt(jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export function getJwt() {
  try {
    return localStorage.getItem(tokenKey);
  } catch (error) {
    return "";
  }
}

export default {
  login,
  loginWithJwt,
  logout,
  getCurrentUser,
  getJwt,
};
