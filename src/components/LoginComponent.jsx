import React, { useState } from "react";
import { loginAPICall, storeToken } from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  function handleLoginForm(e) {
    e.preventDefault();
    const loginObj = { usernameOrEmail: username, password };
    console.log(loginObj);

    loginAPICall(loginObj)
      .then((response) => {
        console.log("this");

        console.log(response);
        const token =
          "Basic " +
          window.btoa(`${loginObj.usernameOrEmail}:${loginObj.password}`);
        console.log(token);

        storeToken(token);
        navigator("/todos");
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
        <div className="rol-md-6 offset-md-3">
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
