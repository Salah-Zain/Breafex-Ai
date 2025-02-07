import React from "react";

const SignInButton = () => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-48 h-10 bg-[#5BF5FF] hover:bg-cyan-500 
             text-[#0A0D14] text-md xs:text-sm
             rounded-lg  py-2 xs:py-3 transition-colors duration-200
             mt-4 xs:mt-6 font-inter font-[500]"
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInButton;
