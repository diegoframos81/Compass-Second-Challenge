import React, {FormEvent, useState } from 'react'

//images
import login_image from '../../assets/login-image.svg'
import bg from '../../assets/bg.svg'
import ps_orkut from '../../assets/ps_orkut.svg'

//CSS
import Styles from '../MainRegister/Main.module.css'

const Main:React.FC = () => {

  const [inputType, setInputType] = useState<'text'|'date'>('text')

  const handleFocus = () => {
    setInputType('date');
  }
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href='/Step2'
  };

  return (
      <main className={Styles.main}>

        <div className={Styles.login_banner}>
          <img src={login_image} alt="loginBanner" />
        </div>
        <div className={Styles.bg_image}>
          <img src={bg} alt="Background" />
        </div>

        <p>Conecta-se aos seus amigos e familiares <br />
        usando recados e mensagens instantâneas</p>

        <form onSubmit={handleSubmit} className={Styles.form1}>

            <img src={ps_orkut} alt="ps_orkut" />
            <h2>Criar conta</h2>

            <input 
              type="text" 
              placeholder="Nome" 
              id="name" 
              minLength={2}
              required
            />


            <input 
              type="text" 
              placeholder="E-mail" 
              id="email" 
              required
            />

            <input 
              type={inputType} 
              onFocus={handleFocus} 
              placeholder="Data de nascimento" 
              id="birthDate"
              required
            />

            <input 
              type="text" 
              placeholder="Cidade" 
              id="city" 
              required
            />

            <input 
              type="text" 
              placeholder="Estado" 
              id="state" 
              required
            />
            
            <input 
              type="password" 
              placeholder="Senha" 
              id="password" 
              minLength={5}
              maxLength={15}
              required
            />

            <input 
              type="password" 
              placeholder="Confirmar senha" 
              id="confirmPassword" 
              required
            />

            <input type="submit" value="Criar conta"/>
        </form>
    </main>
  )
}

export default Main