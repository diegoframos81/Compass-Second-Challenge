import React from 'react';
import '../footerProfileCss/userProfile.css';
import UserInfo from './userInfo';
import UserTags from './userTags';

const UserProfile: React.FC = () => {
  return (
    <div className="user-profile-container">
      <div className="user-profile-box">
        <div className="user-info">
          <span className='welcome-text'>Boa tarde, Iuri Silva</span>
          <div className="balloon-box">Programar sem café é igual poeta sem poesia.</div>
        </div>
        <UserTags/>
        <UserInfo/>
      </div>
    </div>
  );
};

export default UserProfile;
