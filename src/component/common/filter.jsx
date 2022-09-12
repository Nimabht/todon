import { IoFilterOutline } from "react-icons/io5";
import React, { Component } from "react";
class FilterButton extends Component {
  state = { flag: false };

  handleFlag = () => {
    const flag = !this.state.flag;
    this.setState({ flag });
  };

  render() {
    return (
      <div className="flex flex-row-reverse	 fixed ml-[65%] items-start		 gap-x-1">
        <ul
          className={
            this.state.flag
              ? " list-none	visivle mr-2 bg-white 	rounded pl-3 pr-3 py-2	shadow-2xl	shadow-zinc-500		duration-150 "
              : "list-none	hidden bg-white 	rounded pl-3 pr-3 py-2	shadow-2xl	shadow-zinc-500		duration-150 "
          }
        >
          {this.props.items.map((item) => (
            <li
              className={
                item === this.props.selectedTag
                  ? "cursor-pointer	text-lg	text-blue-600	 border-b	border-slate-300 mt-2	pb-2 w-[6rem] hover:border-cyan-400	duration-150"
                  : "cursor-pointer	 border-b	border-slate-300 mt-2	pb-2 w-[6rem] hover:border-cyan-400	duration-150"
              }
              onClick={() => this.props.onItemSelect(item)}
              key={item}
            >
              {item}
            </li>
          ))}
        </ul>
        <button
          className=" bg-sky-600 text-2xl text-white p-[6px] rounded-xl w-fit outline-0	hover:ring-2	duration-150	"
          onClick={this.handleFlag}
        >
          <IoFilterOutline />
        </button>
      </div>
    );
  }
}

export default FilterButton;
