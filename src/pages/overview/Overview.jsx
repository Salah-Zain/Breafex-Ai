import { overviewList, pdf, share } from "../../assets";
import Menu from "../../components/menu/Menu";
import MenuButton from "../../components/share-copy-download-button/MenuButton";

const Overview = () => {
  return (
    <div className="w-full h-auto bg-gray-900">
      <div className="px-3 py-[16px] h-screen bg-gray-900">
        {/* Header Card */}
        <Menu />

        {/* Section 3: Overview */}
        <div className="flex items-center gap-3 pb-6">
          <img src={overviewList} alt="" />
          <h2 className="font-inter font-medium text-[14px] sm:text-[16px] text-[#FFFFFF]">
            Overview
          </h2>
        </div>

        {/* Section 4: Content */}
        <div className="bg-[rgb(40,44,58)] p-4 rounded-lg">
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
           <MenuButton img1={share} img1Text={"Share"} img2={pdf} img2Text={"Download"} />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
