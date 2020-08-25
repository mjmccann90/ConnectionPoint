import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { UserProfileContext } from "../providers/UserProfileProvider";
import Login from "./Login";
import Register from "./Register";
import JobList from "../components/jobs/JobList"
import ManagerViewList from "../components/managerViews/ManagerViewList"
import ApplicationList from "../components/application/ApplicationList"
import ConnectionPointList from "../components/connectionPoint/ConnectPointList"

export default function ApplicationViews() {
  const { isLoggedIn, isAdmin } = useContext(UserProfileContext);

  return (
    <main>
      <Switch>
        <Route path="/" exact>
          {isLoggedIn ? <JobList /> : <Redirect to="/login" />}
        </Route>

        {/* <Route path="/" exact>
          {(isLoggedIn && isAdmin) && <ManagerViewList />}
        </Route> */}

        <Route path="/application" exact>
          {isLoggedIn ? <ApplicationList /> : <Redirect to="/login" />}
        </Route>

        <Route path="/managerView" exact>git status
        
          {isLoggedIn && isAdmin ? <ManagerViewList /> : <Redirect to="/login" />}
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