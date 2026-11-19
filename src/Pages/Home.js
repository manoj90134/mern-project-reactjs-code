// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import Navigation from "../Component/Navigation";
import Workoutdetails from "../Component/Workoutdetails";
import Addworkout from "../Component/Addworkout";

import { useWorkoutcontext } from "../hooks/useWorkoutsContext";

const Home = () => {
  // const [workouts, SetWorkout] = useState("");

  const { workouts, dispatch } = useWorkoutcontext();

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch("http://localhost:8000/workout/all-view");

      const data = await response.json();

      // console.log(response.ok);

      if (response.ok === true) {
        // SetWorkout(data.data);

        dispatch({ type: "SET_WORKOUTS", payload: data.data });

        // console.log("respopnse", response);
      }
    };

    fetchApi();
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <h1> This is Home Page </h1>
      <Addworkout />
      {workouts &&
        workouts.map((each) => {
          return <Workoutdetails key={each._id} Workoutdetails={each} />;
          // {
          // return <p key={each._id}> {each.title}</p>;
          // }
        })}
    </div>
  );
};

export default Home;
