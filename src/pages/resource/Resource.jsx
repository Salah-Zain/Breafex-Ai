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
      id: 1,
      img: adobepdf,
      heading: "Presentation Slides",
      subHead: "Pdf.2.4 MB",
      downloadImg: download,
    },
  ];

  return (
    <div className="bg-gray-900 h-screen text-white p-4 sm:p-6 lg:p-8">
      <Menu />

      {/* Content Section */}
      <div className="flex items-center gap-2 py-2">
        <img src={socialcontent} alt="" />
        <h2 className="font-inter font-medium text-[14px] sm:text-[16px] text-[#FFFFFF]">
          Resources
        </h2>
      </div>

      {resource.map((res) => {
        return (
          <>
            {/* Content Section */}
            <div className="space-y-4 py-4" key={res.id}>
              {/* Presentation Slides */}
              <div className="bg-[#282C3A] p-4 rounded-lg flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={res.img} alt="" className="w-[34px] h-[34px]" />
                  <div className="">
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-inter leading-tight">
                      {res.heading}
                    </h2>
                    <p>{res.subHead}</p>
                  </div>
                </div>
                <div className="w-[34px] h-[34px] border border-[#5BF5FF] rounded-lg flex items-center justify-center">
                  <img src={res.downloadImg} alt="" className="" />
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Resource;
