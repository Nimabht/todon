import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const EditButton = (props) => {
  return (
    <Link
      to={`/dashboard/admin/${props.task.title}`}
      className="font-thin	h-fit text-sky-500 text-4xl hover:drop-shadow-edit mr-2"
    >
      <AiOutlineEdit />
    </Link>
  );
};

export default EditButton;
