import React, {useEffect, useState } from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Landing from "../pages/Landing";

const Auth = () => {
  const [auth, setAuth] = useState("LANDING");

  const login = () => setAuth("LOGIN");
  const signup = () => setAuth("SIGNUP");
  const landing = () => setAuth("LANDING");

  if (auth === "LANDING") {
    return <Landing signup={signup} login={login} />;
  }

  if (auth === "LOGIN") {
    return <Login signup={signup} landing={landing} />;
  }

  if (auth === "SIGNUP") {
    return <Signup login={login} landing={landing} />;
  }
};

export default Auth;
