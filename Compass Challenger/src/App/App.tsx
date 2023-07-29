

// import './App.css'


import {  Route, Routes } from "react-router-dom"


import { MainLogin } from "../Components/Login/MainLogin/MainLogin"
import Main from "../Components/Register/MainRegister/Main"



export const App = () =>{
  
  
  return (
    <>
    
      <Routes>
        <Route path="/" element={<MainLogin />}/>
        <Route path="/Register" element={<Main />}/>
      </Routes>
        

    </>
    )
}
