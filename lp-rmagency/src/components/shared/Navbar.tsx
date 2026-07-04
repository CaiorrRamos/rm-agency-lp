import logo from '../../assets/Logo.svg'

const navItems = [
  { label: 'Serviços', href: '#services' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Avaliações', href: '#reviews' },
  { label: 'Contato', href: '#footer' },
]

export function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#hero" aria-label="Voltar para o topo">
        <img src={logo} alt="RM Agency" />
      </a>

      <div className="navbar-right">
        <nav aria-label="Navegacao principal">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="nav-cta" href="#footer">
          Solicitar Orçamento
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}
