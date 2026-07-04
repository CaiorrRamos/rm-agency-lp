const services = [
  'Direcao criativa',
  'Design de landing pages',
  'Copy para conversao',
  'Ajustes de performance visual',
]

export function ServicesSection() {
  return (
    <section id="services" className="section content-section">
      <div className="section-heading">
        <span className="section-kicker">Services</span>
        <h2>Servicos oferecidos</h2>
      </div>

      <div className="card-grid">
        {services.map((service) => (
          <article key={service} className="content-card">
            <h3>{service}</h3>
            <p>Espaco pronto para detalhar entregaveis, processo e resultados.</p>
          </article>
        ))}
      </div>
    </section>
  )
}
