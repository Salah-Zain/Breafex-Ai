import React from "react";
import { Link } from "react-router-dom"; // Corrected import
import { home, navSession, navBookmark, navProfile, logo } from "../../assets";

const FooterNav = () => {

  const navItems = [
    {
      
    }
  ] 
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[rgb(31,31,33)] border-gray-800 opacity-80">
      {/* Main Navigation */}
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-around items-center px-2 py-3 sm:py-4">
          {/* Home */}
          <Link to="/">
            <button className="flex flex-col items-center min-w-[64px] sm:min-w-[80px]">
              <div className="rounded-full bg-[#5BF5FF] p-2">
                <img
                  src={home}
                  className="w-[10.8px] h-[11.24px] sm:w-6 sm:h-6"
                  alt="Home"
                />
              </div>
              <span className="text-[#5BF5FF] text-[10px] sm:text-sm mt-1 font-inter font-medium">
                Home
              </span>
            </button>
          </Link>

          {/* Sessions */}
          <Link to="/session">
            <button className="flex flex-col items-center min-w-[64px] sm:min-w-[80px]">
              <div className="rounded-full p-2">
                <img
                  src={navSession}
                  className="w-[15px] h-[15px] sm:w-6 sm:h-6"
                  alt="Sessions"
                />
              </div>
              <span className="text-white text-[10px] sm:text-sm mt-1 font-inter font-medium">
                Sessions
              </span>
            </button>
          </Link>

          {/* Book Mark */}
          <Link to="/bookmark">
            <button className="flex flex-col items-center min-w-[64px] sm:min-w-[80px]">
              <div className="rounded-full p-2">
                <img
                  src={navBookmark}
                  className="w-[12px] h-[15.48px] sm:w-6 sm:h-6"
                  alt="Bookmark"
                />
              </div>
              <span className="text-white text-[10px] sm:text-sm mt-1 font-inter font-medium">
                Book Mark
              </span>
            </button>
          </Link>

          {/* Profile */}
          <Link to="/profile">
            <button className="flex flex-col items-center min-w-[64px] sm:min-w-[80px]">
              <div className="rounded-full p-2">
                <img
                  src={navProfile}
                  className="w-[12px] h-[15.75px] sm:w-6 sm:h-6"
                  alt="Profile"
                />
              </div>
              <span className="text-white text-[10px] sm:text-sm mt-1 font-inter font-medium">
                Profile
              </span>
            </button>
          </Link>
        </div>

        {/* Powered By Section */}
        <div className="flex justify-center items-center py-2 sm:py-3 border-t border-gray-800">
          <span className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] 2xl:text-[15px] text-[#CDD0D5] font-inter">
            Powered By
          </span>
          <div className="flex items-center ml-2">
            <div className="w-[79.44px] h-[16.4px] sm:w-7 sm:h-7 rounded-md flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterNav;
