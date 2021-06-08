import React from "react";

import { NavLink } from "react-router-dom";
const Activities = ({ activities, currentUser }) => {
  return (
    <>
      <h3>
        {currentUser ? (
          <NavLink to="NewActivity">
            <button>Add New Activity</button>
          </NavLink>
        ) : null}
      </h3>

      <h4>Id - Name - Description</h4>
      {activities.map((act) => (
        <div key={act.id}>
          <h5>
            {act.id} - {act.name} - {act.description}
          </h5>
        </div>
      ))}
    </>
  );
};

export default Activities;
