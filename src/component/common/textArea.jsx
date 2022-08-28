import React from "react";

const TextArea = (props) => {
  return (
    <div className="flex flex-col gap-y-4">
      <label className="text-2xl" htmlFor={props.name}>
        {props.label}:
      </label>
      <textarea
        className="resize-none outline-0 w-[50rem] rounded border-2 border-gray-500	 p-2 focus:outline-none focus:border-sky-500 focus:border-2 transition-all"
        placeholder={props.label}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
        id={props.name}
        maxLength={props.maxLength}
        cols="40"
        rows="4"
      ></textarea>
    </div>
  );
};

export default TextArea;
