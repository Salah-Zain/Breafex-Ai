import React from "react";
import Menu from "../../components/menu/Menu";
import {
  copy,
  linkedin,
  linkedinblue,
  linkedinog,
  share,
  socialcontent,
  twitter,
  twitterblack,
} from "../../assets";
import { Copy, Share } from "lucide-react";
import MenuButton from "../../components/share-copy-download-button/MenuButton";
import { Link } from "react-router";

const Twitter = () => {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <Menu />

      {/* Content Section */}

      {/* header section */}
      <div className="flex items-center justify-between gap-3 pb-6">
        <div className="flex items-center gap-2">
          <img
            src={socialcontent}
            alt="Social Content"
            className="w-5 h-5 sm:w-8 sm:h-8"
          />
          <h2 className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF]">
            Social Content
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {/* Twitter Link */}
          <Link to="/social/twitter">
            <div className="flex items-center gap-2 border-0 bg-[#5BF5FF] text-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={twitterblack}
                alt="Twitter"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <button className="text-[12px] sm:text-[14px]">Twitter</button>
            </div>
          </Link>
          {/* LinkedIn Link */}
          <Link to="/social/linkedin">
            <div className="flex items-center gap-2 border-0  bg-[#222534] text-[#5BF5FF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={linkedinblue}
                alt="LinkedIn"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <button className="text-[12px] sm:text-[14px]">LinkedIn</button>
            </div>
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-[#222534] space-y-6 rounded-lg">
        {/* Strategic AI Implementation */}

        <div className="px-4 bg-[#282C3A] text-[#CDD0D5] font-inter text-[14px] rounded-lg">
          <div className="py-4 flex items-center justify-between">
            <div className="flex gap-2">
              <img src={twitter} alt="" />
              <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                #Post 1
              </p>
            </div>
            <div>
              <p>12/280</p>
            </div>
          </div>

          <div className="bg-[#222534]  px-4 rounded-lg py-2">
            <p className="text-base font-inter text-[#CDD0D5] sm:text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl font-bold mb-4">
              🤙 EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built to streamline even #Techconf25 #Wokshope
            </p>
          </div>
          <div>
            <MenuButton
              img1={share}
              img1tText={"Share"}
              img2={copy}
              img2Text={"Copy"}
            />
          </div>
        </div>
      </div>

      <div className="bg-[#222534] space-y-6 rounded-lg py-4">
        {/* Strategic AI Implementation */}

        <div className="px-4 bg-[#282C3A] text-[#CDD0D5] font-inter text-[14px] rounded-lg py-">
          <div className="py-4 flex items-center justify-between">
            <div className="flex gap-2">
              <img src={linkedinog} alt="" />
              <p className="text-[16px]">#Post 1</p>
            </div>
            <div>
              <p>12/280</p>
            </div>
          </div>

          <div className="bg-[#222534]  px-4 rounded-lg py-2">
            <p className="text-base font-inter text-[#CDD0D5] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4">
              🤙 EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built to streamline even #Techconf25 #Wokshope
            </p>
          </div>
          <div>
            <MenuButton
              img1={share}
              img1tText={"Share"}
              img2={Copy}
              img2Text={"Copy"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Twitter;
