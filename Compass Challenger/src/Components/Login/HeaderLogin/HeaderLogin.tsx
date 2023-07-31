import LogoOrkut from "../../../assets/logo-orkut.svg"

import Style from "../HeaderLogin/index.module.css"

export const HeaderLogin = () => {
    return (
        <div className='App'>
            <header>
                <nav className={Style.nav}>
                    <img src={LogoOrkut} alt="Orkut" />
                    <ul>
                        <li>Sobre o Orkut</li>
                        <li>Centro de segurança</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}