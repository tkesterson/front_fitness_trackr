import React, { Fragment, useEffect, useState } from "react";
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

  const history = useHistory();

  useEffect(async () => {
    const data = await fetchDataToken(`users/${currentUser}/routines`, token);

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
      const response = await addActivity(rId, activity, duration, count);
      const act = activities.find((act) => act.id === response.activityId);
      const addedActivity = { ...act };
      addedActivity.duration = response.duration;
      addedActivity.count = response.count;
      addedActivity.routineId = response.routineId;
      addedActivity.routineActivityId = response.id;

      const newMyRout = myRoutines.map((rout) => {
        if (rout.id === addedActivity.routineId) {
          rout.activities.push(addedActivity);
        }
        return rout;
      });
      setMyRoutines(newMyRout);
    };
  }
  async function destroyAct(raId, aName, token) {
    const d = confirm(`Delete ${aName}?`);
    if (d) {
      const response = await deleteActivityFromRoutine(raId, token);
      const act = activities.find((act) => act.id === response.activityId);
      const deletedActivity = { ...act };

      deletedActivity.duration = response.duration;
      deletedActivity.count = response.count;
      deletedActivity.routineId = response.routineId;
      deletedActivity.routineActivityId = response.id;

      const newMyRout = myRoutines.map((rout) => {
        if (rout.id === deletedActivity.routineId) {
          rout.activities = rout.activities.filter(
            (act) => act.id !== deletedActivity.id
          );
        }

        return rout;
      });

      setMyRoutines(newMyRout);
    }
  }
  function destroyRoutine(rId, rName, token) {
    const d = confirm(`Delete ${rName}?`);
    if (d) {
      deleteRoutine(rId, token);
      history.push("/Deleted");
    }
  }

  function toUpdateRoutineMaker(rId) {
    return function toUpdateRoutine(evt) {
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
      <h2>My Routines</h2>
      <NavLink to="NewRoutine">
        <button>Add New Routine</button>
      </NavLink>

      {myRoutines.map((rou) => (
        <div key={rou.id}>
          <h3>
            Name: {rou.name} | Goal: {rou.goal} | Creator: {rou.creatorName}
            <button type="button" onClick={toUpdateRoutineMaker(rou)}>
              Update {rou.name}
            </button>
          </h3>

          <h4 style={{ textIndent: 20 }}>Included Activities:</h4>
          {rou.activities.map((act) => (
            <Fragment key={act.id}>
              <h4 style={{ textIndent: 40 }}>
                Name: {act.name} | Duration: {act.duration} | Count: {act.count}
                <button onClick={updateCountDurationMaker(act)}>Update</button>
                <button
                  onClick={() =>
                    destroyAct(act.routineActivityId, act.name, token)
                  }
                >
                  Delete
                </button>
              </h4>
              <h5 key={act.name} style={{ textIndent: 60 }}>
                ⫷{act.description}⫸
              </h5>
            </Fragment>
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
              Duration:
              <input
                type="number"
                style={{ width: "50px" }}
                onChange={durChange}
              ></input>
            </label>
            <label>
              Count:
              <input
                type="number"
                style={{ width: "50px" }}
                onChange={couChange}
              ></input>
            </label>
            <button>Add Activity to {rou.name}</button>
          </form>

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
