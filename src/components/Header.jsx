import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo font-serif">
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
          <button className="btn btn-primary">RESERVAR MESA</button>
          <button className="user-icon" aria-label="User profile">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
