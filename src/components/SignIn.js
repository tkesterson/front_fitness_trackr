import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
const { signIn } = require("../api/auth");
const SignIn = ({ setToken, setCurrentUser }) => {
  const [usernameInput, setUsernameInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const history = useHistory();
  function clearInput() {
    setPwInput("");
    setUsernameInput("");
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await signIn(usernameInput, pwInput);

    if (response.token) {
      localStorage.setItem("token", response.token);
      setToken(response.token);
      setCurrentUser(response.user.username);
      clearInput();
      history.push("/MyRoutines");
    } else {
      alert(response.message);
      clearInput();
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
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username: <br></br>
          <input type="text" value={usernameInput} onChange={uChange}></input>
          <br></br>
        </label>
        <label>
          Password: <br></br>
          <input type="password" value={pwInput} onChange={pChange}></input>
        </label>
        <br></br>
        <button type="submit">Sign In</button>
      </form>
      <br></br>
      <NavLink to="/SignUp">Need an Account? Sign Up!</NavLink>
    </>
  );
};

export default SignIn;
