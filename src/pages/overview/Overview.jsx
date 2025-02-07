import { Link } from "react-router";
import {
  copy,
  linkedin,
  linkedinblue,
  overviewBlack,
  overviewCal,
  overviewList,
  overviewProfile,
  pdf,
  share,
  summaryBlue,
  twitter,
  twitterblack,
} from "../../assets";
import Menu from "../../components/menu/Menu";
import MenuButton from "../../components/share-copy-download-button/MenuButton";

const Overview = () => {
  return (
    <div className="h-screen bg-[#10131A] text-white p-4 sm:p-6 lg:p-8">
      <div className="">
        {/* Header Card */}
        <Menu />

        {/* Section 3: Overview */}
        <div className="flex items-center justify-between pb-6">
          <div className="flex items-center gap-1">
            <img
              src={overviewList}
              alt="overviewList"
              className="w-5 h-5 sm:w-8 sm:h-8"
            />
            <h2 className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF]">
              Overview
            </h2>
          </div>
          <div className="flex justify-center items-center w-44 bg-[#282C3A]">
            {/* Twitter Link */}
            <Link to="/overview">
              <div className="flex items-center justify-between border-0 bg-[#5BF5FF] text-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <img
                  src={overviewBlack}
                  alt="Twitter"
                  className="w-[13.5px] h-[15px] mr-2"
                />
                <button className="text-[12px] sm:text-[14px]">Overview</button>
              </div>
            </Link>
            {/* LinkedIn Link */}
            <Link to="/summary">
              <div className="flex items-center border-0  text-[#5BF5FF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
                <img
                  src={summaryBlue}
                  alt="LinkedIn"
                  className="w-[13.5px] h-[15px] mr-2"
                />
                <button className="text-[12px] sm:text-[14px]">Summary</button>
              </div>
            </Link>
          </div>
        </div>

        {/* <div className="flex items-center gap-3 pb-6">
          <img src={overviewList} alt="" />
          <h2 className="font-inter font-medium text-[14px] sm:text-[16px] text-[#FFFFFF]">
            Overview
          </h2>
        </div> */}

        {/* Section 4: Content */}
        <div className=" bg-[rgb(40,44,58)] p-4 rounded-lg">
          <div>
            <p className="font-inter text-[12px] sm:text-[14px] text-[#CDD0D5]">
              EventHex stands out by tackling two key challenges that
              traditional event management often struggles with: creating
              personalized experiences and ensuring attendee retention. This
              platform is built to streamline even
            </p>
            {/* Section 4: Inner Div 1 */}
            <div className="bg-[#222534] text-[#CDD0D5] p-4 mt-8 rounded-lg">
              <h3 className="font-inter font-medium text-[12px] sm:text-[14px]">
                Session Highlights
              </h3>
              <ul className="font-inter text-[12px] sm:text-[14px] list-disc px-4 py-2">
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
            {/* Section 5: Inner Div 2 button */}
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

export default Overview;
