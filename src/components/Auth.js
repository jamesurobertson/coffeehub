import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Landing from "../pages/Landing";

const Auth = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/" component={Landing} />
        <Route path="/*" component={Landing} />

      </Switch>
    </BrowserRouter>
  );
};

export default Auth;
