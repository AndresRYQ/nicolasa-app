import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">
            <h1>AURA</h1>
          </Link>
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">INICIO</Link></li>
            <li><Link to="/espacio">FILOSOFÍA</Link></li>
            <li><a href="/#menu">MENÚ DEGUSTACIÓN</a></li>
            <li><Link to="/espacio">ESPACIO</Link></li>
            <li><a href="/#reservas">RESERVAS</a></li>
          </ul>
        </nav>
        <div className="header-actions">
          <button className="btn-reservar">RESERVAR MESA</button>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
