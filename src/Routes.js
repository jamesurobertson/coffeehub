import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Roast from "./pages/Roast";
import NewRoast from "./components/Roast/NewRoast";
import Header from "./components/Header/Header"
import Profile from './pages/Profile'
import Explore from './pages/Explore'

const Routes = () => {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/new" component={NewRoast} />
        <Route path="/r/:username/:roastName" component={Roast} />
        <Route path="/p/:username" component={Profile}/>
        <Route path="/explore/:searchParam/:searchType" component={Explore}/>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
