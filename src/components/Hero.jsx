import React from 'react';

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <div className="page-shell hero-shell">
        <div className="hero-meta">
          <span className="eyebrow"><span className="status-dot" />Temporada otoño — invierno</span>
          <span className="hero-location">Palacio S. XVIII · Madrid <span>•</span> 1 Estrella Michelin</span>
        </div>
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-accent">Manifiesto gastronómico</span>
            <h1>Cocina de origen,<br />silencio y <em>tiempo.</em></h1>
            <p className="hero-description">Un diálogo pausado entre el terruño vivo, la memoria atávica y la botánica silvestre. Transformamos el instante efímero de la recolección en una liturgia multisensorial irrepetible.</p>
            <div className="hero-actions">
              <a className="button button-dark" href="#reservas">Reservar experiencia</a>
              <a className="text-link" href="#degustar">Ver degustación <span aria-hidden="true">↓</span></a>
            </div>
          </div>
          <aside className="hero-aside" aria-label="La filosofía de AURA">
            <div className="quote-card">
              <span className="quote-symbol" aria-hidden="true">✳</span>
              <blockquote>“Despojar el plato de artificio para que emerja la pureza intacta de la tierra que habitamos.”</blockquote>
              <div className="quote-credit"><strong>Mateo Silvela</strong><span>Chef propietario</span></div>
            </div>
            <div className="hero-stats">
              <div className="stat-card"><strong>450<span>+</span></strong><span>Referencias de bodega</span></div>
              <div className="stat-card"><strong>14</strong><span>Mesas por servicio</span></div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Hero;
