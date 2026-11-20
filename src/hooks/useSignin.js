import { useState } from "react";

import { ApiUrl } from "../Env";

import { useAuthcontext } from "./useAuthContext";

export const useSignin = () => {
  const { dispatch } = useAuthcontext();

  const [error, SetError] = useState(null);
  const [loading, SetLoading] = useState(null);

  const signupHook = async (email, password) => {
    const ApiCalled = await fetch(ApiUrl + "signup", {
      headers: {
        "content-type": "application/json",
      },
      method: "post",
      body: JSON.stringify({ email, password }),
    });

    // console.log(ApiCalled);

    const response = await ApiCalled.json();

    if (!ApiCalled.ok) {
      SetLoading(false);
      SetError(response.message);
    }

    if (ApiCalled.ok === true) {
      SetLoading(false);
      SetError("");

      // console.log("response", response);

      localStorage.setItem("user", JSON.stringify(response.data));
      dispatch({ type: "LOGIN", payload: response.data });
    }

    return response;
  };

  return { signupHook, error, loading };
};
