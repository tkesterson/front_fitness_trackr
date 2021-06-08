import React from "react";

import { NavLink } from "react-router-dom";
const Activities = ({ activities, currentUser }) => {
  return (
    <>
      <h1>
        {currentUser ? (
          <NavLink to="NewActivity">
            <button>Add New Activity</button>
          </NavLink>
        ) : null}
      </h1>

      <h2>Id - Name - Description</h2>
      {activities.map((act) => (
        <div key={act.id}>
          <h2>
            {act.id} - {act.name} - {act.description}
          </h2>
        </div>
      ))}
    </>
  );
};

export default Activities;
