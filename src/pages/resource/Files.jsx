import React from "react";
import Menu from "../../components/menu/Menu";
import {
  resourceimg,
  adobepdf,
  download,
  linkedinblue,
  socialcontent,
  twitterblack,
  resgreen,
  filesblack,
  mentionedblack,
  mentionedgreen,
} from "../../assets/index";
import { Link } from "react-router";

const Files = () => {
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
    <div className="bg-[#10131A] min-h-screen text-white p-4 sm:p-6 lg:p-8">
      <Menu />

      {/* Content Section */}
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
            <div className="flex items-center gap-2 border-0 bg-[#222534] text-[#5BF5FF] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={mentionedgreen}
                alt="Twitter"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <button className="text-[12px] sm:text-[14px]">Mentioned</button>
            </div>
          </Link>
          {/* LinkedIn Link */}
          <Link to="/overview/files">
            <div className="flex items-center gap-2 border-0 bg-[#5BF5FF] text-[#222534] px-2 sm:px-4 py-1 sm:py-2 rounded-lg">
              <img
                src={filesblack}
                alt="LinkedIn"
                className="w-4 h-4 sm:w-6 sm:h-6"
              />
              <button className="text-[12px] sm:text-[14px]">Files</button>
            </div>
          </Link>
        </div>
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

export default Files;
