import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { UpdateActivityCountDuration } from "../api/Activities";
const UpdateActivity = ({ activityToUpdate, token }) => {
  const [raid, setRaid] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");

  const history = useHistory();

  useEffect(() => {
    setRaid(activityToUpdate.routineActivityId);
    setCount(activityToUpdate.count);
    setDuration(activityToUpdate.duration);
  }, []);
  function clearInput() {
    setCount("");
    setDuration("");
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await UpdateActivityCountDuration(
      raid,
      count,
      duration,
      token
    );

    if (!response.error) {
      clearInput();
      history.push("/MyRoutines");
    } else {
      alert(response.message);
    }
  };
  const cChange = (evt) => {
    evt.preventDefault();
    setCount(evt.target.value);
  };
  const dChange = (evt) => {
    evt.preventDefault();
    setDuration(evt.target.value);
  };

  return (
    <>
      <h1>{activityToUpdate.name} ↴</h1>
      <h3 style={{ textIndent: 40 }}>⫷{activityToUpdate.description}⫸</h3>

      <form onSubmit={handleSubmit}>
        <label>
          Count: <br></br>
          <input type="text" value={count} onChange={cChange}></input>
          <br></br>
        </label>
        <br></br>
        <label>
          Duration: <br></br>
          <input type="text" value={duration} onChange={dChange}></input>
          <br></br>
        </label>
        <br></br>

        <button type="submit">Update!</button>
      </form>
    </>
  );
};

export default UpdateActivity;
