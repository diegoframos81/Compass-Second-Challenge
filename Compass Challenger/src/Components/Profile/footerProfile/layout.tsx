
import React, { useEffect, useState } from 'react';
import Navbar from '../headerProfile/navbar';
import Profile from './profile-card';
import EditProfileButton from './edit-profile-button';
import Friends from './friends-card';
import Communities from './communities-card';
import { Routes, Route } from 'react-router-dom';
import UserProfile from './userProfile';
import EditProfile from './editProfile';

const Layout: React.FC = () => {
  let isMobile: boolean = window.innerWidth < 1280;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
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
  }, [windowWidth]);

  return (
    <>
      <Navbar />
      <div className="body-container">
        <div className="body-content">

          <div className="profile-section left-section">
            <Profile />
            <EditProfileButton />
          </div>

          {!isMobile && 
          <div className="profile-section center-section">
            <Routes>
              <Route path="/" element={<UserProfile />} />
              <Route path="/edit" element={<EditProfile />} />
            </Routes>
          </div>
          }

          <div className="profile-section right-section">
            <Friends />
            {isMobile && 
              <Routes>
                <Route path="/" element={<UserProfile />} />
                <Route path="/edit" element={<EditProfile />} />
              </Routes>
            }
            <Communities />
          </div>

        </div>
      </div>
    </>
  )
};

export default Layout;
