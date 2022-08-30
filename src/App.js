import "./App.css";
import React from "react";
import NavBar from "./component/navBar";
import LoginForm from "./component/loginForm";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./component/not-found";
import Home from "./component/home";
import AboutMe from "./component/aboutMe";
import SignIn from "./component/signIn";
import DashBoard from "./component/dashboard";
import EditForm from "./component/common/editForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="flex relative svg-background">
      <NavBar />
      <div className="container w-11/12 h-screen">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/sign-in" component={SignIn} />
          <Route path="/dashboard/:username/:title" component={EditForm} />
          <Route path="/dashboard/:username" component={DashBoard} />
          <Route path="/about-me" component={AboutMe} />
          <Route path="/home" component={Home} />
          <Route path="/error404" component={NotFound} />
          <Redirect exact path="/" to="/home" />
          <Redirect exact path="/dashboard" to="/login" />
          <Redirect to="/error404" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
