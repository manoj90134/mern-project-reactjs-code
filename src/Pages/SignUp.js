import React, { useState } from "react";

import { useSignin } from "../hooks/useSignin";

import Navigation from "../Component/Navigation";

const SignUp = () => {
  const [email, SetEmail] = useState();
  const [password, SetPassword] = useState();

  const { signupHook, error, loading } = useSignin();

  // console.log("error", error);

  const SubmitForm = async (e) => {
    e.preventDefault();

    const userSignin = await signupHook(email, password);

    if (userSignin.success === true) {
      alert(userSignin.message);
    }
  };

  return (
    <>
      <Navigation />

      <div className="jumbotron text-center">
        <h4> Sign up form </h4>
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
          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={loading}
          >
            Submit
          </button>
        </form>

        {error && <div className="errorScreen">{error}</div>}
      </div>
    </>
  );
};

export default SignUp;
