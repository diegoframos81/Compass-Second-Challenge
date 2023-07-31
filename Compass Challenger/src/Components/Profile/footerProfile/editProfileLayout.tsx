
import React, { useEffect, useState } from 'react';
import Navbar from '../headerProfile/navbar';
import Profile from './profile-card';

import Friends from './friends-card';
import Communities from './communities-card';

import EditProfile from './editProfile';

const EditProfileLayout: React.FC = () => {
  let isMobile: boolean = window.innerWidth < 1280;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if(windowWidth < 1280) {
      
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
            
          </div>

          {!isMobile && 
          <div className="profile-section center-section">
            <EditProfile/>
          </div>
          }

          <div className="profile-section right-section">
            <Friends />
            {isMobile && 
              <EditProfile/>
            }
            <Communities />
          </div>

        </div>
      </div>
    </>
  )
};

export default EditProfileLayout;
