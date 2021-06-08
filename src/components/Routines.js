import React, { useEffect, useState } from "react";
import { fetchData } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(async () => {
    const data = await fetchData("Routines");

    setRoutines(data);
  }, []);
  console.log("R:", routines);

  return (
    <>
      <h1>All Public Routines.</h1>
      {routines.map((rou) => (
        <div key={rou.id}>
          <h2>
            Name: {rou.name} | Goal: {rou.goal} | Creator: {rou.creatorName}
          </h2>
          <>
            <h3 style={{ textIndent: 20 }}>Included Activities:</h3>
            {rou.activities.map((act) => (
              <h4 key={act.id} style={{ textIndent: 40 }}>
                Name: {act.name} | Duration: {act.duration} | Count: {act.count}
              </h4>
            ))}
          </>
        </div>
      ))}
    </>
  );
};

export default Routines;
