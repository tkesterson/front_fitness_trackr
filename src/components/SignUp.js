import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
const { register } = require("../api/auth");
const SignUp = ({ setToken, setCurrentUser }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const history = useHistory();
  function clearInput() {
    setPwInput("");
    setUsernameInput("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await register(usernameInput, pwInput);

    if (response.token) {
      localStorage.setItem("token", response.token);
      setToken(response.token);
      setCurrentUser(response.user.username);
      clearInput();
      history.push("/MyRoutines");
    } else {
      alert(response.message);
    }
  };

  const uChange = (evt) => {
    evt.preventDefault();
    setUsernameInput(evt.target.value);
  };
  const pChange = (evt) => {
    evt.preventDefault();
    setPwInput(evt.target.value);
  };
  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <br></br>
          <input type="text" value={usernameInput} onChange={uChange}></input>
          <br></br>
        </label>
        <label>
          Password: <br></br>
          <input type="text" value={pwInput} onChange={pChange}></input>
        </label>
        <br></br>
        <button type="submit">Sign Up</button>
      </form>
      <br></br>
      <NavLink to="/SignIn">Already Have An Account? Sign In.</NavLink>
    </>
  );
};

export default SignUp;
