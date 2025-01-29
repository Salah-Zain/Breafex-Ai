import React from "react";
import CalendarStrip from "../../calendarStrip/CalendarStrip.jsx";
import Card from "../../components/Card.jsx";
import FooterNav from "../../components/NavBar/FooterNav.jsx";

const Sessions = () => {
  return (
    <>
      <div>
        <CalendarStrip />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <FooterNav />
    </>
  );
};

export default Sessions;
