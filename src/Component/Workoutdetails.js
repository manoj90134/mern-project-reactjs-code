import React from "react";

import "../App.css";

import { ApiUrl } from "../Env";

import { useWorkoutcontext } from "../hooks/useWorkoutsContext";

const Workoutdetails = (Workoutdetails) => {
  const { dispatch } = useWorkoutcontext();

  const OndeleteSubmit = async () => {
    const deleteData = await fetch(
      ApiUrl + "workout/delete-view/" + Workoutdetails.Workoutdetails._id,
      {
        method: "delete",
      },
    );

    console.log(deleteData);

    const response = await deleteData.json();

    if (deleteData.ok === true) {
      dispatch({ type: "DELETE_WORKOUT", payload: response.data });
      // console.log(response);
    }
  };

  return (
    <div className="outer">
      <div className="workout-details">
        <h4>
          <b>_id: </b> {Workoutdetails.Workoutdetails._id}
          <br />
          <b>Title: </b> {Workoutdetails.Workoutdetails.title}
        </h4>
        <p>
          <b>Strong In Load kg : </b> {Workoutdetails.Workoutdetails.load}
        </p>
        <p>
          <b>Strong In Reps : </b> {Workoutdetails.Workoutdetails.reps}
        </p>
        <p>
          <b>created at: </b> {Workoutdetails.Workoutdetails.createdAt}
        </p>

        <button onClick={OndeleteSubmit}>Delete</button>
      </div>
    </div>
  );
};

export default Workoutdetails;
