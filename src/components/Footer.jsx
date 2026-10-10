import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Nicolasa</h4>
            <p>Soluciones innovadoras para tu negocio</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#features">Características</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contacto</h4>
            <p>Email: info@nicolasa.com</p>
            <p>Teléfono: +34 000 000 000</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Nicolasa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
