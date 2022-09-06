import React, { Component } from "react";
import Homepage from "../media/homepage.png";
import { Link } from "react-router-dom";
class Home extends Component {
  state = {};
  render() {
    return (
      <div className=" justify-items-center	items-center	h-screen w-[100%] homepage">
        <div className="flex flex-col pl-[6rem] gap-y-8 pt-[7rem]">
          <h1 className="text-zinc-800 text-6xl font-extrabold">
            Why should i use TODON?
          </h1>
          <p className="text-lg	text-sky-900	">
            The benefits of using a daily to-do list range from higher
            productivity to better mental health. It might also have a major
            impact on your personal life, as you can be more productive at work
            and enjoy your personal time without stress.
          </p>
          <Link to="/sign-in" className="animated-button7 w-[15rem]">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Get started
          </Link>
        </div>
        <img className="row-span-2 p-[4rem]" src={Homepage} alt="" />
        <div>
          <ul className="text-xl">
            <li>
              <span className="pr-1" />
              Increases productivity.
            </li>
            <li>
              <span className="pr-1" />
              Provides motivation.
            </li>
            <li>
              <span className="pr-1" />
              Improves memory.
            </li>
            <li>
              <span className="pr-1" />
              Reduces stress.
            </li>
            <li>
              <span className="pr-1" />
              Allows for more personal time.
            </li>
            <li>
              <span className="pr-1" />
              And more...
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
