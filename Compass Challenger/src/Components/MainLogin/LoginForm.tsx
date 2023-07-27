import React, { ReactElement } from 'react';

import ImageLogin from '/Orkut Project/Compass Challenger/src/assets/imageform.svg'
import LogoIcon from "/Orkut Project/Compass Challenger/src/assets/ps_orkut.svg"
import Bg from "/Orkut Project/Compass Challenger/src/assets/bg.svg"
import Style from "../MainLogin/Forms.module.css"


export const LoginForm: React.FC = (): ReactElement => {
    return (
        <>
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
                        <input type="checkbox" className={Style.inputCheckbox}/>
                        <span className={Style.spanCheck}>Lembrar minha senha</span>
                    </div>

                    <button className={Style.button}>Entrar na conta</button>
                    <button className={Style.button}>Criar uma conta</button>
                    <a>Esqueci a minha senha</a>
                </form>
            </main>
        </>
    );
};


