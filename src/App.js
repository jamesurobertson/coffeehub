import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Landing from './pages/Landing'
import {AuthRoute, ProtectedRoute} from './Routes'
import Home from './pages/Home'

function App() {
    const user = 'user'
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <AuthRoute
            path="/landing"
            component={Landing}
            currentUserId={user}
          />
          <ProtectedRoute
            path="/"
            component={Home}
            currentUserId={user}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
