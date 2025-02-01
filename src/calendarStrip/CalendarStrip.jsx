import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { date } from "../assets";

const CalendarStrip = () => {
  const days = [
    { dayName: "Fri", date: "31", isActive: false, isDisabled: true },
    { dayName: "Sat", date: "01", isActive: false },
    { dayName: "Sun", date: "02", isActive: true },
    { dayName: "Mon", date: "03", isActive: false },
    { dayName: "Tue", date: "04", isActive: false, isDisabled: true },
  ];

  return (
    <div className="w-full  bg-gray-900 text-gray-100">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="text-center mb-2">
          <p className="text-lg sm:text-xl md:text-2xl text-[14px] font-inter font-normal">
            October 2024
          </p>
        </div>

        <div className="flex items-center justify-between">
          {/* <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button> */}

          <div className="max-w-2xl mx-auto">
            <img src={date} alt="" className="" />
          </div>

          {/* <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default CalendarStrip;
