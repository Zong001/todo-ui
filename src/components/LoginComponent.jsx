import React, { useState } from "react";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  function handleLoginForm(e) {
    e.preventDefault();
    const loginObj = { usernameOrEmail: username, password };
    console.log(loginObj);

    console.log("usernameOrEmail:", username);
    console.log("password:", password);
    console.log("loginObj:", loginObj);

    loginAPICall(username, password)
      .then((response) => {
        // const token =
        //   "Basic " +
        //   window.btoa(`${loginObj.usernameOrEmail}:${loginObj.password}`);

        const token = "Bearer " + response.data.accessToken;

        const role = response.data.role;

        storeToken(token);

        saveLoggedInUser(username, role);

        navigator("/todos");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log("why");

        console.error(error);
      });
  }

  return (
    <div className="container">
      <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center">User Login From</h2>
            </div>
            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">
                    Username or Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Enter username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label">Password</label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleLoginForm(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
