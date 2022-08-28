import React from "react";
import { AiOutlineEdit } from "react-icons/ai";

const EditButton = (props) => {
  return (
    <button
      onClick={props.onClick}
      className="h-fit text-sky-500 text-4xl hover:drop-shadow-edit"
    >
      <AiOutlineEdit />
    </button>
  );
};

export default EditButton;
