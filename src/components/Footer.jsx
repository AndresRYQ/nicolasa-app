import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>AURA</h4>
            <p>El arte de lo esencial</p>
          </div>
          <div className="footer-section">
            <h4>Navegación</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#filosofia">Filosofía</a></li>
              <li><a href="#menu">Menú</a></li>
              <li><a href="#espacio">Espacio</a></li>
              <li><a href="#reservas">Reservas</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: reservas@aura.es</p>
            <p>Teléfono: +34 XXX XXX XXX</p>
            <p>Dirección: Casco Histórico</p>
          </div>
          <div className="footer-section">
            <h4>Síguenos</h4>
            <ul>
              <li><a href="#instagram">Instagram</a></li>
              <li><a href="#facebook">Facebook</a></li>
              <li><a href="#twitter">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 AURA. El arte de lo esencial.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
