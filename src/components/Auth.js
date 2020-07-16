import React, { useState } from "react";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

const Auth = () => {
  const [auth, setAuth] = useState("LOGIN");

  const login = () => setAuth("LOGIN");
  const signup = () => setAuth("SIGNUP");

  if (auth === "LOGIN") {
    return <Login signup={signup} />;
  }

  if (auth === "SIGNUP") {
    return <Signup login={login} />;
  }
};

export default Auth;
