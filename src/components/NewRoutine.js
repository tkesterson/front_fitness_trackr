import React, { useState } from "react";
import { useHistory } from "react-router";

import { addRoutine } from "../api/MyRoutines";

const NewRoutine = ({ token }) => {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const history = useHistory();

  function clearInput() {
    setName("");
    setGoal("");
    setIsPublic(false);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await addRoutine(name, goal, isPublic, token);

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
    console.log(evt.target.checked);
    setIsPublic(evt.target.checked);
  };

  return (
    <>
      <h1>Create a New Routine.</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <br></br>
          <input type="text" value={name} onChange={nChange}></input>
          <br></br>
        </label>
        <br></br>
        <label>
          Goal: <br></br>
          <input type="text" value={goal} onChange={gChange}></input>
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
        <button type="submit">Create!</button>
      </form>
    </>
  );
};
export default NewRoutine;
