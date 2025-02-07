import React from "react";
import { banner, instaRecapLogo } from "../../assets";

const FormBanner = () => {
  return (
    <div>
      {/* Banner */}
      <div className="p-4">
        <div className=" rounded-xl">
          <img
            src={banner}
            alt="KEDDA EXPO"
            className="w-full md:h-40 lg:h-48 object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 px-4">
        <img className="w-[25px] h-[43px]" src={instaRecapLogo} alt="" />
        <h2 className="font-inter ">InstaRecap.ai</h2>
      </div>

    
    </div>
  );
};

export default FormBanner;
