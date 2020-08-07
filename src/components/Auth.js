import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Landing from "../pages/Landing";

const Auth = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route exact path="/" component={Landing} />
      <Route
        path="/*"
        render={() => {
          return <Redirect to="/" />;
        }}
      />
    </Switch>
  </BrowserRouter>
);

export default Auth;
