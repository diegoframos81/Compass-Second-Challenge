import React, {FormEvent } from 'react'

//images
import login_image from '/Orkut Project/Compass Challenger/src/assets/imageform.svg'
import bg from '/Orkut Project/Compass Challenger/src/assets/bg.svg'
import ps_orkut from '/Orkut Project/Compass Challenger/src/assets/ps_orkut.svg'

//CSS
import Styles from '../MainRegister/Main.module.css'
import Header from '../HeaderRegister/Header'
import Footer from '../FooterRegister/Footer'
import { useNavigate } from 'react-router-dom';
const Main:React.FC = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // window.location.href='/Step2'
  };

  return (
    <>
    <Header />
      <main className={Styles.main}>

        <img src={login_image} alt="Orkut" />
        <div className={Styles.bg_image}>
          <img src={bg} alt="Background" />
        </div>

        <p>Conecta-se aos seus amigos e familiares <br />
        usando recados e mensagens instantâneas</p>

        <form onSubmit={handleSubmit} className={Styles.form1}>
            <img src={ps_orkut} alt="ps_orkut" />
            <h2>Criar conta</h2>
            <div className={Styles.nameInput}>
              <label htmlFor="name"></label>
              <input type="text" placeholder="Nome" id="name"/>
            </div>

            <label htmlFor="email"></label>
            <input type="text" placeholder="E-mail" id="email"/>

            <label htmlFor="birthDate"></label>
            <input type="date" id="birthDate" />

            <label htmlFor="city"></label>
            <input type="text" placeholder="Cidade" id="city"/>

            <label htmlFor="state"></label>
            <input type="text" placeholder="Estado" id="state"/>
            
            <label htmlFor="password"></label>
            <input type="password" placeholder="Senha" id="password"/>

            <label htmlFor="confirmPassword"></label>
            <input type="password" placeholder="Confirmar senha" id="confirmPassword"/>

            <input type="submit" onClick={() =>navigate("/Step2")} value="Criar conta"/>
        </form>
    </main>
    <Footer />
    </>
  )
}

export default Main