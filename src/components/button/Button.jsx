import React from "react";

const Button = ({ buttonText, buttonIcon }) => {
  return (
    <div>
      <button className="text-xs text-gray-700 bg-white px-2 py-1 rounded flex justify-between items-center">
        <img src={buttonIcon} alt="" className="pr-1" />
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
