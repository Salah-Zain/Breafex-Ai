import React from "react";
import { banner, transparent } from "../../assets/index.js";
import Card from "../../components/Card.jsx";
import FooterNav from "../../components/NavBar/FooterNav.jsx";
import { Link } from "react-router";

const HomeUi = () => {
  return (
    <>
      <div className=" bg-gray-900 text-white">
        {/* Header */}
        <header className=" pb-4 pt-3  flex items-center justify-between bg-grey-900 px-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 border-[1px] border-solid">
              <img src={transparent} alt="Profile" />
            </div>

            <div className="">
              <p className="text-[12px] font-inter font-extralight leading-4">
                Welcome Back
              </p>
              <h1 className=" text-gray-300 font-inter font-semibold leading-[1.21]">
                Ahmed Zidane ! 🤟🏻
              </h1>
            </div>
          </div>
        </header>

        {/* Banner */}
        <div className="px-4">
          <div className=" rounded-xl">
            <img
              src={banner}
              alt="KEDDA EXPO"
              className="w-full md:h-40 lg:h-48 object-contain"
            />
          </div>
        </div>

        <div>
          <p className="p-4 font-[500] text-[16px] text-base font-inter">
            Latest Updated
          </p>
        </div>
      </div>

      {/* Event List */}
      <Link to="/overview">
      <Card />
      </Link>
      <Card />
      <Card />
      <Card />

      {/*

      {/* Bottom Navigation */}
      <FooterNav />
    </>
  );
};

export default HomeUi;
