import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth";

export function registerAPICall(registerObj) {
  return axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj);
}

export const loginAPICall = (usernameOrEmail, password) =>
  axios
    .post(AUTH_REST_API_BASE_URL + "/login", { usernameOrEmail, password })
    .catch((error) => {
      console.log("begin");

      console.error("Error:", error.message);
      console.error("Request:", error.request); // 查看请求细节
      console.error("Response:", error.response); // 查看响应细节
    });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");
