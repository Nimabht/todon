import "./App.css";
import React from "react";
import NavBar from "./component/navBar";
import LoginForm from "./loginForm";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./component/not-found";
import Home from "./component/home";
function App() {
  return (
    <div className="flex relative svg-background">
      <NavBar />
      <div className="container w-11/12 h-screen">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={Home} />
          <Route path="/error404" component={NotFound} />
          <Redirect exact path="/" to="/home" />
          <Redirect to="/error404" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
