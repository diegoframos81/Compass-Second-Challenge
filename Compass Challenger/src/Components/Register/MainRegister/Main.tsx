import React, {FormEvent } from 'react'

//images
import login_image from '../../assets/login-image.svg'
import bg from '../../assets/bg.svg'
import ps_orkut from '../../assets/ps_orkut.svg'

//CSS
import Styles from '../MainRegister/Main.module.css'

const Main:React.FC = () => {
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href='/Step2'
  };

  return (
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

            <input type="submit" value="Criar conta"/>
        </form>
    </main>
  )
}

export default Main