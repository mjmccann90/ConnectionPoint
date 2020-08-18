import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import JobList from "../components/jobs/JobList"
import ApplicationList from "../components/application/ApplicationList"
import ConnectionPointList from "../components/connectionPoint/ConnectPointList"

export default function ApplicationViews() {
  const { isLoggedIn } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <JobList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/application" exact>
          {isLoggedIn ? <ApplicationList /> : <Redirect to="/login" />}
        </Route>
        <Route path="/compatibility" exact>
          {isLoggedIn ? <ConnectionPointList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/login">
          <Login />
        </Route>


        <Route path="/register">
          <Register />
        </Route>

      </Switch>
    </main>
  );
};