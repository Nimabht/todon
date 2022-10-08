import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./common/input";
import axios from "axios";
import { toast } from "react-toastify";
class SignIn extends Component {
  state = {
    data: { username: "", password: "", tasks: "", taskSlot: 10 },
    errors: {},
  };

  schema = {
    username: Joi.string().min(4).max(30).required().label("Username"),
    password: Joi.string().required().min(8).label("Password"),
    tasks: Joi.any(),
    taskSlot: Joi.number(),
  };
  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const option = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, option);
    if (!result.error) return null;
    const errors = {};
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
      console.log(errors);
      return errors;
    }
  };

  doSubmit = async () => {
    const newAcc = {
      ...this.state.data,
      tasks: [],
    };
    await axios.post("http://localhost:3000/users", newAcc);
    console.log("signin submitted");
    this.props.history.push("/login");
    toast.success("Sign in Successful 🤩", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  handleSubmit = (event) => {
    //prevent page refresh
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) {
      toast.error("Sign in Failed 😥", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    this.doSubmit();
  };

  handleChange = (event) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(event.currentTarget);
    if (errorMessage) errors[event.currentTarget.name] = errorMessage;
    else delete errors[event.currentTarget.name];
    const data = { ...this.state.data };
    data[event.currentTarget.name] = event.currentTarget.value;
    this.setState({ data, errors });
  };

  render() {
    return (
      <div
        style={{ height: "34rem" }}
        className="bg-slate-200 m-auto mt-36 p-10 gap-y-12 w-96 flex flex-col font-semibold rounded-3xl items-center"
      >
        <h1 className="text-5xl	">Welcome 😊</h1>
        <form
          className="flex flex-col items-center gap-y-5	"
          onSubmit={this.handleSubmit}
        >
          <Input
            onChange={this.handleChange}
            value={this.state.data.username}
            name="username"
            label="Username"
            error={this.state.errors.username}
          />
          <Input
            onChange={this.handleChange}
            value={this.state.data.password}
            error={this.state.errors.password}
            name="password"
            label="Password"
          />
          <button className="mt-3 bg-cyan-400 rounded-3xl hover:bg-cyan-500 hover:shadow-xl duration-300 w-32 p-3">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default SignIn;
