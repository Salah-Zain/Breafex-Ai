import React from "react";
import { Bookmark, Calendar, Target } from "lucide-react";
import Card from "../components/Card.jsx";

const Bookmarks = () => {
  return (
    <div>
      <div className="w-full bg-gray-900 text-gray-100">
        <nav className="max-w-screen-xl mx-auto p-4">
          <div className="flex flex-col space-y-4 sm:space-y-6">
            {/* Sessions Tab */}
            <div className="flex space-x-4 sm:space-x-6 items-center">
              <div className="flex items-center space-x-3 sm:space-x-4 flex-1">
                <div className="bg-red-400 p-2 rounded-lg">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="text-base sm:text-lg md:text-xl font-medium">
                  Sessions
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <div className="bg-purple-400/20 p-2 rounded-lg">
                    <Target className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                  </div>
                  <span className="text-gray-400 text-sm sm:text-base md:text-lg">
                    Take Away
                  </span>
                </div>
              </div>
            </div>

            {/* Active Tab Indicator */}
            <div className="relative">
              <div className="absolute left-0 right-0 h-px bg-gray-700" />
              <div className="absolute left-0 w-24 sm:w-28 h-0.5 bg-cyan-500" />
            </div>

            {/* Bookmarks Tab */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Bookmark className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <span className="text-gray-400 text-base sm:text-lg md:text-xl">
                Bookmarks
              </span>
            </div>
          </div>
        </nav>
      </div>
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Bookmarks;
