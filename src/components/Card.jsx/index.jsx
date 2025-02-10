import React from "react";
import CardImg from "../cardImg/CardImg";
import { cardImg1, cardImg2, cardImg3, clock } from "../../assets";
import { calender } from "./../../assets";
import Button from "../button/Button";
import { transcripted } from "../../assets";

const Card = () => {
  const cardImages1 = [
    {
      id: 1,
      img: cardImg1,
    },
    {
      id: 2,
      img: cardImg2,
    },
    {
      id: 3,
      img: cardImg3,
    },
    {
      id: 4,
      text: "+2",
    },
  ];

  return (
    <div className="px-4 pb-4 space-y-4 bg-[rgb(16,19,26)]">
      <div className="bg-[rgb(40,44,58)] rounded-lg p-4">
        {/* Top Section */}
        <div className="flex justify-between items-start mb-3">
          <div className="w-full">
            {/* Date and Stage */}
            <div className="flex justify-between items-center w-full flex-col sm:flex-row">
              <div className="flex items-center">
                <img src={calender} alt="Calendar" className="w-4 h-4" />
                <span className="text-xs text-gray-300 font-inter pl-1">
                  15 Aug 2024 | Stage 01
                </span>
              </div>
              {/* Button */}
              <div className="mt-2 sm:mt-0">
                <Button buttonText={"Transcripted"} buttonIcon={transcripted} />
              </div>
            </div>
            {/* Title */}
            <h3 className="text-base sm:text-lg font-medium mt-2 text-white font-inter border-[#868C98] border-b border-dotted py-2">
              Shaping the Financial Ecosystem of the Future
            </h3>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-center flex-col sm:flex-row">
          {/* Card Images */}
          <div className="flex -space-x-2 rounded-3xl bg-white py-1 pr-4 mb-2 sm:mb-0">
            {cardImages1.map((data) => (
              <CardImg key={data.id} dataImg={data.img} dataText={data.text} />
            ))}
          </div>
          {/* Time */}
          <div className="flex items-center">
            <img src={clock} alt="Clock" className="w-4 h-4" />
            <span className="text-xs text-[#CDD0D5] ml-1">
              8:00 AM - 9:30 AM
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;