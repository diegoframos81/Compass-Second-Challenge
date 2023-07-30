
import './App'


import {  Route, Routes } from "react-router-dom"


import { MainLogin } from "../Components/Login/MainLogin/MainLogin"
import Main from "../Components/Register/MainRegister/Main"
import Step2 from "../Components/Register/MainRegister/Step2"


export const App = () =>{
  
  
  return (
    <>
    
      <Routes>
        <Route path="/" element={<MainLogin />}/>
        <Route path="/Register" element={<Main />}/>
        <Route path="/Step2" element={<Step2 />}/>
      </Routes>
      
    </>
  )
}
