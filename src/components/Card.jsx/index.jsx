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
    <div className="p-2 space-y-4 bg-slate-900">
      <div className="bg-gray-800 rounded-lg p-4">
        <div className="flex justify-between items-start mb-3">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex">
                <img src={calender} alt="" />
                <span className="text-xs text-gray-300 font-inter text-[12px] pl-1">
                  15 Aug 2024 | Stage 01
                </span>
              </div>
              <Button buttonText={"Transcripted"} buttonIcon={transcripted} />
            </div>
            <h3 className="text-sm md:text-base font-medium mt-1 text-white font-inter leading-5 w-full border-b border-dotted py-2">
              Shaping the Financial Ecosystem of the Future
            </h3>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex -space-x-2 rounded-3xl bg-white py-1 pr-4">
            {cardImages1.map((data) => {
              return (
                <CardImg
                  key={data.id}
                  dataImg={data.img}
                  dataText={data.text}
                />
              );
            })}
            
          </div>
          <div className="flex justify-end items-center">
            <img src={clock} alt="" className="p-1" />
            <span className="text-xs text-gray-300">8:00 AM - 9:30 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
