import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="hero-tag">GUÍA MICHELIN 2025 - ESTRELLA & ESTRELLA VERDE</div>
        <h1 className="hero-title">
          El arte de<br />
          <span className="hero-subtitle">lo esencial.</span>
        </h1>
        <p className="hero-description">
          Una experiencia sensorial basada en la memoria, el fuego y la tierra.
        </p>
        <p className="hero-text">
          Cocina de autor forjada bajo la cadencia del clima mediterráneo y la serenidad silvestre. Diálogo directo entre huertos regenerativos y brasa viva.
        </p>
        <div className="hero-actions">
          <button className="btn btn-primary">RESERVAR MESA</button>
          <button className="btn btn-secondary">EXPLORAR LA CARTA →</button>
        </div>
      </div>
      <div className="hero-image">
        <div className="image-placeholder">
          <div className="image-box">
            <span>12 Mesas</span>
            <p>Exclusividad extrema donde para cada uno se vive</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
