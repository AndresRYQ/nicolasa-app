import React from 'react';
import '../styles/Header.css';

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>AURA</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#inicio">INICIO</a></li>
            <li><a href="#filosofia">FILOSOFÍA</a></li>
            <li><a href="#menu">MENÚ DEGUSTACIÓN</a></li>
            <li><a href="#espacio">ESPACIO</a></li>
            <li><a href="#reservas">RESERVAS</a></li>
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
