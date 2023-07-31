<<<<<<< HEAD
import LogoOrkut from "../../../assets/logo-orkut.svg"
=======
import LogoOrkut from "../../../../src/assets/logo-orkut.svg"
>>>>>>> c788251aa0fff3f498e4a6e255f1cc6a7ca2132f

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