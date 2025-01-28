import React from "react";
import { Routes, Route } from "react-router";
import Sessions from "../sessions/Sessions";
import HomeUi from "../Home/Home";
import Bookmarks from "../bookmarks/Bookmarks";
import Profile from "../profile/Profile";

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeUi />} />
      <Route path="/session" element={<Sessions />} />
      <Route path="/bookmarks" element={<Bookmarks />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default UserRoutes;
