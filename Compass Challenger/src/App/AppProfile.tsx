import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from '../Components/Profile/footerProfile/userContext';
import Layout from '../Components/Profile/footerProfile/layout';
import "../AppProfile.css";

export const AppProfile: React.FC = () => {
  return (
    <>
      
      <UserProvider>
        <Router>
          <Layout />
        </Router>
      </UserProvider>
    </>
  )
};


