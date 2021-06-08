import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Header,
  Routines,
  Activities,
  MyRoutines,
  SignIn,
  SignUp,
  Home,
  NewRoutine,
  Deleted,
  Added,
  UpdateRoutine,
  NewActivity,
  UpdateActivity,
} from "./components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { getMe } from "./api/getMe";
import { fetchData } from "./api";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [currentUser, setCurrentUser] = useState(null);
  const [activities, setActivities] = useState([]);
  const [routine, setRoutine] = useState({});
  const [activityToUpdate, setActivityToUpdate] = useState({});

  useEffect(async () => {
    if (token) {
      await getMe(token).then((response) => {
        setCurrentUser(response.username);
      });
    }
  }, []);
  useEffect(async () => {
    const data = await fetchData("Activities");
    setActivities(data);
  }, []);

  return (
    <Router>
      <div className="app">
        <Header {...{ setCurrentUser, currentUser }} />
        <Switch>
          <Route path="/Home">
            <Home {...{ currentUser }} />
          </Route>
          <Route path="/Routines">
            <Routines />
          </Route>
          <Route path="/Activities">
            <Activities {...{ currentUser, activities }} />
          </Route>
          <Route path="/MyRoutines">
            {currentUser ? (
              <MyRoutines
                {...{
                  setActivityToUpdate,
                  setRoutine,
                  currentUser,
                  token,
                  activities,
                }}
              />
            ) : null}
          </Route>
          <Route path="/SignIn">
            <SignIn {...{ setToken, setCurrentUser }} />
          </Route>
          <Route path="/SignUp">
            <SignUp {...{ setToken, setCurrentUser }} />
          </Route>
          <Route path="/NewRoutine">
            <NewRoutine {...{ token }} />
          </Route>
          <Route path="/NewActivity">
            <NewActivity {...{ token }} />
          </Route>
          <Route path="/Deleted">
            <Deleted />
          </Route>
          <Route path="/Added">
            <Added />
          </Route>
          <Route path="/UpdateRoutine">
            <UpdateRoutine {...{ routine, token }} />
          </Route>
          <Route path="/UpdateActivity">
            <UpdateActivity {...{ activityToUpdate, token }} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
