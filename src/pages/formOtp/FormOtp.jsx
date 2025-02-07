import React from "react";
import FormBanner from "../form/FormBanner";
import SignInButton from "../../components/signInButton/SignInButton";

const FormOtp = () => {
  const items = [1, 2, 3, 4];

  return (
    <div className="h-screen bg-[rgb(0,0,0)] w-full text-white">
      <FormBanner />

      <div className="text-center pt-4 px-4">
        {/* Heading */}
        <h1 className="text-white text-base xs:text-lg sm:text-xl md:text-2xl font-medium">
          Verify your account
        </h1>
        {/* Subheading */}
        <div className="flex justify-center items-center">
          <p className="text-[#d2d4d7] text-[12px] xs:text-sm sm:text-base font-inter leading-[20px]">
            Enter OTP recieved on +91 98765433210
          </p>
          <button>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.796 5.2645L8.7355 4.204L1.75 11.1895V12.25H2.8105L9.796 5.2645ZM10.8565 4.204L11.917 3.1435L10.8565 2.083L9.796 3.1435L10.8565 4.204ZM3.4315 13.75H0.25V10.5678L10.3263 0.491502C10.4669 0.350898 10.6576 0.271912 10.8565 0.271912C11.0554 0.271912 11.2461 0.350898 11.3868 0.491502L13.5085 2.61325C13.6491 2.7539 13.7281 2.94463 13.7281 3.1435C13.7281 3.34237 13.6491 3.53311 13.5085 3.67375L3.43225 13.75H3.4315Z"
                fill="#CDD0D5"
              />
            </svg>
          </button>
        </div>

        <div className=" flex justify-center gap-5 items-center py-4">
          {items.map((item) => (
            <div
              key={item}
              className="aspect-square rounded-lg py-3 px-6 bg-[#27292d] border border-gray-600"
            >
              {item}
            </div>
          ))}
        </div>

        <div className="bg-[rgb(0,0,0)] py-2">
          <p className="font-inter text-[12px] text-[#E2E4E9] py-1">
            Experiencing issues receiving the code?
          </p>
          <p className="font-inter font-500 underline text-[12px] text-[#5BF5FF]">
            Resend code
          </p>
        </div>

        <div className="pb-2">
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default FormOtp;
