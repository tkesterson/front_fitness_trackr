import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";

const Activities = ({ activities, currentUser }) => {
  const history = useHistory();
  function newActivity() {}

  return (
    <>
      {currentUser ? <button></button> : null}
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
