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
      <div className="spacer"></div>
      <div className="container">
        <div className="profile-section">
          <Profile />
          <div className="spaced-component">
            <EditProfileButton />
          </div>
        </div>
        <div className="user-profile-section">
          <UserProfile/>
        </div>
        <div className="friends-communities-section">
          <Friends />
          <div className="spaced-component">
            <Communities />
          </div>
        </div>
      </div>
    </Router>
  )
}
;

export default App;
