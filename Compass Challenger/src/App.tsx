import "./App.css";
import Profile from "./components/profile-card";
import EditProfileButton from "./components/edit-profile-button";
import Friends from "./components/friends-card";
import Communities from "./components/communities-card";
import Navbar from "./components/navbar";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import UserProfile from "./components/userProfile";
import "./App.css";

const App: React.FC = () => {
  let isMobile = window.innerWidth < 1280;
  const [windowWidth, setIsMobile] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth);
    };

    if(windowWidth < 1280) {
      isMobile = true;
    } else {
      isMobile = false;
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  });

  return (
    <Router>
      <Navbar />
      <div className="body-container">
        <div className="body-content">

          <div className="profile-section left-section">
            <Profile />
            <EditProfileButton />
          </div>

          {isMobile ? null : 
          <div className="profile-section center-section">
            <UserProfile />
          </div>
          }

          <div className="profile-section right-section">
            <Friends />
            {isMobile ? <UserProfile /> : null}
            <Communities />
          </div>

        </div>
      </div>
    </Router>
  )
};

export default App;
