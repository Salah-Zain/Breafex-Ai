import React from "react";
import Card from "../../components/Card.jsx";
import { bookmark, session, takeAway } from "../../assets/index.js";
import FooterNav from "../../components/NavBar/FooterNav.jsx";
import { Link } from "react-router-dom";

const Bookmarks = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-between">
      <div>
        <div className="w-full bg-gray-900 text-gray-100">
          <nav className="max-w-screen-xl mx-auto p-4">
            <div className="flex flex-col space-y-4 sm:space-y-6">
              {/* Sessions Tab */}
              <div className="flex space-x-4 sm:space-x-6 items-center">
                <div className="flex items-center flex-1">
                  <div className="pl-4 rounded-lg">
                    <img
                      src={session}
                      className="w-[36.8px] h-[36.8px] sm:w-6 sm:h-6"
                    />
                  </div>
                  <span className="text-base sm:text-lg md:text-xl font-inter text-[14px] font-medium">
                    Sessions
                  </span>
                </div>
                {/* take away */}
                <Link to="/takeaway">
                  <div className="flex items-center flex-1">
                    <div className="pl-4 rounded-lg">
                      <img
                        src={takeAway}
                        className="w-[36.8px] h-[36.8px] sm:w-6 sm:h-6"
                      />
                    </div>
                    <span className="text-base sm:text-lg md:text-xl font-inter text-[14px] font-medium text-[#868C98]">
                      Take away
                    </span>
                  </div>
                </Link>
              </div>

              {/* Active Tab Indicator */}
              <div className="pl-4 pb-2">
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
          <Card />
          <Card />
          <Card />
          <Card />
        </Link>
      </div>

      <FooterNav />
    </div>
  );
};

export default Bookmarks;
