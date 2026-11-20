import { useContext } from "react";

import { AuthContext } from "../context/AuthContext";

export const useAuthcontext = () => {
  const user = useContext(AuthContext);

  if (!user) {
    throw Error("AuthContext must be use inside AuthContext page");
  }

  return user;
};
