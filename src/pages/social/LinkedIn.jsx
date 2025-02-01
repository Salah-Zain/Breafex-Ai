import React from "react";
import Menu from "../../components/menu/Menu";
import {
  copy,
  linkedin,
  linkedinog,
  share,
  socialcontent,
  twitter,
} from "../../assets";
import MenuButton from "../../components/share-copy-download-button/MenuButton";
import { Link } from "react-router";

const LinkedIn = () => {
  return (
    <div className="bg-gray-900 text-white p-4 sm:p-6 lg:p-8">
      <Menu />

      {/* Content Section */}
      <div className="">
        <div className="flex items-center justify-between gap-3 pb-6">
          <div className="flex items-center gap-2">
            <img src={socialcontent} alt="" />
            <h2 className="font-inter font-medium text-[14px] sm:text-[16px] text-[#FFFFFF]">
              Social Content
            </h2>
          </div>
          <div className="flex items-center">
            {/* twitter link */}
            <Link to="/social/twitter">
              <div className="flex items-center gap-2 border-0 bg-[#222534] text-[#5BF5FF] px-4 py-2 rounded-lg">
                <img src={twitter} alt="" />
                <button>Twitter</button>
              </div>
            </Link>
            {/* linkedin link */}
            <Link to="/social/linkedin">
              <div className="flex items-center gap-2 border bg-[#5BF5FF] text-[#222534] px-4 py-1 rounded-lg">
                <img src={linkedin} alt="" />
                <button>LinkedIn</button>
              </div>
            </Link>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-[#222534] space-y-6 rounded-lg">
          {/* Strategic AI Implementation */}
          
          <div className="px-4 bg-[#282C3A] text-[#CDD0D5] font-inter text-[14px] rounded-lg py-4">
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
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-6">
                2. Future Trends:
              </h2>
              <ul className="list-disc list-inside text-sm sm:text-base lg:text-lg text-[#CDD0D5] space-y-2">
                <li>Hybrid AI-human workflows becoming standards</li>
                <li>Emphasis on ethical AI development</li>
                <li>Data quality as key success factor</li>
              </ul>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold py-6">
                What's your take on Al integration in your industry?Let's
                discuss!
              </h2>
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
      </div>
    </div>
  );
};

export default LinkedIn;
