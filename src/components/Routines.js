import React, { Fragment, useEffect, useState } from "react";
import { fetchData } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(async () => {
    const data = await fetchData("Routines");

    setRoutines(data);
  }, []);

  return (
    <>
      <h2>All Public Routines.</h2>
      {routines.map((rou) => (
        <div key={rou.id}>
          <h3>
            Name: {rou.name} | Goal: {rou.goal} | Creator: {rou.creatorName}
          </h3>
          <>
            <h4 style={{ textIndent: 20 }}>Included Activities:</h4>
            {rou.activities.map((act) => (
              <Fragment key={act.id}>
                <h5 style={{ textIndent: 40 }}>
                  Name: {act.name} | Duration: {act.duration} | Count:{" "}
                  {act.count}
                </h5>
                {act.description ? (
                  <h6 key={act.name} style={{ textIndent: 60 }}>
                    ⫷{act.description}⫸
                  </h6>
                ) : null}
              </Fragment>
            ))}
          </>
        </div>
      ))}
    </>
  );
};

export default Routines;
