import React, { Component } from "react";
import Input from "./input";
import axios from "axios";
import Joi from "joi-browser";
import TextArea from "./textArea";
import "../../App.css";
import { toast } from "react-toastify";
import { findHashtags } from "../../utilies/findHashtags";

class TaskForm extends Component {
  state = {
    data: {
      title: "",
      description: "",
      favorite: false,
      status: false,
      date: new Date().toString(),
      tags: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    description: Joi.string().required().label("Description"),
    favorite: Joi.any(),
    status: Joi.any(),
    date: Joi.any(),
    tags: Joi.any(),
  };

  doSubmit = async () => {
    const user = { ...this.props.user };
    const data = { ...this.state.data };
    const newTags = findHashtags(data.description);
    if (newTags) data.tags = [...newTags];
    if (
      user.tasks.find((t) => {
        return t.title === data.title;
      })
    ) {
      toast.info("Task already existing!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    user.tasks.unshift(data);
    axios.put(`http://localhost:3000/users/${user.id}`, user);
    const dData = {
      title: "",
      description: "",
      favorite: false,
      status: false,
      date: new Date().toString(),
      tags: "",
    };
    this.setState({ data: dData });
    toast.info("Task added!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    this.props.onPopup();
  };

  handleSubmit = (event) => {
    //prevent page refresh
    event.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.doSubmit();
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
  validateProperty = (input) => {
    const obj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
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
    return this.props.trigger ? (
      <div className="fixed flex w-full h-screen bg-[#464e55ba] font-semibold z-10">
        <div className="popup-background m-auto	mr-[23rem] self-center bg-purple-100 h-[60%] w-2/3 rounded-xl">
          <form
            onSubmit={this.handleSubmit}
            className="gap-y-5 flex flex-col ml-10 mt-9"
          >
            <Input
              labelcc="text-2xl"
              inputcc="border-2 border-gray-500	 p-2 rounded focus:outline-none focus:border-sky-500	focus:border-2 transition-all	"
              onChange={this.handleChange}
              value={this.props.position.title}
              name="title"
              label="Title"
              error={this.state.errors.title}
            />
            <TextArea
              onChange={this.handleChange}
              value={this.props.position.description}
              name="description"
              label="Description"
              maxLength="180"
            />
            <div className="flex justify-end	mt-10 mr-6">
              <button className="w-[4.5rem] p-2 rounded-3xl ml-4 bg-white text-sky-500	font-semibold	border-2 border-sky-500  hover:bg-sky-500 hover:text-white transition-all	">
                Apply
              </button>
              <button
                onClick={this.props.onPopup}
                className="w-[4.5rem] p-1 rounded-3xl ml-4 bg-white text-sky-500	font-semibold	border-2 border-sky-500 hover:bg-sky-500 hover:text-white transition-all	"
              >
                close
              </button>
            </div>
          </form>
        </div>
      </div>
    ) : (
      ""
    );
  }
}

export default TaskForm;
