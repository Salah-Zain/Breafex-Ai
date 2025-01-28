import React from "react";
import { banner } from "../assets/index.js";
import profileImage from "./../assets/Icons/transparent.svg";
import Card from "../components/Card.jsx";

const HomeUi = () => {
  return (
    <>
      <div className=" bg-gray-900 text-white">
        {/* Header */}
        <header className="p-4 flex items-center justify-between bg-gray-900">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 border-[1px] border-solid">
              <img src={profileImage} alt="Profile" />
            </div>

            <div>
              <h1 className="text-sm md:text-base font-semibold">
                Welcome Back
              </h1>
              <p className="text-xs md:text-sm text-gray-300">Ahmed Zidane !</p>
            </div>
          </div>
        </header>

        {/* Banner */}
        <div className="p-2">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={banner}
              alt="KEDDA EXPO"
              className="w-full h-[192px] md:h-40 lg:h-48 object-contain"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-500/50 to-cyan-500/50" /> */}
            {/* <div className="absolute bottom-4 left-4">
              <h2 className="text-lg md:text-xl lg:text-2xl font-bold">
                KEDDA EXPO
              </h2>
              <p className="text-sm md:text-base text-gray-200">
                The Largest Dental Expo in Kerala
              </p>
            </div> */}
          </div>
        </div>

        <div>
          <p className="p-4 font-medium text-base font-inter">Latest Updated</p>
        </div>
      </div>

      {/* Event List */}
      <Card />
      <Card />
      <Card />
      <Card />

      {/*

      {/* Bottom Navigation */}
      {/* <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 border-t border-gray-700">
        <div className="flex justify-around p-3">
          <button className="flex flex-col items-center text-blue-500">
            <Home className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Calendar className="w-5 h-5" />
            <span className="text-xs mt-1">Sessions</span>
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <Bookmark className="w-5 h-5" />
            <span className="text-xs mt-1">Book Mark</span> 
          </button>
          <button className="flex flex-col items-center text-gray-400">
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </button>
        </div>
      </nav> */}
    </>
  );
};

export default HomeUi;
