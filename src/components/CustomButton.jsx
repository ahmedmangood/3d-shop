import React from "react";

import state from "../store";

import { useSnapshot } from "valtio";

const CustomButton = ({ type, title, handleClick, customStyle }) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
      };
    }
  };

  return (
    <button
      type={type}
      className={`px-2 py-1.5 flex-1 rounded-md text-white ${customStyle}`}
      onClick={handleClick}
      style={generateStyle(type)}
    >
      {title}
    </button>
  );
};

export default CustomButton;
