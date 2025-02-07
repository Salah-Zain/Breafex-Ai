import React from "react";
import Menu from "../../components/menu/Menu";
import {
  linkedin,
  linkedinblue,
  overviewList,
  takeAway,
  takeAwaybluebookmarkfill,
  takeAwayblueheart,
  takeAwayblueshare,
  takeawaybluestar,
  takeawaydetail,
  takeAwayIcon,
  takewaycard,
  takewaypin,
  twitter,
  twitterblack,
} from "../../assets";
import { Link } from "react-router";

const OverviewTakeAway = () => {
  return (
    <div className="bg-[#10131A] text-white p-4 sm:p-6 lg:p-8">
      <Menu />

      {/* Header Section */}

      {/* Header Section */}

      <div className="flex items-center justify-between pb-6">
        <div className="flex items-center gap-1">
          <img
            src={takewaypin}
            alt="overviewList"
            className="w-5 h-5 sm:w-8 sm:h-8"
          />
          <h2 className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF]">
            Take Away
          </h2>
        </div>
        <div className="flex justify-center items-center w-38 bg-[#282C3A]">
          {/* Twitter Link */}
          <Link to="/takeaway">
            <div className="flex items-center justify-between border-0  bg-[#5BF5FF] text-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={takewaycard}
                alt="Twitter"
                className="w-[13.5px] h-[15px] mr-2"
              />
              <button className="text-[12px] sm:text-[14px]">Card</button>
            </div>
          </Link>
          {/* LinkedIn Link */}
          <Link to="">
            <div className="flex items-center border-0   text-[#5BF5FF]  bg-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={takeawaydetail}
                alt="LinkedIn"
                className="w-[13.5px] h-[15px] mr-2"
              />
              <button className="text-[12px] sm:text-[14px]">Detail</button>
            </div>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#222534] p-4 rounded-lg">
        <h4 className="text-sm font-inter text-white font-[600] sm:text-lg lg:text-xl mb-2">
          🤙Cross-Border Payment Innovations Creating Key Challenges
        </h4>
        <p className="text-[14px] sm:text-base lg:text-lg font-inter text-[#CDD0D5]">
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

      <div className="bg-[#282C3A] p-4 rounded-lg pb-6 mt-6">
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
  );
};

export default OverviewTakeAway;
