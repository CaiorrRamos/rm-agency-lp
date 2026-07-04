const projects = [
  'Campanhas digitais com foco em performance visual',
  'Paginas institucionais com direcao de arte consistente',
  'Lancamentos com copy, prova social e CTA estrategico',
]

export function ProjectsSection() {
  return (
    <section id="projects" className="section content-section">
      <div className="section-heading">
        <span className="section-kicker">Projects</span>
        <h2>Projetos em destaque</h2>
      </div>

      <div className="card-grid">
        {projects.map((project) => (
          <article key={project} className="content-card">
            <h3>Case selecionado</h3>
            <p>{project}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
