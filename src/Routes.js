import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Roast from "./pages/Roast";
import NewRoast from "./components/Roast/NewRoast";
import Header from "./components/Header"
import Profile from './pages/Profile'

const Routes = () => {

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/new" component={NewRoast} />
        <Route path="/r/:username/:roastName" component={Roast} />
        <Route path="/p/:username" component={Profile}/>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
