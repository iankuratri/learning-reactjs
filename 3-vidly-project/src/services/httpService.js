import axios from "axios";
import { toast } from "react-toastify";
import auth from "./authService";
import logger from "./logService";

axios.defaults.headers.common["x-auth-token"] = auth.getJwt();

console.log("token:", axios.defaults.headers.common);

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log("Logging the error", error);
    toast.error("An unexpected error occurred.");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  put: axios.put,
  post: axios.post,
  delete: axios.delete,
};
