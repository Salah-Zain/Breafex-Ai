import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeUi from "./pages/Home/Home";
import Sessions from "./pages/sessions/Sessions";
import Bookmarks from "./pages/bookmarks/Bookmarks";
import ProfileCard from "./pages/profile/Profile";
import Overview from "./pages/overview/Overview";
import OverviewTakeAway from "./pages/overview-takeAway/OverviewTakeAway";
import LinkedIn from "./pages/social/LinkedIn";
import Twitter from "./pages/social/Twitter";
import Resource from "./pages/resource/Resource";
// import TakeAway from "./pages/bookmarks/TakeAway";
import Summary from "./pages/overview/Summary";
import Files from "./pages/resource/Files";
import SigninForm from "./pages/form/SignInForm";
import LoginForm from "./pages/form/loginForm";
import FormOtp from "./pages/formOtp/FormOtp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeUi />} />
        <Route path="/session" element={<Sessions />} />
        <Route path="/bookmark" element={<Bookmarks />} />
        <Route path="/takeaway" element={<OverviewTakeAway />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/overview/takeaway" element={<OverviewTakeAway />} />
        <Route path="/social/linkedin" element={<LinkedIn />} />
        <Route path="/social/twitter" element={<Twitter />} />
        <Route path="/overview/resource" element={<Resource />} />
        <Route path="/overview/files" element={<Files />} />
        <Route path="/signform" element={<SigninForm />} />
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/formotp" element={<FormOtp />} />
      </Routes>
    </Router>
  );
};

export default App;
