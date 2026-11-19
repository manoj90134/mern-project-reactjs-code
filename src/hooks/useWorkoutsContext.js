import { useContext } from "react";

import { WorkoutsContext } from "../context/WorkContext.js";

export const useWorkoutcontext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error("useWorkoutcontext must be use inside WorkoutsContext page");
  }

  return context;
};
