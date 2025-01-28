import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarStrip = () => {
  const days = [
    { dayName: 'Fri', date: '31', isActive: false, isDisabled: true },
    { dayName: 'Sat', date: '01', isActive: false },
    { dayName: 'Sun', date: '02', isActive: true },
    { dayName: 'Mon', date: '03', isActive: false },
    { dayName: 'Tue', date: '04', isActive: false, isDisabled: true }
  ];

  return (
    <div className="w-full bg-gray-900 text-gray-100 py-4">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium">
            October 2024
          </h2>
        </div>
        
        <div className="flex items-center justify-between">
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
          <div className="flex-1 flex justify-around max-w-2xl mx-auto">
            {days.map((day, index) => (
              <div
                key={index}
                className={`flex flex-col items-center mx-1 sm:mx-2 md:mx-4 ${
                  day.isDisabled ? 'opacity-50' : ''
                }`}
              >
                <span className="text-xs sm:text-sm md:text-base mb-1">
                  {day.dayName}
                </span>
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-sm sm:text-base md:text-lg ${
                    day.isActive
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400'
                  }`}
                >
                  {day.date}
                </div>
              </div>
            ))}
          </div>
          
          <button className="p-2 rounded-full hover:bg-gray-800 transition-colors">
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarStrip;
