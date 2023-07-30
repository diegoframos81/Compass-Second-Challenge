
import './App'


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
<<<<<<< HEAD
        

=======
>>>>>>> 9692284a76c1dbefeabd893135daca35a6f0bbf2
    </>
    )
}
