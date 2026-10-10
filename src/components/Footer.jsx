import React from 'react';

function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="page-shell">
        <div className="footer-grid">
          <div className="footer-brand"><a className="brand" href="#inicio"><span className="brand-mark" aria-hidden="true">A</span><span className="brand-name">AURA</span></a><p>Cocina de autor, memoria y origen. Una experiencia sensorial meditada en el corazón de la alta gastronomía.</p></div>
          <div className="footer-column"><h2>Horarios</h2><p>Miércoles a domingo</p><p>Almuerzo: 13:30 — 16:00</p><p>Cena: 20:30 — 23:30</p><span>Lunes y martes cerrado</span></div>
          <div className="footer-column"><h2>Ubicación & contacto</h2><p>Paseo de las Palmeras 14</p><p>28001 Madrid, España</p><a href="tel:+34912345678">+34 912 345 678</a><a href="mailto:reservas@aurarestaurante.com">reservas@aurarestaurante.com</a></div>
          <div className="footer-column"><h2>Comunidad & estilo</h2><a href="https://instagram.com/aura.rest" target="_blank" rel="noreferrer">Instagram / @aura.rest</a><a href="#filosofia">Guía sensorial</a><a href="#espacio">Prensa & distinciones</a></div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AURA Gastronomía. Todos los derechos reservados.</p>
          <div><a href="#contacto">Aviso legal</a><a href="#contacto">Política de privacidad</a><a href="#reservas">Condiciones de reserva</a></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
