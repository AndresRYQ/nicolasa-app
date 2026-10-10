import React from 'react';
import '../styles/Espacio.css';

const estancias = [
  {
    title: 'La Sala Principal',
    description:
      'Concebida como una galería de contemplación. Cada mesa está separada para crear una cápsula íntima, con lino belga, piedra ligera y una luminosidad sobria.',
    tags: ['Lino Belga 480g', 'Piedra Arenisca', 'Separación 3.2m'],
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'Cocina Abierta & Barra',
    description:
      'Un frente monolítico donde seis comensales observan el pulso de la cocina, el calor de la brasa y el montaje preciso del menú en directo.',
    tags: ['Mesa del Chef', 'Piedra Volcánica', 'Cocina en vivo'],
    image:
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'La Cava Subterránea',
    description:
      'Bóveda histórica con temperatura constante y reposo de vinos mínimos. Un espacio íntimo para catas guiadas y maridajes pensados.',
    tags: ['+450 referencias', 'Humedad natural', 'Cata privada'],
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80'
  },
  {
    title: 'El Patio de Aromáticas',
    description:
      'Un atrio de olivos, tomillo, romero y lavanda que acompaña el aperitivo final con calma, sol tibio y una sensación de pausa total.',
    tags: ['Olivos centenarios', 'Botánica viva', 'Piedra natural'],
    image:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80'
  }
];

const materiales = [
  {
    icon: 'forest',
    title: 'Roble Recuperado',
    text: 'Vigas antiguas tratadas con cera natural y aceite de linaza para ganar carácter con el tiempo.',
    extra: 'Pirineo Navarro'
  },
  {
    icon: 'texture',
    title: 'Cal Viva en Grano',
    text: 'Revestimientos artesanales que regulan la humedad y aportan una textura orgánica y serena.',
    extra: 'Mortero romano'
  },
  {
    icon: 'architecture',
    title: 'Caliza de Cantera',
    text: 'Piedra natural de acabado mate y sin brillo artificial, pensada para la calma visual.',
    extra: 'Campaspero'
  },
  {
    icon: 'local_fire_department',
    title: 'Barro & Terracota',
    text: 'Cerámica cocida al fuego que resguarda las piezas con un tacto cálido y humano.',
    extra: 'Leña directa'
  }
];

function Espacio() {
  return (
    <section className="espacio" id="filosofia">
      <div className="container espacio-container">
        <div className="espacio-intro">
          <div>
            <span className="espacio-kicker">Capítulo III</span>
            <h2>La arquitectura del silencio</h2>
          </div>
          <p>
            Un diálogo ininterrumpido entre la penumbra, la piedra y el pulso gastronómico.
            Cada rincón de AURA está pensado para que el comensal escuche, observe y disfrute sin ruido.
          </p>
        </div>

        <div className="espacio-showcase">
          <div className="espacio-visual principal">
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Interior de restaurante gourmet"
            />
            <div className="espacio-overlay">
              <span>Perspectiva Cenital</span>
              <h3>La transición de la luz natural</h3>
            </div>
          </div>

          <div className="espacio-side">
            <div className="mini-card">
              <span className="mini-label">Materia Pura</span>
              <p>Roble recuperado y revoco de cal viva.</p>
            </div>
            <div className="mini-card light">
              <span className="mini-label">Concepción Sonora</span>
              <h4>Silencio como ingrediente</h4>
              <p>
                La acústica se cuida con materiales vivos, textiles y madera para crear un entorno íntimo.
              </p>
            </div>
          </div>
        </div>

        <div className="estancias">
          {estancias.map((item, index) => (
            <article key={item.title} className={`estancia-card ${index % 2 === 0 ? 'wide' : 'tall'}`}>
              <div className="estancia-image">
                <img src={item.image} alt={item.title} />
                <span className="estancia-number">0{index + 1}</span>
              </div>
              <div className="estancia-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="materiales-wrap">
          <div className="materiales-header">
            <span className="espacio-kicker">Pureza constructiva</span>
            <h2>Materia que envejece con gracia</h2>
          </div>

          <div className="materiales-grid">
            {materiales.map((material) => (
              <div key={material.title} className="material-card">
                <div className="material-icon">
                  <span className="material-symbols-outlined">{material.icon}</span>
                </div>
                <span className="material-tag">{material.title}</span>
                <h3>{material.title}</h3>
                <p>{material.text}</p>
                <div className="material-extra">
                  <span>Origen</span>
                  <strong>{material.extra}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="ambiente-box">
          <div className="ambiente-copy">
            <span className="espacio-kicker">Doble comportamiento lumínico</span>
            <h2>El espacio según la hora</h2>
            <p>
              La experiencia cambia con la luz: más diáfana al mediodía y más íntima al atardecer.
            </p>
            <div className="ambiente-list">
              <div className="ambiente-item">
                <strong>Almuerzo</strong>
                <span>Sol filtrado, claridad cenital y calma visual.</span>
              </div>
              <div className="ambiente-item">
                <strong>Cena</strong>
                <span>Penumbra cálida, luz focal y un ambiente íntimo.</span>
              </div>
            </div>
          </div>

          <div className="ambiente-visual">
            <img
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80"
              alt="Mesa elegante en cena"
            />
            <div className="ambiente-label">2200 K</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Espacio;
