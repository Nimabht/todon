import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./component/common/input";
class LoginForm extends Component {
  state = { data: { username: "", password: "" }, errors: {} };
  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    //calling db and posting new user :)
    console.log("submitted");
  };

  render() {
    return (
      <div className="bg-slate-200 m-auto mt-44 p-10 gap-y-9 w-96 flex flex-col font-semibold rounded-3xl h-3/5	 items-center">
        <h1 className="text-5xl	">Login Form</h1>
        <Input name="username" type="text" label="Username" />
        <Input name="password" type="password" label="Password" />
        <button className="mt-8 bg-cyan-400 rounded-3xl hover:bg-cyan-500 hover:shadow-xl duration-300 w-32 p-3">
          Login
        </button>
      </div>
    );
  }
}

export default LoginForm;
