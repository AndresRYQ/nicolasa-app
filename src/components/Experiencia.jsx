import React from 'react';

function Experiencia() {
  const menus = [
    {
      nombre: 'Menú Raíces', pases: '9 pases de temporada', precio: '145€',
      descripcion: 'Esencia del paisaje inmediato, fermentaciones sutiles, pesca de bajura y huerta de ribera en su punto álgido de maduración.',
      maridaje: 'Maridaje de terruño sugerido', extra: '+75€', duracion: 'Duración: ~2 h 15 min',
      platos: ['Caldo clarificado de setas silvestres y tomillo blanco', 'Quisquilla de Motril marinada con grasa de jamón ibérico', 'Lubina atlántica curada en cera de abeja y emulsión de algas', 'Higo asado a la leña con helado de leche cruda y sarmiento'],
    },
    {
      nombre: 'Origen & Cosmos', pases: '14 pases · experiencia completa', precio: '195€',
      descripcion: 'Nuestra máxima expresión creativa. Investigación botánica, maduraciones extremas, cocina de descarte noble y vanguardia sensorial inmersiva.',
      maridaje: 'Armonía gran reserva y añadas históricas', extra: '+110€', duracion: 'Duración: ~3 h 30 min', destacado: true,
      platos: ['Crujiente de líquenes, polen de brezo y resina de pino', 'Ostra del Delta templada en escabeche floral de saúco', 'Pichón de sangre en tres servicios: pechuga, corazón e interiores', 'Infusión de corteza ahumada y nieve ligera de flor de saúco'],
    },
  ];
  const pases = [['01', '03', '06', '09'], ['02', '05', '10', '14']];

  return (
    <section className="tasting-section" id="degustar">
      <div className="page-shell">
        <div className="section-heading">
          <div><span className="eyebrow eyebrow-accent">II. Propuesta gastronómica</span><h2>El ritmo de las estaciones</h2></div>
          <p>Una sinfonía de bocados concebida a partir de la recolección diaria, técnicas ancestrales de conservación y la botánica silvestre de nuestro entorno. Cada menú responde al ciclo vivo del bosque y la costa.</p>
        </div>

        <div className="dish-feature">
          <figure className="dish-figure">
            <div className="dish-image-wrap">
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR5l5BKhSPTNuoRe5Po1YG2J3JKmXJl90LDyIu9ltW0GxOFJ8xjLymgzUz57ov9bZiJt2bLKl8cuiW0-VuV9LRicrE5qBJGmXUOhFu7qo0mvFiOzosUSGfgdKf2Q_K1KNNmy1X3Yuh7X7eXaj6Q8WcEsgQITMaRoNJoEw48BCFACqqRZXbDNX_O26wBJBgPEUUTT2NrLebw7ayr2c8qL8Wp8Sf59ZEXZkx77g5s5rMwU9hULhVRZf6xA" alt="Pichón de sangre asado con emulsión de moras silvestres en vajilla artesanal" loading="lazy" />
              <span className="image-label">Servicio principal · Creación 2025</span>
            </div>
            <figcaption><span>Pichón de sangre asado con emulsión de moras silvestres, hierbas de ribera y reducción de frutos oscuros.</span><span className="caption-note">Pase X · Origen & Cosmos</span></figcaption>
          </figure>
          <div className="pairing-column">
            <article className="pairing-card">
              <span className="eyebrow eyebrow-icon"><span aria-hidden="true">◌</span> La sumillería</span>
              <h3>Diálogo líquido y botánica</h3>
              <p>Guiada con sensibilidad por nuestro sumiller, la cava alberga más de 450 etiquetas internacionales, joyas de pequeños viticultores y vinificaciones en ánfora, complementadas por hidromieles y fermentados botánicos elaborados in-house.</p>
              <div className="pairing-detail"><span>Vinos de microparcela y biodinámica</span><strong>Selección rara</strong></div>
              <div className="pairing-detail"><span>Maridaje no alcohólico · infusiones y tisanas</span><strong>Disponible</strong></div>
            </article>
            <div className="dietary-note"><span><strong>Atención a restricciones</strong><small>Adaptaciones celíacas y vegetarianas con 48 h de antelación</small></span><span className="dietary-icon" aria-hidden="true">✳</span></div>
          </div>
        </div>

        <div className="menu-grid">
          {menus.map((menu, menuIndex) => (
            <article className={`menu-card${menu.destacado ? ' menu-card-featured' : ''}`} key={menu.nombre}>
              <div>
                <div className="menu-card-heading"><div><span className="eyebrow eyebrow-accent">{menu.pases}</span><h3>{menu.nombre}</h3></div><div className="menu-price"><strong>{menu.precio}</strong><span>por comensal · IVA inc.</span></div></div>
                <p className="menu-description">{menu.descripcion}</p>
                <div className="pairing-price"><span><span aria-hidden="true">◌</span>{menu.maridaje}</span><strong>{menu.extra}</strong></div>
                <span className="list-eyebrow">Pases icónicos de la secuencia</span>
                <ol className="dish-list">{menu.platos.map((plato, index) => <li key={plato}><span>{plato}</span><span>{pases[menuIndex][index]}</span></li>)}</ol>
              </div>
              <div className="menu-card-footer"><a className="button button-dark" href="#reservas">Reservar {menu.nombre}</a><span>{menu.duracion}</span></div>
            </article>
          ))}
        </div>

        <div className="reservation-banner" id="reservas">
          <div><span className="eyebrow eyebrow-accent">Mesa & hospitalidad</span><h3>Asegure su mesa en el servicio deseado</h3><p>Aceptamos reservas con hasta 90 días de antelación. Para mesas privadas de más de 6 comensales o eventos exclusivos en nuestro palacio, contacte directamente con conserjería.</p></div>
          <div className="reservation-actions"><a className="button button-dark" href="mailto:reservas@aurarestaurante.com?subject=Reserva%20en%20AURA">Reservar menú degustación</a><a className="button button-light" href="mailto:reservas@aurarestaurante.com?subject=Consulta%20de%20al%C3%A9rgenos">Consultar alérgenos</a></div>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;
