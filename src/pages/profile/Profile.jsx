import React from "react";
import { banner, location, mail, phone, profile } from "../../assets";
import FooterNav from "../../components/NavBar/FooterNav";

const ProfileCard = () => {
  return (
    <div className=" h-screen bg-gray-900 flex flex-col justify-between">
      <div className="bg-gray-900 h-auto  flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {/* Banner Card */}
          <div className="relative bg-cyan-50 rounded-2xl mb-16 sm:mb-20">
            <div className="w-full">
              <div className="flex justify-between items-start">
                <img src={banner} alt="QR Code" className="w-full" />
              </div>
            </div>

            {/* Profile Image */}
            <div className="absolute top-36 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-gray-900 overflow-hidden">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 bg-cyan-500 rounded-full p-2">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="text-center text-white mt-4">
            <h2 className="text-xl sm:text-2xl font-semibold">Emma Wrights</h2>
            <p className="text-gray-400 text-sm sm:text-base mt-1">
              Product Head
            </p>
            <p className="text-gray-400 text-sm sm:text-base">
              George Digital solutions
            </p>
          </div>

          {/* Contact Details */}
          <div className="mt-8 space-y-4 text-white">
            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <img src={location} className="w-5 h-5 text-cyan-500" />
              <div>
                <p className="text-gray-400 text-sm">Address</p>
                <p className="text-[16px] text-[#FFFFFF]">
                  Vellimadukunnu, Calicut
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <img src={mail} className="w-5 h-5 text-cyan-500" />
              <div>
                <p className="text-gray-400 text-sm">Mail id</p>
                <p className="text-[16px] text-[#FFFFFF]">
                  ameenaahsan@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-gray-800/50 p-4 rounded-lg">
              <img src={phone} className="w-5 h-5 text-cyan-500" />
              <div>
                <p className="text-gray-400 text-sm">Phone Number</p>
                <p className="text-[16px] text-[#FFFFFF]">984179-90837</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterNav />
    </div>
  );
};

export default ProfileCard;
