import React, { ReactElement } from 'react';

import { HeaderLogin } from "../HeaderLogin/HeaderLogin"
import { FooterLogin } from "../FooterLogin/FooterLogin"


import ImageLogin from '../../../../src/assets/imageform.svg'
import LogoIcon from "../../../../src/assets/ps_orkut.svg"
import Bg from "../../../../src/assets/bg.svg"
import Style from "../MainLogin/index.module.css"
import { useNavigate } from 'react-router-dom';


export const MainLogin: React.FC = (): ReactElement => {

    const navigate = useNavigate();
    return (
        <>
        <HeaderLogin />
            <main className={Style.main}>
                <img src={ImageLogin} alt="Orkut" />
                <div className={Style.bg_image}>
                    <img src={Bg} alt="Background" />
                </div>
                <p>Conecta-se aos seus amigos e familiares <br />
                    usando recados e mensagens instantâneas</p>
                

                <form className={Style.form} >
                
                    <img src={LogoIcon} alt="ps_orkut" />
                        <h2>Acesse o Orkut</h2>


                    <label htmlFor="email"></label>
                    <input type="text" placeholder="E-mail" id="email" />

                    <label htmlFor="password"></label>
                    <input type="password" placeholder="Senha" id="password" />

                    <div className={Style.passwordCheck}>
                        <input type="checkbox" name="remember-password" className={Style.inputCheckbox}/>
                        <label className={Style.spanCheck} htmlFor="remember-password">Lembrar minha senha</label>
                    </div>

                    <button onClick={() =>navigate("/App")} className={Style.buttonFirstChild} >Entrar na conta</button>
                    <button onClick={() =>navigate("/Register")} className={Style.buttonSecondChild}>Criar uma conta</button>
                    <a className={Style.passwordForgot}>Esqueci a minha senha</a>
                </form>
            </main>
            <FooterLogin />
            {/* Router */}

            
        </>
    );
};


