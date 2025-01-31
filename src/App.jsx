import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeUi from "./pages/Home/Home";
import Sessions from "./pages/sessions/Sessions";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import ProfileCard from "./pages/profile/Profile";
import Overview from "./pages/overview/Overview";
import TakeAway from "./pages/takeAway/TakeAway";
import LinkedIn from "./pages/social/LinkedIn";
import Twitter from "./pages/social/Twitter";
import Resource from "./pages/resource/Resource";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeUi />} />
        <Route path="/session" element={<Sessions />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/takeaway" element={<TakeAway />} />
        <Route path="/linkedin" element={<LinkedIn />} />
        <Route path="/twitter" element={<Twitter />} />
        <Route path="/resource" element={<Resource />} />
      </Routes>
    </Router>
  );
};

export default App;
