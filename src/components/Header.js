import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { clearCurrentUser } from "../api/auth";

const Header = ({ setCurrentUser, currentUser }) => {
  const handleUserLogout = (event) => {
    clearCurrentUser();
    setCurrentUser(null);
  };

  return (
    <header>
      <h1>Welcome to Fitness Trackr</h1>
      <NavLink to="/Home">Home</NavLink>
      <br></br>
      {currentUser ? (
        <>
          <NavLink to="/MyRoutines">My Routines</NavLink>
          <br></br>
        </>
      ) : null}
      <NavLink to="/Routines">Routines</NavLink>
      <br></br>
      <NavLink to="/Activities">Activities</NavLink>
      <br></br>
      {currentUser ? (
        <>
          <NavLink to="/Home" onClick={handleUserLogout}>
            Log Out, {currentUser}
          </NavLink>
        </>
      ) : (
        <>
          <NavLink to="/SignIn">Login/Register</NavLink>
          <br></br>
        </>
      )}
    </header>
  );
};

export default Header;
