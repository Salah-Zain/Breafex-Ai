import React from "react";
import {
  copy,
  filesgreen,
  linkedinblue,
  mentionedblack,
  rescontimg,
  resgreen,
  resourceimg,
  share,
  twitterblack,
} from "../../assets";
import Menu from "../../components/menu/Menu";
import MenuButton from "../../components/share-copy-download-button/MenuButton";
import { Link } from "react-router";

const ResourceList = () => {
  const resources = [
    {
      id: 1,
      title: "Online Learning Resources",
      content:
        "EventHex stands out by tackling two key challenges that traditional event management often struggles with: creating personalized experiences and ensuring attendee retention. This platform is built",
    },
    {
      id: 2,
      title: "Optical Character",
      content:
        "EventHex stands out by tackling two key challenges that traditional event management often struggles with: creating personalized experiences and ensuring attendee retention. This platform is built",
    },
  ];

  // const handleCopy = (id) => {
  //   const resource = resources.find((r) => r.id === id);
  //   if (resource) {
  //     navigator.clipboard.writeText(resource.content);
  //   }
  // };

  // const handleShare = (id) => {
  //   // Share functionality would go here
  // };

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-6 lg:p-8">
      <Menu />

      <div className="flex items-center justify-between gap-3 pb-6">
        <div className="flex items-center gap-2">
          <img
            src={resgreen}
            alt="overviewList"
            className="w-5 h-5 sm:w-8 sm:h-8"
          />
          <h2 className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[18px] text-[#FFFFFF]">
            Resource
          </h2>
        </div>
        <div className="flex items-center gap-2">
          {/* Twitter Link */}
          <Link to="/overview/resource">
            <div className="flex items-center gap-2 border-0 bg-[#5BF5FF] text-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={mentionedblack}
                alt="Twitter"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <button className="text-[12px] sm:text-[14px]">Mentioned</button>
            </div>
          </Link>
          {/* LinkedIn Link */}
          <Link to="/overview/files">
            <div className="flex items-center gap-2 border-0 bg-[#222534] text-[#5BF5FF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={filesgreen}
                alt="LinkedIn"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <button className="text-[12px] sm:text-[14px]">Files</button>
            </div>
          </Link>
        </div>
      </div>

      <div className="px-4 bg-[#282C3A] text-[#CDD0D5] font-inter text-[14px] rounded-lg py- ">
        {/* Header */}
        <div className="flex items-center gap-2 text-cyan-400 py-4">
          <img
            src={rescontimg}
            className="w-3 h-3 xs:w-5 xs:h-5 sm:w-6 sm:h-6"
          />
          <h1 className="font-inter text-white text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-medium">
            Online Learning Resources
          </h1>
        </div>

        {/* Resource Cards */}
        <div className="">
          {resources.map((resource) => (
            <div
              key={resource.id}
              className="bg-gray-800 rounded-lg p-4 xs:p-4 sm:p-5 md:p-6 lg:p-7 mb-4"
            >
              {/* Resource Title */}
              <h2
                className="text-white font-medium font-inter
            text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl pb-4"
              >
                {resource.id}. {resource.title}
              </h2>

              {/* Resource Content */}
              <p
                className="text-[#CDD0D5] font-inter 
            text-xs xs:text-sm sm:text-base md:text-base lg:text-lg xl:text-xl
            leading-relaxed"
              >
                {resource.content}
              </p>

              {/* Action Buttons */}
              <div>
                <MenuButton
                  img1={share}
                  img1tText={"Share"}
                  img2={copy}
                  img2Text={"Copy"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceList;
