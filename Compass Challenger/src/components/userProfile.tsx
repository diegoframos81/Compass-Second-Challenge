import React from 'react';
import './userProfile.css';
import UserInfo from './userInfo';
import UserTags from './userTags';

const UserProfile: React.FC = () => {
  return (
    <div className="user-profile-container">
      <div className="user-profile-box">
        <div className="user-info">
          <h2>Boa tarde, Iuri Silva</h2>
          <div className="balloon-box">Programar sem café é igual poeta sem poesia.</div>
        </div>
        <UserTags/>
        <UserInfo/>
      </div>
    </div>
  );
};

export default UserProfile;
