import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserPage from "./components/UserPage/UserPage";
export default function() {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={UserPage} path="/userpage" />
    </Switch>
  );
}
