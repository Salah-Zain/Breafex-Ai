import React from "react";
import HomeUi from "./Home/Home";
import { BrowserRouter as Router } from "react-router";
import UserRoutes from "./routes/userRoutes";

const App = () => {
  return (
    <Router>
      <UserRoutes />
    </Router>
  );
};

export default App;
