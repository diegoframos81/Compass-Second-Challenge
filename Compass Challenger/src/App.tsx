import './App.css'
import Profile from './components/profile-card'
import EditProfileButton from './components/edit-profile-button'
import Friends from './components/friends-card'
import Communities from './components/communities-card'
import Navbar from './components/navbar'
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import UserProfile from './components/userProfile';

const App: React.FC = () => {

  return (
<Router>
    <Navbar />
    <Profile />
    <EditProfileButton />
    <Friends />
    <Communities />
    {/* // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </> */}
    </Router>
  )
}

export default App
