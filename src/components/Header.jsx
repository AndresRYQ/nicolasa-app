import React, { useState } from 'react';

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="brand" href="#inicio" aria-label="AURA, ir al inicio" onClick={cerrarMenu}>
          <span className="brand-mark" aria-hidden="true">A</span>
          <span className="brand-name">AURA</span>
        </a>
        <button className="menu-toggle" type="button" aria-expanded={menuAbierto} aria-controls="site-navigation" aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuAbierto(!menuAbierto)}>
          <span />
          <span />
        </button>
        <nav className={`site-nav${menuAbierto ? ' is-open' : ''}`} id="site-navigation" aria-label="Navegación principal">
          <a href="#inicio" onClick={cerrarMenu}>Inicio</a>
          <a href="#filosofia" onClick={cerrarMenu}>Filosofía</a>
          <a href="#degustar" onClick={cerrarMenu}>Menú degustación</a>
          <a href="#espacio" onClick={cerrarMenu}>Espacio</a>
          <a href="#reservas" onClick={cerrarMenu}>Reservas</a>
        </nav>
        <a className="button button-dark header-booking" href="#reservas">Reservar mesa</a>
      </div>
    </header>
  );
}

export default Header;
