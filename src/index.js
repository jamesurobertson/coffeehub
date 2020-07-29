import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { UserProvider } from "./context/UserContext";
import { RoastProvider } from "./context/RoastContext";
import { AppContainer } from "react-hot-loader";

const render = () => {
  ReactDOM.render(
    <UserProvider>
      <RoastProvider>
        <AppContainer>
          <App />
        </AppContainer>
      </RoastProvider>
    </UserProvider>,
    document.getElementById("root")
  );
};

render();

if (module.hot) {
  module.hot.accept("./App", () => {
    render();
  });
}
