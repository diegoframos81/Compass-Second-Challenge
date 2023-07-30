import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserProvider } from './components/footerProfile/userContext';
import Layout from './components/footerProfile/layout';
import "./App.css";

const App: React.FC = () => {
  return (
    <UserProvider>
      <Router>
        <Layout />
      </Router>
    </UserProvider>
  )
};

export default App;
