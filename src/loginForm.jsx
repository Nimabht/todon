import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./component/common/input";
import axios from "axios";
class LoginForm extends Component {
  state = { data: { username: "", password: "" }, errors: {} };

  schema = {
    username: Joi.string().min(4).max(30).required().label("Username"),
    password: Joi.string().required().min(8).label("Password"),
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
    const newAcc = { ...this.state.data };
    await axios.post("http://localhost:3000/users", newAcc);
    console.log("submitted");
    this.props.history.push("/dashboard");
  };

  handleSubmit = (event) => {
    //prevent page refresh
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
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
        style={{ height: "30rem" }}
        className="bg-slate-200 m-auto mt-44 p-10 gap-y-9 w-96 flex flex-col font-semibold rounded-3xl items-center"
      >
        <h1 className="text-5xl	">Login Form</h1>
        <form
          className="flex flex-col items-center	"
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
          <button className="fixed bottom-40 mt-12 bg-cyan-400 rounded-3xl hover:bg-cyan-500 hover:shadow-xl duration-300 w-32 p-3">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
