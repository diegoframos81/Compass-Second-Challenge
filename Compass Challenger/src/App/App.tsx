
import './App'
import "../AppProfile.css";

import {  Route, Routes } from "react-router-dom"

import { UserProvider } from '../Components/Profile/footerProfile/userContext';
import { MainLogin } from "../Components/Login/MainLogin/MainLogin"
import Main from "../Components/Register/MainRegister/Main"
import Step2 from "../Components/Register/MainRegister/Step2"
import EditProfileLayout from '../Components/Profile/footerProfile/editProfileLayout'


import Layout from '../Components/Profile/footerProfile/layout'


export const App = () =>{
  
  
  return (
    <>
      <UserProvider>
        <Routes>
                <Route path="/" element={<MainLogin />}/>
                <Route path="/Register" element={<Main />}/>
                <Route path="/Step2" element={<Step2 />}/>
                <Route path="/App" element={<Layout />}/>
                <Route path="/edit" element={<EditProfileLayout />} />
        </Routes>
      </UserProvider>
      
    </>
    
  )
}
