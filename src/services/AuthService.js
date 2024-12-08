import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth";

export function registerAPICall(registerObj) {
  return axios.post(AUTH_REST_API_BASE_URL + "/register", registerObj);
}

// export const loginAPICall = (usernameOrEmail, password) =>
//   axios.post(AUTH_REST_API_BASE_URL + "/login", { usernameOrEmail, password });
export const loginAPICall = (usernameOrEmail, password) =>
  axios
    .post(AUTH_REST_API_BASE_URL + "/login", { usernameOrEmail, password })

    .catch((error) => {
      console.log("begin");
    });

export const storeToken = (token) => localStorage.setItem("token", token);

export const getToken = () => localStorage.getItem("token");
