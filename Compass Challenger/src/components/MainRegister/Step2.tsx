import React from 'react'

//images
import login_image from '../../assets/login-image.svg'
import bg from '../../assets/bg.svg'
import ps_orkut from '../../assets/ps_orkut.svg'
import profile from '../../assets/profile.png'

//CSS
import Styles from '../MainRegister/Main.module.css'

const Step2:React.FC = () => {

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

      <form className={Styles.form2}>
        <div className={Styles.form_header}>
          <img src={ps_orkut} alt="ps_orkut" />
          <h2>Complete seu cadatro!</h2>
        </div>
        
        <div className={Styles.form2_profile_picture}>
          <label htmlFor="profilePicture">Selecione uma foto para perfil: </label>
          <img src={profile} alt="profilePicture" />
          <input type="file" />
        </div>

        <div className={Styles.form2_container}>
          <div>
            <label htmlFor="selfDescription">Quem sou eu: </label>
            <input type="text" name="autoDescription"/>
          </div>

          <div>
            <label htmlFor="interests">Interesses no Orkut: </label>
            <input type="text" name="interests"/>
          </div>

          <div>
            <label htmlFor="gender">Gênero: </label>
            <select id="gender">
              <option defaultValue={""}></option>
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="other">Outro</option>
            </select>
          </div>

          <div>
            <label htmlFor="relationship"> Status de relacionamento: </label>
            <select id="relationship">
              <option defaultValue={""}></option>
              <option value="male">Solteiro</option>
              <option value="female">Namorando</option>
              <option value="other">Casado</option>
              <option value="other">Divorciado</option>
            </select>
          </div>

          <div>
            <label htmlFor="children">Filhos: </label>
            <select id="children">
              <option defaultValue={""}></option>
              <option value="zero">0</option>
              <option value="one">1</option>
              <option value="two">2</option>
              <option value="three">3</option>
              <option value="four">4</option>
            </select>
          </div>

          <div>
            <label htmlFor="smoke">Hábitos de fumo: </label>
            <select id="smoke">
              <option defaultValue={""}></option>
              <option value="yes">Sim</option>
              <option value="no">Não</option>
            </select>
          </div>

          <div>
            <label htmlFor="drink">Bebida: </label>
            <select id="drink">
              <option defaultValue={""}></option>
              <option value="zero">Sim</option>
              <option value="one">Não</option>
            </select>
          </div>

          <div>
            <label htmlFor="favoritsMusics"> Músicas favoritas: </label>
            <input type="text" name="favoritsMusics"/>
          </div>

          <div>
            <label htmlFor="favoritsMovies"> Filmes favoritos: </label>
            <input type="text" name="favoritsMovies"/>
          </div>
        </div>
        <div className={Styles.form2_submit}>
          <input type="submit" value="Finalizar Cadastro"/>
        </div>
      </form>
    </main>
  )
}

export default Step2