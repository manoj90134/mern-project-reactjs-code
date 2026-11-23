// const { createContext, useReducer } = require("react");

import { createContext, useReducer, useEffect } from "react";
export const AuthContext = createContext();

export const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    user: null,
  });

  // if the user is Login or user refersh page then we got value from the localstorage and save in user object inside
  useEffect(() => {
    const getvalue = localStorage.getItem("user");

    // console.log("loc", getvalue);
    const jsonValue = JSON.parse(getvalue);

    // console.log("json-value", jsonValue);
    if (getvalue) {
      dispatch({ type: "LOGIN", payload: jsonValue });
    }
  }, []);

  console.log("authContext-Data", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
