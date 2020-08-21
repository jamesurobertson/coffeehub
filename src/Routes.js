import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";

const Home = lazy(() => import('./pages/Home'))
const Roast = lazy(() => import('./pages/Roast'))
const NewRoast = lazy(() => import('./components/Roast/NewRoast'))
const Profile = lazy(() => import('./pages/Profile'))
const Explore = lazy(() => import('./pages/Explore'))

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
        <Suspense fallback={<div/>}>
          <Switch>
            <Route path="/new" component={NewRoast} />
            <Route path="/r/:username/:roastName" component={Roast} />
            <Route path="/p/:username" component={Profile} />
            <Route
              path="/explore/:searchParam/:searchType"
              component={Explore}
            />
            <Route exact path="/" component={Home} />
            <Route
              path="/*"
              render={() => {
                return <Redirect to="/" />;
              }}
            />
          </Switch>
        </Suspense>
        <Footer />
      </Main>
    </BrowserRouter>
  );
};

export default Routes;
