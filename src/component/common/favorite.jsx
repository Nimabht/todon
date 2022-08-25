import React, { Component } from "react";
import { HiStar, HiOutlineStar } from "react-icons/hi";
class FavoriteButton extends Component {
  renderIcon = () => {
    if (this.props.favorite)
      return (
        <HiStar className="text-[2.7rem] duration-100 hover:drop-shadow-favorite" />
      );
    return (
      <HiOutlineStar className="text-[2.4rem] duration-100 hover:drop-shadow-favorite" />
    );
  };
  render() {
    return (
      <button className="text-yellow-400" onClick={this.props.onClick}>
        {this.renderIcon()}
      </button>
    );
  }
}

export default FavoriteButton;
