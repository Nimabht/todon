import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MdFactCheck } from "react-icons/md";
import { BiLogIn, BiShoppingBag, BiInfoCircle } from "react-icons/bi";
import "../App.css";
class NavBar extends Component {
  render() {
    return (
      <nav className="w-48 h-screen bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
        <div className="container space-y-12 flex flex-wrap flex-col justify-between items-center mx-auto">
          <NavLink
            className="hover-underline-animation mt-6 flex items-center"
            to="/"
          >
            <MdFactCheck className="MdFactCheck shake" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ToDoN
            </span>
          </NavLink>
          <NavLink
            className="hover-underline-animation mt-2 flex items-center"
            to="/login"
          >
            <BiLogIn className="MdFactCheck" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              login
            </span>
          </NavLink>
          <NavLink
            className="hover-underline-animation mt-2 flex items-center"
            to="/shop"
          >
            <BiShoppingBag className="MdFactCheck" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Shop
            </span>
          </NavLink>
          <NavLink
            className="hover-underline-animation mt-2 flex items-center"
            to="/about-me"
          >
            <BiInfoCircle className="MdFactCheck" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              About Me
            </span>
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
