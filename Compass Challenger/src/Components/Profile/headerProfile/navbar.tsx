import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo-orkut.svg';
import userImage from '../../../assets/iuricode 1.svg';
import '../headerProfileCss/navbar.css'
import searchIcon from '../../../assets/MagnifyingGlass.svg'
import  '../../../AppProfile.css'

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navbar">
        <div className='navbar-content'>
          <div className="nav-group-left">
            <img className='img-nav' src={logo} alt="Logo" onClick={() => navigate('/')} />
            <span className="nav-link desktop-only">Início</span>
            <span className="nav-link desktop-only profile-link">Perfil</span>
            <span className="nav-link desktop-only">Comunidades</span>
            <span className="nav-link desktop-only">Jogos</span>
          </div>
          <div className="nav-group-right">
            <div className="search-bar-desktop-wrapper desktop-only">
              <img src={searchIcon} alt="Pesquisar" className="search-icon" />
              <input type="search" placeholder="Pesquisar no Orkut" className="search-bar" />
            </div>
            <div className="user-profile">
              <img src={userImage} alt="Usuário" className="user-profile-img" />
              <span className="user-name desktop-only">Iuri Silva</span>
              <i className="arrow-down desktop-only"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className="search-bar-mobile-wrapper mobile-only">
        <img src={searchIcon} alt="Pesquisar" className="search-icon" />
        <input type="search" placeholder="Pesquisar no Orkut" className="search-bar" />
      </div>
    </>
  );
};

export default Navbar;
