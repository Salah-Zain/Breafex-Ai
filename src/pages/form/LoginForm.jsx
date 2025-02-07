import React from "react";
import FormBanner from "./FormBanner";
import SignInButton from "../../components/signInButton/SignInButton";

const LoginForm = () => {
  return (
    <div className="h-screen bg-[rgb(0,0,0)] w-full text-white">
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
      </form>
      <SignInButton />
    </div>
  );
};

export default LoginForm;
