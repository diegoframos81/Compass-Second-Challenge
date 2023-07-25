import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo-orkut.svg';
import userImage from '../assets/iuricode 1.svg';
import './navbar.css'

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-group">
        <img className='img-nav' src={logo} alt="Logo" onClick={() => navigate('/')}/>
        <span className="nav-link">Início</span>
        <span className="nav-link profile-link">Perfil</span>
        <span className="nav-link">Comunidades</span>
        <span className="nav-link">Jogos</span>
        <input type="search" placeholder="Pesquisar no Orkut" className="search-bar"/>
        <div className="user-profile">
          <img src={userImage} alt="Usuário" width="40" height="40" />
          <span className="user-name">Nome do Usuário</span>
          <i className="arrow-down"></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
