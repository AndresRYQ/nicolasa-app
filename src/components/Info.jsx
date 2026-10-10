import React from 'react';

function Info() {
  const infoItems = [
    {
      id: 1,
      label: 'Distinción',
      title: '1 Estrella Michelin',
      description: 'Una cocina honesta, reconocida por su excelencia.'
    },
    {
      id: 2,
      label: 'Propuesta',
      title: '9 y 14 pases',
      description: 'Dos recorridos, una misma mirada al origen.'
    },
    {
      id: 3,
      label: 'Entorno',
      title: 'Palacio del siglo XVIII',
      description: 'Un refugio sereno en el corazón de Madrid.'
    },
    {
      id: 4,
      label: 'BODEGA',
      title: '+450 Etiquetas',
      description: 'Pequeños viticultores y vinos con identidad.'
    }
  ];

  return (
    <section className="philosophy-section" id="filosofia">
      <div className="page-shell">
        <div className="philosophy-copy">
          <span className="eyebrow eyebrow-accent">III. El lugar</span>
          <h2>Una mesa en calma,<br /><em>en diálogo con la tierra.</em></h2>
          <p>En AURA, cada detalle invita a detenerse. Una casa íntima donde el paisaje, los materiales nobles y la hospitalidad acompañan el viaje del primer bocado al último.</p>
        </div>
        <div className="info-grid" id="espacio">
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
