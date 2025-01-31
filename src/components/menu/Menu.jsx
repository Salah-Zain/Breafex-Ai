import React from "react";
import {
  overview,
  overviewCal,
  overviewProfile,
  resource,
  rightButton,
  social,
  takeAwayIcon,
} from "../../assets";

const Menu = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] rounded-lg px-4">
        {/* Div 1: Header */}
        <div className="flex justify-between items-center py-4 w-full text-[#0A0D14] border-b border-[#FBF9F9]">
          <button className="w-[32px] h-[32px] ml-2 rounded-full bg-[#F6F8FA] flex justify-center items-center">
            <img src={rightButton} alt="" className="" />
          </button>
          <h1 className="px-3 font-inter font-medium text-[14px] sm:text-[16px] leading-5.5">
            Shaping the Financial Ecosystem of the Future
          </h1>
        </div>

        {/* Div 2: Profile */}
        <div className="flex items-center py-4 w-full text-[#0A0D14]">
          <div className="w-[48px] h-[48px] ml-2 rounded-full bg-[#F6F8FA] flex justify-center items-center">
            <img src={overviewProfile} alt="" className="rounded-full" />
          </div>
          <div className="flex flex-col">
            <h2 className="px-3 font-inter font-medium text-[#0A0D14] text-[12px] sm:text-[14px] leading-[16.94px]">
              Safari Sanders Dennyes
            </h2>
            <p className="px-3 font-inter text-[10px] sm:text-[12px] text-[#FFFFFF]">
              Ai Research Director, Tecnosys
            </p>
          </div>
        </div>

        {/* Div 3: Date and Time */}
        <div className="flex items-center pb-3">
          <div className="flex items-center border-r-2 border-black">
            <img src={overviewCal} alt="" className="p-2" />
            <p className="text-[10px] sm:text-[12px] font-inter pr-2">
              Jan 17, 2025
            </p>
          </div>
          <span className="border-1 border-r-black"></span>
          <div className="flex items-center">
            <img src={overviewCal} alt="" className="p-2" />
            <p className="text-[10px] sm:text-[12px] font-inter">45 min</p>
          </div>
        </div>
      </div>

      {/* Section 0-2: Links */}
      <div className="flex items-center justify-around pt-4">
        <div className="flex items-center flex-col justify-center py-4">
          <img
            src={overview}
            alt=""
            className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
          />
          <p className="text-[#FFFFFF] text-[12px] sm:text-[14px] border-b-2 border-[#5BF5FF] pb-2">
            Overview
          </p>
        </div>
        <div className="flex items-center flex-col justify-center">
          <img
            src={takeAwayIcon}
            alt=""
            className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
          />
          <p className="text-[#868C98] text-[12px] sm:text-[14px]">Take Away</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img
            src={social}
            alt=""
            className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
          />
          <p className="text-[#868C98] text-[12px] sm:text-[14px]">Social</p>
        </div>
        <div className="flex items-center justify-center flex-col">
          <img
            src={resource}
            alt=""
            className="w-[24px] h-[24px] sm:w-[36px] sm:h-[36px]"
          />
          <p className="text-[#868C98] text-[12px] sm:text-[14px]">Resources</p>
        </div>
      </div>
    </>
  );
};

export default Menu;
