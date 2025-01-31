import React from "react";
import Menu from "../../components/menu/Menu";
import {
  takeAwaybluebookmarkfill,
  takeAwayblueheart,
  takeAwayblueshare,
  takeawaybluestar,
} from "../../assets";

const TakeAway = () => {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <Menu />

      {/* Content Section */}
      <div className="">
        <div className="flex items-center justify-between gap-3 pb-6">
          <div className="flex items-center gap-2">
            <img src={takeawaybluestar} alt="" />
            <h2 className="font-inter font-medium text-[14px] sm:text-[16px] text-[#FFFFFF]">
              Ai Generated Insights
            </h2>
          </div>
          <div className="flex items-center gap-2 border border-[#5BF5FF] px-2 py-2 rounded-lg">
            <img src={takeawaybluestar} alt="" />
            <button>Regenerate</button>
          </div>
        </div>
        <div className="bg-[#222534] p-4 rounded-lg">
          <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
            🤙Cross-Border Payment Innovations Creating Key Challenges
          </h4>
          <p className="text-sm sm:text-base lg:text-lg text-[#CDD0D5]">
            EventHex stands out by tackling two key challenges that traditional
            event management often struggles with: creating personalized
            experiences and ensuring attendee retention. This platform is built:
          </p>
          <div className="flex items-center flex-wrap mt-4 gap-3">
            <span className="text-sm sm:text-base lg:text-lg px-2 py-1 rounded-lg bg-[#222534]">
              #MGen
            </span>
            <span className="text-sm sm:text-base lg:text-lg px-2 py-1 rounded-lg bg-[#222534]">
              #Prediction
            </span>
            <span className="text-sm sm:text-base lg:text-lg px-2 py-1 rounded-lg bg-[#222534]">
              #Strategy
            </span>
          </div>

          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center gap-4">
              <img src={takeAwayblueheart} alt="" />
              <p>33</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={takeAwayblueshare} alt="" />
              <img src={takeAwaybluebookmarkfill} alt="" />
            </div>
          </div>
        </div>

        <div className="bg-[#282C3A] p-4 rounded-lg mt-6">
          <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
            🤙Cross-Border Payment Innovations Creating Key Challenges
          </h4>
          <p className="text-sm sm:text-base lg:text-lg text-[#CDD0D5]">
            EventHex stands out by tackling two key challenges that traditional
            event management often struggles with: creating personalized
            experiences and ensuring attendee retention. This platform is built
          </p>
          <div className="flex items-center flex-wrap mt-4 gap-3">
            <span className="text-sm sm:text-base lg:text-lg px-2 py-1 rounded-lg bg-[#222534]">
              #MGen
            </span>
            <span className="text-sm sm:text-base lg:text-lg px-2 py-1 rounded-lg bg-[#222534]">
              #Prediction
            </span>
            <span className="text-sm sm:text-base lg:text-lg px-2 py-1 rounded-lg bg-[#222534]">
              #Strategy
            </span>
          </div>
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center gap-4">
              <img src={takeAwayblueheart} alt="" />
              <p>33</p>
            </div>
            <div className="flex items-center gap-4">
              <img src={takeAwayblueshare} alt="" />
              <img src={takeAwaybluebookmarkfill} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TakeAway;
