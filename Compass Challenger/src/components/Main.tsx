import React from 'react'

//images
import login_image from '../assets/login-image.svg'
import bg from '../assets/bg.svg'
import ps_orkut from '../assets/ps_orkut.svg'

//
import Styles from './Main.module.css'

const Main = () => {
  return (
      <main className={Styles.main}>
        <img src={login_image} alt="Orkut" />
        <div className={Styles.bg_image}>
          <img src={bg} alt="Background" />
        </div>
        <p>Conecta-se aos seus amigos e familiares <br />
        usando recados e mensagens instantâneas</p>
        <form className={Styles.form}>
            <img src={ps_orkut} alt="ps_orkut" />
            <h2>Criar conta</h2>
            <div className={Styles.nameInput}>
                <label htmlFor="name"></label>
                <input type="text" placeholder="Nome" id="name"/>
            </div>

            <label htmlFor="email"></label>
            <input type="text" placeholder="E-mail" id="email"/>

            <label htmlFor="bornDate"></label>
            <input type="date" id="bornDate" />

            <label htmlFor="city"></label>
            <input type="text" placeholder="Cidade" id="city"/>

            <label htmlFor="state"></label>
            <input type="text" placeholder="Estado" id="state"/>
            
            <label htmlFor="password"></label>
            <input type="password" placeholder="Senha" id="password"/>

            <label htmlFor="passwordConfirmation"></label>
            <input type="password" placeholder="Confirmar senha" id="npasswordConfirmationame"/>

            <input type="submit" value="Criar conta" className={Styles.submitButton} />
        </form>
    </main>
  )
}

export default Main