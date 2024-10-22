import React from "react";
import "./Buttons.css"
const Buttons = ({ color, handleClick }) => {
  return (
    <div className="buttons">
      <button
        onClick={handleClick}
        style={{ backgroundColor: color, color: "white" }}
      >
        New Quote
      </button>
    </div>
  );
};

export default Buttons;
