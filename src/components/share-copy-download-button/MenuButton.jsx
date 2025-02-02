import React from "react";

const MenuButton = ({ img1, img1tText, img2, img2Text }) => {
  return (
    <div className="flex items-center gap-4 sm:gap-8 pt-4 ">
      <div className="flex items-center px-[8px] sm:px-[10px] py-[6px] sm:py-[6px] border-2 rounded-lg border-[#5BF5FF]">
        <img src={img1} alt="" className="px-2" />
        <p className="px-2 font-inter text-[10px] sm:text-[12px] text-[#5BF5FF]">
          {img1tText}
        </p>
      </div>
      <div className="flex items-center px-[8px] sm:px-[10px] py-[6px] sm:py-[6px] border-2 border-[#5BF5FF] rounded-lg">
        <img src={img2} alt="" className="px-2" />
        <p className="px-2 font-inter text-[10px] sm:text-[12px] text-[#5BF5FF]">
          {img2Text}
        </p>
      </div>
    </div>
  );
};

export default MenuButton;
