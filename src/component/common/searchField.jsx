import React, { Component } from "react";
import { MdSearch } from "react-icons/md";
class SearchField extends Component {
  render() {
    return (
      <div className="flex h-6 text-slate-400 border-b border-slate-300 border-black">
        <MdSearch className="h-6 mr-1" />
        <input
          value={this.props.value}
          onChange={this.props.onChange}
          className="outline-0 	bg-transparent	"
          type="text"
          placeholder="Search"
        />
      </div>
    );
  }
}

export default SearchField;
