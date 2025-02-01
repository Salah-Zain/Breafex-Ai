import React from "react";
import Menu from "../../components/menu/Menu";
import { adobepdf, download, socialcontent } from "../../assets";

const Resource = () => {
  const resource = [
    {
      id: 0,
      img: adobepdf,
      heading: "Presentation Slides",
      subHead: "Pdf.2.4 MB",
      downloadImg: download,
    },
    {
      id: 1,
      img: adobepdf,
      heading: "Case Study Document",
      subHead: "Pdf.2.4 MB",
      downloadImg: download,
    },
    {
      id: 2,
      img: adobepdf,
      heading: "Preparation Slides",
      subHead: "Pdf.2.4 MB",
      downloadImg: download,
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen text-white p-4 sm:p-6 lg:p-8">
      <Menu />

      {/* Content Section */}
      <div className="flex items-center gap-2 py-2">
        <img
          src={socialcontent}
          alt="Social Content"
          className="w-6 h-6 sm:w-8 sm:h-8"
        />
        <h2 className="font-inter font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] text-[#FFFFFF]">
          Resources
        </h2>
      </div>

      {/* Resource List */}
      <div className="space-y-4 py-4">
        {resource.map((res) => (
          <div
            className="bg-[#282C3A] p-4 rounded-lg flex items-center justify-between"
            key={res.id}
          >
            <div className="flex items-center gap-2">
              <img
                src={res.img}
                alt="PDF Icon"
                className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px]"
              />
              <div>
                <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-inter leading-tight">
                  {res.heading}
                </h2>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] text-[#CDD0D5]">
                  {res.subHead}
                </p>
              </div>
            </div>
            <div className="w-[34px] h-[34px] sm:w-[40px] sm:h-[40px] border border-[#5BF5FF] rounded-lg flex items-center justify-center">
              <img
                src={res.downloadImg}
                alt="Download"
                className="w-[16px] h-[16px] sm:w-[20px] sm:h-[20px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;