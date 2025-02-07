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
} from "../../assets";
import MenuButton from "../../components/share-copy-download-button/MenuButton";
import { Link } from "react-router-dom"; // Corrected import

const LinkedIn = () => {
  return (
    <div className="bg-[#10131A] text-white p-4 sm:p-6 lg:p-8">
      <Menu />

      {/* Content Section */}
      {/* Header Section */}
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
        <div className="flex justify-center items-center">
          {/* Twitter Link */}
          <Link to="/social/twitter">
            <div className="flex items-center justify-between border-0 bg-[#222534]  text-[#5BF5FF]  px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={twitter}
                alt="Twitter"
                className="w-[13.5px] h-[15px] mr-2"
              />
              <button className="text-[12px] sm:text-[14px]">Twitter</button>
            </div>
          </Link>
          {/* LinkedIn Link */}
          <Link to="/social/linkedin">
            <div className="flex items-center border-0 bg-[#5BF5FF] text-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="w-[13.5px] h-[15px] mr-2"
              />
              <button className="text-[12px] sm:text-[14px]">LinkedIn</button>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-[#222534] space-y-6 rounded-lg">
        <div className="px-4 bg-[#282C3A] text-[#CDD0D5] font-inter text-[14px] rounded-lg py-">
          {/* Post Header */}
          <div className="py-4 flex items-center justify-between">
            <div className="flex gap-2">
              <img src={linkedinblue} alt="" />
              <p className="text-[14px] sm:text-[16px] md:text-[18px]">
                #Post 1
              </p>
            </div>
            <div>
              <p>12/280</p>
            </div>
          </div>

          {/* Strategic AI Implementation */}
          <div className="bg-[#222534] px-4 rounded-lg py-4">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4">
              🎯Key Insights from 'Future of Al in Business' session at
              #TechConf2025:
            </p>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4">
              1. Strategic AI Implementation:
            </h2>
            <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg text-[#CDD0D5] space-y-2">
              <li>Focus on augmenting human capabilities</li>
              <li>Gradual integration &gt; complete overhaul</li>
              <li>35% efficiency increase in early adopters</li>
            </ul>
          </div>

          {/* Future Trends */}
          <div className="bg-[#222534] px-4 rounded-lg">
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-">
              2. Future Trends:
            </h2>
            <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg text-[#CDD0D5] space-y-2">
              <li>Hybrid AI-human workflows becoming standards</li>
              <li>Emphasis on ethical AI development</li>
              <li>Data quality as key success factor</li>
            </ul>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-6">
              What's your take on Al integration in your industry? Let's
              discuss!
            </h2>
          </div>

          {/* Share and Copy Buttons */}
          <div className="pb-4">
            <MenuButton
              img1={share}
              img1Text={"Share"}
              img2={copy}
              img2Text={"copy"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedIn;
