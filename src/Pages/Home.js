// import React, { useEffect, useState } from "react";
import React, { useEffect } from "react";
import Navigation from "../Component/Navigation";
import Workoutdetails from "../Component/Workoutdetails";
import Addworkout from "../Component/Addworkout";

import { ApiUrl } from "../Env";

import { useWorkoutcontext } from "../hooks/useWorkoutsContext";

import { useAuthcontext } from "../hooks/useAuthContext";

const Home = () => {
  console.log("ApiUrl", ApiUrl);
  // const [workouts, SetWorkout] = useState("");

  const { workouts, dispatch } = useWorkoutcontext();

  const { user } = useAuthcontext(); // get Value from authtication

  console.log("home page", user);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(ApiUrl + "workout/all-view", {
        Method: "get",
        headers: {
          "content-type": "Application/json",
          authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();

      // console.log(response.ok);

      if (response.ok === true) {
        // SetWorkout(data.data);

        dispatch({ type: "SET_WORKOUTS", payload: data.data });

        // console.log("respopnse", response);
      }
    };

    if (user) {
      fetchApi();
    }
  }, [dispatch, user]);

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
