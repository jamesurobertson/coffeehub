import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { RoastProvider } from "./context/RoastContext";

ReactDOM.render(
    <UserProvider>
      <RoastProvider>
        <App />
      </RoastProvider>
    </UserProvider>,
  document.getElementById("root")
);
