import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-orkut.svg';
import userImage from '../assets/iuricode 1.svg';
import './navbar.css'
import searchIcon from '../assets/MagnifyingGlass.svg'

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className='navbar-content'>
        <div className="nav-group-left">
          <img className='img-nav' src={logo} alt="Logo" onClick={() => navigate('/')} />
          <span className="nav-link">Início</span>
          <span className="nav-link profile-link">Perfil</span>
          <span className="nav-link">Comunidades</span>
          <span className="nav-link">Jogos</span>
        </div>
        <div className="nav-group-right">
          <div className="search-bar-wrapper">
            <img src={searchIcon} alt="Pesquisar" className="search-icon" />
            <input type="search" placeholder="Pesquisar no Orkut" className="search-bar" />
          </div>
          <div className="user-profile">
            <img src={userImage} alt="Usuário" width="20" height="20" />
            <span className="user-name">Iuri Silva</span>
            <i className="arrow-down"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
