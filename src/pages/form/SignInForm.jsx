import React from "react";
import {
  banner,
  CompanyIcon,
  DesignationIcon,
  GenderIcon,
  instaRecapLogo,
  NameIcon,
  transcripted,
  transparent,
} from "../../assets/index.js";
import { User, Building2, Users } from "lucide-react";
import FormBanner from "./FormBanner.jsx";
import SignInButton from "../../components/signInButton/SignInButton.jsx";

const SignInForm = () => {
  return (
    <div className="h-auto bg-[rgb(0,0,0)] w-full flex flex-col justify-between">
      <div className=" h-auto text-white">
        {/* Header */}
        {/* <header className=" pb-4 pt-0  flex items-center justify-between bg-grey-900 px-4"></header> */}

        {/* Banner */}
        <div>
          <FormBanner />
          <div className="text-center pt-5">
            {/* Heading */}
            <h1 className="text-white text-base xs:text-lg sm:text-xl md:text-2xl font-medium">
              Your Event Journey Awaits
            </h1>
            {/* Subheading */}
            <p className="text-[#61656b] text-[12px] xs:text-sm sm:text-base font-inter leading-[20px]">
              Sign in to access schedules, chats, and more
            </p>
          </div>
        </div>

        {/* Form Fields */}
        <form className="space-y-3 xs:space-y-4 sm:space-y-5 p-4">
          {/* phone number input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={""} size={16} xs:size={18} className="" />
            </div>
            <input
              type="number"
              placeholder="Phone Number"
              className="w-full bg-gray-800 text-white placeholder-gray-400 
               text-xs xs:text-sm rounded-lg py-3 xs:py-3 px-10 xs:px-10
               border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
               transition-colors duration-200"
            />
          </div>

          {/* Name Input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={NameIcon} size={16} xs:size={18} />
            </div>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full bg-gray-800 text-white placeholder-gray-400 
               text-xs xs:text-sm rounded-lg py-3 xs:py-3 px-10 xs:px-10
               border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
               transition-colors duration-200"
            />
          </div>

          {/* Designation Input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={DesignationIcon} size={16} xs:size={18} />
            </div>
            <input
              type="text"
              placeholder="Designation"
              className="w-full bg-gray-800 text-white placeholder-gray-400 
               text-xs xs:text-sm rounded-lg py-3 xs:py-3 px-10 xs:px-10
               border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
               transition-colors duration-200"
            />
          </div>

          {/* Company Input */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={CompanyIcon} size={16} xs:size={18} />
            </div>
            <input
              type="text"
              placeholder="Company name"
              className="w-full bg-gray-800 text-white placeholder-gray-400 
               text-xs xs:text-sm rounded-lg py-3 xs:py-3 px-10 xs:px-10
               border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
               transition-colors duration-200"
            />
          </div>

          {/* Gender Select */}
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <img src={GenderIcon} size={16} xs:size={18} />
            </div>
            <select
              className="w-full bg-gray-800 text-gray-400 
               text-xs xs:text-sm rounded-lg py-3 xs:py-3 px-10 xs:px-10
               border border-gray-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
               transition-colors duration-200
               appearance-none cursor-pointer"
            >
              <option value="" disabled selected>
                Select Your Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <SignInButton />
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
