import React from "react";

const CardImg = ({ dataImg, dataText }) => {
  return (
    <div className="w-6 h-6 rounded-full">
      <img src={dataImg} alt="" className="w-full" />
      <p className="text-sm px-4 text-gray-500">{dataText}</p>
    </div>
  );
};

export default CardImg;
