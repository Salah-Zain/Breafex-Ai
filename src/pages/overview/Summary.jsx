import React from "react";
import Menu from "../../components/menu/Menu";
import {
  copy,
  linkedin,
  overview,
  overviewBlack,
  overviewBlue,
  overviewList,
  pdf,
  share,
  summaryBlack,
  summaryBlue,
  twitter,
} from "../../assets";
import MenuButton from "../../components/share-copy-download-button/MenuButton";
import { Link } from "react-router";
import { Copy } from "lucide-react";

const Summary = () => {
  return (
    <div className=" bg-[#10131A] text-white p-4 sm:p-6 lg:p-8">
      <div className=" ">
        {/* Header Card */}
        <Menu />

        {/* Section 3: Overview */}
        <div className="flex items-center justify-between pb-6">
          <div className="flex items-center gap-1">
            <img
              src={overviewList}
              alt="overviewList"
              className="w-5 h-5 sm:w-8 sm:h-8"
            />
            <h2 className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF]">
              Overview
            </h2>
          </div>
          <div className="flex justify-center items-center">
            {/* Twitter Link */}
            <Link to="/overview">
              <div className="flex items-center justify-between border-0 text-[#5BF5FF] bg-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <img
                  src={overviewBlue}
                  alt="Twitter"
                  className="w-[13.5px] h-[15px] mr-2"
                />
                <button className="text-[12px] sm:text-[14px]">Overview</button>
              </div>
            </Link>
            {/* LinkedIn Link */}
            <Link to="/summary">
              <div className="flex items-center border-0   bg-[#5BF5FF] text-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <img
                  src={summaryBlack}
                  alt="LinkedIn"
                  className="w-[13.5px] h-[15px] mr-2"
                />
                <button className="text-[12px] sm:text-[14px]">Summary</button>
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="flex items-center gap-3 pb-6">
          <img src={overviewList} alt="" />
          <h2 className="font-inter font-medium text-[14px] sm:text-[16px] text-[#FFFFFF]">
            Overview
          </h2>
        </div> */}

        {/* Section 4: Content */}
        {/* <div className="bg-[rgb(40,44,58)] p-4 rounded-lg"> */}
        {/* Section 4: Inner Div 1 */}
        <div className="w-full max-w-4xl mx-auto ">
          <div className="bg-[#282C3A] rounded-lg p-4 sm:p-5 md:p-6 lg:p-8">
            {/* Title */}
            <h2
              className="text-white font-inter font-[500] mb-4 
      text-[14px] xs:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl"
            >
              1. Online Learning Resources
            </h2>

            {/* Content */}
            <div
              className="text-gray-300 space-y-4 
      text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl"
            >
              <p className="leading-relaxed font-inter text-[14px]">
                EventHex stands out by tackling two key challenges that
                traditional event management often struggles with: creating
                personalized experiences and ensuring attendee retention. This
                platform is built to streamline evenEventHex stands out by
                tackling two key challenges that traditional event management
              </p>

              <p className="leading-relaxed font-inter text-[14px]">
                ften struggles with: creating personalized experiences and
                ensuring attendee retention. This platform is built to
                streamline evenEventHex stands out by tackling two key
                challenges that traditional event management often struggles
                with: creating personalized experiences and ensuring attendee
                retention. This platform is built to streamline even
              </p>

              <p className="leading-relaxed font-inter text-[14px]">
                ften struggles with: creating personalized experiences and
                ensuring attendee retention. This platform is built to
                streamline evenEventHex stands out by tackling two key
                challenges that traditional event management often struggles
                with: creating personalized experiences and ensuring attendee
                retention. This platform is built to streamline even
              </p>
            </div>
            <MenuButton
              img1={share}
              img1Text={"Share"}
              img2={copy}
              img2Text={"Copy"}
            />
          </div>
        </div>
        {/* Section 5: Inner Div 2 button */}
      </div>
    </div>
  );
};

export default Summary;
