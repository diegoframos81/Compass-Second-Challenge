import {BrowserRouter, Routes, Route} from 'react-router-dom'

// CSS
import './App.css'

// components
import Header from './components/HeaderRegister/Header'
import Footer from './components/FooterRegister/Footer'
import Main from './components/MainRegister/Main'
import Step2 from './components/MainRegister/Step2'


function App() {

  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/step2" element={<Step2 />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
