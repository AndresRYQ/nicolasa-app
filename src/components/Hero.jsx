import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-tag">
            <span className="dot"></span>
            GUÍA MICHELIN 2025 - 1 ESTRELLA & ESTRELLA VERDE
          </div>
          
          <h1 className="hero-title font-serif">
            El arte de<br />
            <span className="hero-subtitle">lo esencial.</span>
          </h1>
          
          <p className="hero-description font-serif">
            Una experiencia sensorial basada en la memoria, el fuego y la tierra.
          </p>
          
          <p className="hero-text">
            Cocina de autor forjada bajo la cadencia del clima mediterráneo<br/>
            y la serenidad silvestre. Diálogo directo entre huertos<br/>
            regenerativos y brasa viva.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">RESERVAR MESA</button>
            <button className="btn btn-secondary">EXPLORAR LA CARTA <span className="arrow">→</span></button>
          </div>
        </div>
        
        <div className="hero-image-wrapper">
          <div className="info-card top-card">
            <h3 className="font-serif">12 Mesas</h3>
            <p>Exclusividad e intimidad<br/>sonora para cada servicio.</p>
          </div>
          
          <img 
            src="https://images.unsplash.com/photo-1595295333158-4742f28fbd85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Plato de alta cocina" 
            className="main-image"
          />
          
          <div className="info-card bottom-card">
            <span className="card-tag">COSECHA DE HOY</span>
            <p className="font-serif italic-text">Flor de saúco silvestre & aceite temprano de acebuchina del valle.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
