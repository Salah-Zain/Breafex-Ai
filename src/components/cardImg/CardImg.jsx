import React from "react";

const CardImg = ({ dataImg, dataText }) => {
  return (
    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full">
      {dataImg ? (
        <img
          src={dataImg}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <p className="flex items-center justify-center w-full h-full bg-gray-300 text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 rounded-full">
          {dataText}
        </p>
      )}
    </div>
  );
};

export default CardImg;