import React from 'react';
import '../styles/Info.css';

function Info() {
  const infoItems = [
    {
      id: 1,
      label: 'DISTINCIÓN',
      title: '1 Estrella Michelin',
      description: 'Reconocimiento a la excelencia'
    },
    {
      id: 2,
      label: 'PROPUESTA',
      title: '8 & 12 Pases',
      description: 'Basura & Gran Menú Origen'
    },
    {
      id: 3,
      label: 'ENTORNO',
      title: 'Casco Histórico',
      description: 'Parques XVIII especiales'
    },
    {
      id: 4,
      label: 'BODEGA',
      title: '+450 Etiquetas',
      description: 'Viticultura natural y vino natural'
    }
  ];

  return (
    <section className="info" id="espacio">
      <div className="container">
        <div className="info-grid">
          {infoItems.map(item => (
            <div key={item.id} className="info-item">
              <span className="info-label">{item.label}</span>
              <h3 className="info-title">{item.title}</h3>
              <p className="info-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Info;
