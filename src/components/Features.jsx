import React from 'react';
import '../styles/Features.css';

function Features() {
  const features = [
    {
      id: 1,
      title: 'Rápido',
      description: 'Rendimiento optimizado para la mejor experiencia del usuario'
    },
    {
      id: 2,
      title: 'Seguro',
      description: 'Protección de datos de nivel empresarial'
    },
    {
      id: 3,
      title: 'Escalable',
      description: 'Crece con tu negocio sin límites'
    },
    {
      id: 4,
      title: 'Confiable',
      description: 'Disponibilidad 99.9% garantizada'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <h2>Nuestras Características</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
