import React from 'react';
import '../styles/Experiencia.css';

function Experiencia() {
  return (
    <section className="experiencia" id="menu">
      <div className="container">
        <div className="experiencia-content">
          <div className="experiencia-text">
            <h2>Una experiencia única</h2>
            <p>
              Sumergirse en AURA es entrar en un diálogo entre la naturaleza y la técnica culinaria. 
              Cada plato cuenta una historia de terroir, técnica ancestral y innovación.
            </p>
            <div className="experiencia-highlight">
              <span>Menú Degustación</span>
              <h3>8 & 12 Pases</Basura & Gran Menú Origen</h3>
              <p>Una travesía sensorial a través de 8 o 12 actos gastronómicos</p>
            </div>
          </div>
          <div className="experiencia-image">
            <div className="image-container">
              <img src="https://via.placeholder.com/400x500" alt="AURA Experience" />
              <div className="image-overlay">
                <span>Cocina en vivo</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
