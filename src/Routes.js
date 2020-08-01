import React from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Roast from "./pages/Roast";
import NewRoast from "./components/Roast/NewRoast";
import Header from "./components/Header/Header";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Footer from "./components/Footer";

const Main = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: calc(100vh - 54px);
`;
const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Switch>
          <Route path="/new" component={NewRoast} />
          <Route path="/r/:username/:roastName" component={Roast} />
          <Route path="/p/:username" component={Profile} />
          <Route path="/explore/:searchParam/:searchType" component={Explore} />
          <Route exact path="/" component={Home} />
          <Route path="/*" render={() => {
              return (
                  <Redirect to='/'/>
              )
          }} />
        </Switch>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

export default Routes;
