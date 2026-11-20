import React, { useState } from "react";

import { ApiUrl } from "../Env";

const LoginForm = () => {
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();

  const SubmitForm = (e) => {
    e.preventDefault();

    console.log("email", email);
    console.log("password", password);
  };

  console.log(ApiUrl);

  return (
    <>
      <div className="jumbotron text-center">
        <h4> Login Form </h4>
      </div>

      <div className="container">
        <form method="post" onSubmit={SubmitForm}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control input-lg"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => SetEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control input-lg"
              id="exampleInputPassword1"
              onChange={(e) => SetPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
