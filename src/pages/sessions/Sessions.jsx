import React from "react";
import CalendarStrip from "../../calendarStrip/CalendarStrip.jsx";
import Card from "../../components/Card.jsx";
import FooterNav from "../../components/NavBar/FooterNav.jsx";
import { Link } from "react-router";

const Sessions = () => {
  return (
    <div className="bg-gray-900 h-screen flex flex-col justify-between">
      <div className="w-full  bg-gray-900 text-gray-100">
        <div className="p-4">
          <CalendarStrip />
        </div>
        <Link to="/overview">
          <Card />
          <Card />
          <Card />
          <Card />
        </Link>
      </div>

      <FooterNav />
    </div>
  );
};

export default Sessions;
