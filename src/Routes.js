import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./components/Header";

export const ProtectedRoute = ({
  component: Component,
  path,
  currentUserId,
  exact,
}) => {
  return (
    <>
      <Header />
      <Route
        path={path}
        exact={exact}
        render={(props) =>
          currentUserId ? <Component {...props} /> : <Redirect to="/landing" />
        }
      />
    </>
  );
};

export const AuthRoute = ({
  component: Component,
  path,
  currentUserId,
  exact,
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) =>
        currentUserId ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};
