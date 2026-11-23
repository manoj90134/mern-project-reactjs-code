// import React from "react";

import { redirect } from "react-router-dom";
import { useAuthcontext } from "../hooks/useAuthContext";

export const Logout = () => {
  const { dispatch } = useAuthcontext();

  const out = () => {
    localStorage.removeItem("user");

    dispatch({ type: "LOGOUT" });

    window.location.href = "/login";
  };

  return { out };
};
