import "./App.css";
import Profile from "./components/profile-card";
import EditProfileButton from "./components/edit-profile-button";
import Friends from "./components/friends-card";
import Communities from "./components/communities-card";
import Navbar from "./components/navbar";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UserProfile from "./components/userProfile";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="body-container">
        <div className="body-content">

          <div className="profile-section left-section">
            <Profile />
            <EditProfileButton />
          </div>

          <div className="profile-section center-section">
            <UserProfile />
          </div>

          <div className="profile-section right-section">
            <Friends />
            <Communities />
          </div>

        </div>
      </div>
    </Router>
  )
};

export default App;
