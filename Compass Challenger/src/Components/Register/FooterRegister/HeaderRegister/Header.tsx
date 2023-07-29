//image
import logo from '/Orkut Project/Compass Challenger/src/assets/logo-orkut.svg'

//CSS
import Styles from './Header.module.css'

const Header = () => {
  return (
    <header>
        <nav className={Styles.nav}>
            <img src={logo} alt="Orkut" />
            <ul>
                <li>Sobre o Orkut</li>
                <li>Centro de segurança</li>
            </ul>
        </nav>
    </header>
  )
}

export default Header