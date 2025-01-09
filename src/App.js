import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

import Navbar from "./Navbar";
import Profile from "./Profile";
import Home from "./Home";

const Settings = () => <div>Settings Page</div>;
const Logout = () => <div>Logout Page</div>;
const App = () => {

  return (
    <Router>
      <Navbar />
      <div className="content">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;