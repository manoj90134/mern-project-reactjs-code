import React, { useState } from "react";

import "../App.css";

import { useWorkoutcontext } from "../hooks/useWorkoutsContext";

const Addworkout = () => {
  const { dispatch } = useWorkoutcontext(); // use context hooks

  const [title, SetTitle] = useState("");
  const [reps, SetReps] = useState("");
  const [load, SetLoad] = useState("");

  const [success, SetSuccess] = useState("");

  const [error, SetError] = useState("");

  let [Emptyfield, SetEmptyField] = useState([]);

  const Insertdata = async (e) => {
    e.preventDefault();

    const workout = { title, reps, load };
    let emptyfield = [];

    if (title === "") {
      emptyfield.push("title");
      // return SetError("title Field is required");
    }

    if (reps === "") {
      emptyfield.push("reps");
      // return SetError("reps Field is required");
    }

    if (load === "") {
      emptyfield.push("load");
      // return SetError("load Field is required");
    }

    if (emptyfield.length > 0) {
      // console.log("before", Emptyfield);

      // console.log("after", Emptyfield);

      SetEmptyField(emptyfield);

      console.log("dd", Emptyfield);

      return SetError("All Fields Are required");
    }

    const HitApi = await fetch("http://localhost:8000/workout/create", {
      method: "post",
      body: JSON.stringify(workout),
      headers: {
        "content-type": "Application/json",
      },
    });

    const getrespons = await HitApi.json();

    if (getrespons.success === true) {
      SetSuccess("Data insert succesfully");
      //   console.log("Data insert succesfully");

      SetError("");
      SetTitle("");
      SetReps("");
      SetLoad("");

      SetEmptyField([]);

      dispatch({ type: "CREATE_WORKOUT", payload: getrespons.data });
    }

    if (getrespons.success === false) {
      SetError(getrespons.message);
    }
  };

  return (
    <>
      {success}

      <div className="Submitform">
        <label className="lable1"> Add Form</label>
        <form action=" " method="post" className="form" onSubmit={Insertdata}>
          <label> Title </label>
          <input
            name="name"
            value={title}
            onChange={(e) => SetTitle(e.target.value)}
            className={Emptyfield.includes("title") ? "error" : ""}
          />
          <br />

          <label> Load </label>
          <input
            name="load"
            value={load}
            onChange={(e) => SetLoad(e.target.value)}
            className={Emptyfield.includes("load") ? "error" : ""}
          />
          <br />
          <label> Reps</label>
          <input
            type="text"
            value={reps}
            name=""
            onChange={(e) => SetReps(e.target.value)}
            className={Emptyfield.includes("reps") ? "error" : ""}
          />

          <br />

          <button> Submit</button>
        </form>
        <br />
        <br />
        {error && <span className="error-message"> {error} </span>}
      </div>
    </>
  );
};

export default Addworkout;
