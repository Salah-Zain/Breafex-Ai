import React from "react";
import Card from "../../components/Card.jsx";
import {
  bookmark,
  session,
  takeAway,
  takeAwaybluebookmarkfill,
  takeAwayblueheart,
  takeAwayblueshare,
  takeawaybluestar,
} from "../../assets/index.js";
import FooterNav from "../../components/NavBar/FooterNav.jsx";
import { Link } from "react-router-dom";

const TakeAway = () => {
  return (
    <div className="bg-gray-900 text-gray-100 h-screen flex flex-col justify-between">
      <div>
        <div className="w-full bg-gray-900 text-gray-100">
          <nav className="max-w-screen-xl mx-auto p-4">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {/* Sessions Tab */}
              <div className="flex space-x-4 sm:space-x-6 items-center px-1 justify-between">
                {/* session link */}
                <Link to="/bookmark">
                  <div className="flex items-center flex-1">
                    <div className=" rounded-lg">
                      <img
                        src={session}
                        className="w-[36.8px] h-[36.8px] sm:w-6 sm:h-6"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-inter text-[14px] font-medium text-[#868C98]">
                      Sessions
                    </span>
                  </div>
                </Link>
                {/* take away */}
                <Link to="">
                  <div className="flex items-center flex-1">
                    <div className=" rounded-lg">
                      <img
                        src={takeAway}
                        className="w-[36.8px] h-[36.8px] sm:w-6 sm:h-6"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-inter text-[14px] font-medium">
                      Take away
                    </span>
                  </div>
                </Link>
              </div>

              {/* Active Tab Indicator */}
              <div className="pl-[265px] pb-2 px-4">
                {/* <div className="absolute left-0 right-0 h-px bg-gray-700" /> */}
                <div className="border-2 border-cyan-500 w-[120px]" />
              </div>

              {/* Bookmarks Tab */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <img
                  src={bookmark}
                  className="w-[15.6px] h-[20.13px] sm:w-6 sm:h-6"
                />
                <p className="text-[#FFFFFF] text-[16px] sm:text-lg md:text-xl font-medium pb-2">
                  Bookmarks
                </p>
              </div>
            </div>
          </nav>
        </div>
        <Link to="/overview">
          {/* Content Section */}
          <div className="px-4">
            <div className="bg-[#222534] p-4 rounded-lg">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">
                🤙Cross-Border Payment Innovations Creating Key Challenges
              </h4>
              <p className="text-sm sm:text-base lg:text-lg text-[#CDD0D5]">
                EventHex stands out by tackling two key challenges that
                traditional event management often struggles with: creating
                personalized experiences and ensuring attendee retention. This
                platform is built:
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
                EventHex stands out by tackling two key challenges that
                traditional event management often struggles with: creating
                personalized experiences and ensuring attendee retention. This
                platform is built
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
        </Link>
      </div>

      <FooterNav />
    </div>
  );
};

export default TakeAway;
