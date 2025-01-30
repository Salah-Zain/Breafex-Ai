import {
  overview,
  overviewCal,
  overviewList,
  overviewProfile,
  resource,
  rightButton,
  share,
  social,
  takeAwayIcon,
} from "../../assets";

const Overview = () => {
  return (
    <div className="">
      <div className="px-3 py-[16px] bg-gray-900">
        {/* header card */}
        {/* div 1 */}
        <div className="bg-gradient-to-r from-[#9CECFB] via-[#65C7F7] to-[#0052D4] rounded-lg px-4">
          <div className="flex justify-between items-center py-4 w-full text-[#0A0D14]  border-b border[#FBF9F9]">
            <button className=" w-[32px] h-[32px] ml-2 rounded-full bg-[#F6F8FA] flex justify-center items-center">
              <img src={rightButton} alt="" className="" />
            </button>
            <h1 className="px-3 font-inter font-medium text-[16px] leading-5.5">
              Shaping the Financial Ecosystem of the Future
            </h1>
          </div>

          {/* div 2 */}
          <div className="flex items-center py-4 w-full text-[#0A0D14]">
            <div className="w-[48px] h-[48px] ml-2 rounded-full bg-[#F6F8FA] flex justify-center items-center">
              <img src={overviewProfile} alt="" className=" rounded-full" />
            </div>
            <div className="flex flex-col">
              <h2 className="px-3 font-inter font-medium text-[#0A0D14] text-[14px] leading-[16.94px]">
                Safari Sanders Dennyes
              </h2>
              <p className="px-3 font-inter text-[12px] text-[#FFFFFF]">
                Ai Research Director, Tecnosys
              </p>
            </div>
          </div>

          {/* div 3 */}
          <div className="flex items-center pb-3  ">
            <div className="flex items-center border-r-2 border-black">
              <img src={overviewCal} alt="" className="p-2" />
              <p className="text-[12px] font-inter pr-2">Jan 17, 2025</p>
            </div>
            <span className="border-1 border-r-black"></span>
            <div className="flex items-center">
              <img src={overviewCal} alt="" className="p-2" />
              <p className="text-[12px] font-inter">45 min</p>
            </div>
          </div>
        </div>

        {/* section0-2: links */}
        <div className="flex items-center justify-around py-4">
          <div className="flex items-center flex-col justify-center py-4">
            <img src={overview} alt="" className="w-[36px] h-[36px]" />
            <p className="text-[#FFFFFF] text-[14px] border-b-2 border-[#5BF5FF] pb-2">
              Overview
            </p>
          </div>
          <div className="flex items-center flex-col justify-center">
            <img src={takeAwayIcon} alt="" className="w-[36px] h-[36px]" />
            <p className="text-[#868C98] text-[14px]">Take Away</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <img src={social} alt="" className="w-[36px] h-[36px]" />
            <p className="text-[#868C98] text-[14px]">Social</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <img src={resource} alt="" className="w-[36px] h-[36px]" />
            <p className="text-[#868C98] text-[14px]">Resources</p>
          </div>
        </div>

        {/* section3: overview */}
        <div className="flex items-center gap-3 pb-6">
          <img src={overviewList} alt="" />
          <h2 className="font-inter font-medium text-[16px] text-[#FFFFFF]">
            Overview
          </h2>
        </div>

        {/* section4: content */}
        <div className="bg-[rgb(40,44,58)] p-4 rounded-lg">
          <div>
            <p className="font-inter text-[14px] text-[#CDD0D5]">
              EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built to streamline even
            </p>
            {/* section4: inner div:1 */}
            <div className="bg-[#222534] text-[#CDD0D5] p-4 mt-8 rounded-lg">
              <h3 className="font-inter font-medium text-[14px]">
                Session Highlights
              </h3>
              <ul className="font-inter text-[14px] list-disc px-4 py-2">
                <li className="py-1 leading-[18px]">
                  creating personalized experiences and ensuring attendee
                  retention. This
                </li>
                <li className="py-1 leading-[18px]">
                  experiences and ensuring attendee
                </li>
                <li className="py-1 leading-[18px]">
                  stands out by tackling two key challeng
                </li>
                <li className="py-1 leading-[18px]">
                  personalized experiences and ensuring attendee retention. This
                </li>
              </ul>
            </div>
            {/* section5: inner div:2 */}
            <div className="flex items-center gap-8 p-4">
              <div className="flex items-center px-[10px] py-[6px] border-2 rounded-lg border-[#5BF5FF]">
                <img src={share} alt="" className="" />
                <p className="px-2 font-inter text-[12px] text-[#5BF5FF]">Share</p>
              </div>
              <div className="flex items-center px-[10px] py-[6px] border-2 border-[#5BF5FF] rounded-lg">
                <img src={share} alt="" className="px-2" />
                <p className="px-2 font-inter text-[12px] text-[#5BF5FF]">Download</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
