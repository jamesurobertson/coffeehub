import React from "react";
import {BrowserRouter, Switch} from 'react-router-dom'
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";
import Landing from './pages/Landing'
import {AuthRoute, ProtectedRoute} from './Routes'
import Home from './pages/Home'
import NewRoast from './components/NewRoast'

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
            exact path="/"
            component={Home}
            currentUserId={user}
          />
          <ProtectedRoute
            path="/new"
            component={NewRoast}
            currentUserId={user}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
