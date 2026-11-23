import React, { useState } from "react";

import "../App.css";

import { ApiUrl } from "../Env";

import { useWorkoutcontext } from "../hooks/useWorkoutsContext";

import { useAuthcontext } from "../hooks/useAuthContext";

const Addworkout = () => {
  const { dispatch } = useWorkoutcontext(); // use context hooks

  const { user } = useAuthcontext(); // get Value from authtication

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

    const HitApi = await fetch(ApiUrl + "workout/create", {
      method: "post",
      body: JSON.stringify(workout),
      headers: {
        "content-type": "Application/json",
        authorization: "bearear " + user.token ?? " ",
      },
    });

    const getrespons = await HitApi.json();

    if (HitApi.ok === true) {
      SetSuccess("Data insert succesfully");
      //   console.log("Data insert succesfully");

      SetError("");
      SetTitle("");
      SetReps("");
      SetLoad("");

      SetEmptyField([]);

      dispatch({ type: "CREATE_WORKOUT", payload: getrespons.data });
    }

    if (HitApi.ok === false) {
      SetError(getrespons.message);

      console.log("errr", getrespons.message);
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
