import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeUi from "./pages/Home/Home";
import Sessions from "./pages/sessions/Sessions";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import ProfileCard from "./pages/profile/Profile";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeUi />} />
        <Route path="/session" element={<Sessions />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<ProfileCard />} />
      </Routes>{" "}
    </Router>
  );
};

export default App;
