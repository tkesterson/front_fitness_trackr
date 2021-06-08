import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

import { updateRoutine } from "../api/MyRoutines";
const UpdateRoutine = ({ routine, token }) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setId(routine.id);
    setName(routine.name);
    setGoal(routine.goal);
    setIsPublic(routine.isPublic);
  }, []);
  function clearInput() {
    setName("");
    setGoal("");
    setIsPublic(false);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateRoutine(id, name, goal, isPublic, token);

    if (!response.error) {
      clearInput();
      history.push("/MyRoutines");
    } else {
      alert(response.message);
    }
  };
  const nChange = (evt) => {
    evt.preventDefault();
    setName(evt.target.value);
  };
  const gChange = (evt) => {
    evt.preventDefault();
    setGoal(evt.target.value);
  };
  const pChange = (evt) => {
    setIsPublic(evt.target.checked);
  };

  return (
    <>
      <h1>Update a Routine.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br></br>
          <input
            type="text"
            placeholder={routine.name}
            value={name}
            onChange={nChange}
          ></input>
          <br></br>
        </label>
        <br></br>
        <label>
          Goal: <br></br>
          <input
            type="text"
            placeholder={routine.goal}
            value={goal}
            onChange={gChange}
          ></input>
          <br></br>
        </label>
        <br></br>
        <label>
          Public Routine?<br></br>
          <br></br>
          <label>
            Public
            <input type="checkbox" value={isPublic} onChange={pChange}></input>
          </label>
          <br></br>
        </label>
        <br></br>
        <button type="submit">Update!</button>
      </form>
    </>
  );
};
export default UpdateRoutine;
