import React, { useEffect, useState } from "react";
import { fetchDataToken } from "../api";
import { NavLink, useHistory } from "react-router-dom";
import { addActivity, deleteActivityFromRoutine } from "../api/Activities";
import { deleteRoutine } from "../api/MyRoutines";
const MyRoutines = ({
  setActivityToUpdate,
  setRoutine,
  currentUser,
  token,
  activities,
}) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [duration, setDuration] = useState("");
  const [count, setCount] = useState("");
  const [activity, setActivity] = useState("");
  console.log(myRoutines);
  const history = useHistory();
  // console.log("currentUser:", currentUser);

  useEffect(async () => {
    const data = await fetchDataToken(`users/${currentUser}/routines`, token);
    console.log("data:", data);
    if (data) {
      setMyRoutines(data);
    }
  }, []);
  function durChange(evt) {
    setDuration(evt.target.value);
  }
  function couChange(evt) {
    setCount(evt.target.value);
  }
  function actChange(evt) {
    setActivity(evt.target.value);
  }

  function addActivityToRoutineMaker(rId) {
    return async function addActivityToRoutine(evt) {
      evt.preventDefault();
      const purple = await addActivity(rId, activity, duration, count);
      console.log(purple);
      history.push("/Added");
    };
  }
  function destroyRoutine(rId, rName, token) {
    const d = confirm(`Delete ${rName}?`);
    if (d) {
      deleteRoutine(rId, token);
      history.push("/Deleted");
    }
  }
  function destroyAct(raId, aName, token) {
    const d = confirm(`Delete ${aName}?`);
    if (d) {
      deleteActivityFromRoutine(raId, token);
      history.push("/Deleted");
    }
  }
  function toUpdateRoutineMaker(rId) {
    return function toUpdateRoutine(evt) {
      console.log(rId);
      evt.preventDefault();
      setRoutine(rId);
      history.push("/UpdateRoutine");
    };
  }
  function updateCountDurationMaker(act) {
    return function updateCountDuration(evt) {
      evt.preventDefault();
      setActivityToUpdate(act);
      history.push("/UpdateActivity");
    };
  }
  return (
    <>
      <h1>My Routines</h1>
      <NavLink to="NewRoutine">
        <button>Add New Routine</button>
      </NavLink>

      {myRoutines.map((rou) => (
        <div key={rou.id}>
          <h2>
            Name: {rou.name} | Goal: {rou.goal} | Creator: {rou.creatorName}
            <button type="button" onClick={toUpdateRoutineMaker(rou)}>
              Update {rou.name}
            </button>
          </h2>

          <h3 style={{ textIndent: 20 }}>Included Activities:</h3>
          {rou.activities.map((act) => (
            <>
              <h4 key={act.id} style={{ textIndent: 40 }}>
                Name: {act.name} | Duration: {act.duration} | Count: {act.count}
                <button onClick={updateCountDurationMaker(act)}>Update</button>
                <button onClick={() => destroyAct(act.id, act.name, token)}>
                  Delete
                </button>
                <br></br>
                <h5 style={{ textIndent: 60 }}>⫷{act.description}⫸</h5>
              </h4>
            </>
          ))}
          <form onSubmit={addActivityToRoutineMaker(rou.id)}>
            <label>
              Activity to Add:
              <select
                style={{ width: "130px" }}
                onChange={actChange}
                defaultValue="none"
              >
                <option value="none" disabled hidden>
                  Select an Option
                </option>
                {activities.map((act) => (
                  <option key={act.id} value={act.id}>
                    {act.name} - {act.description}
                  </option>
                ))}
              </select>
            </label>

            <label>
              Duration
              <input
                type="number"
                style={{ width: "50px" }}
                onChange={durChange}
              ></input>
            </label>
            <label>
              Count
              <input
                type="number"
                style={{ width: "50px" }}
                onChange={couChange}
              ></input>
            </label>
            <button>Add Activity to {rou.name}</button>
          </form>

          <br></br>
          <button
            type="button"
            onClick={() => destroyRoutine(rou.id, rou.name, token)}
          >
            Delete Routine
          </button>
        </div>
      ))}
    </>
  );
};

export default MyRoutines;
