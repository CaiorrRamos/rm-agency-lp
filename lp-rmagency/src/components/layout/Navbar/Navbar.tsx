import logo from '../../../assets/Logo.svg'
import { navItems } from '../../../content/site'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-[#050505]/70 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <a href="#hero" aria-label="Voltar para o topo" className="shrink-0">
          <img src={logo} alt="RM Agency" className="h-8 w-auto" />
        </a>

        <nav className="hidden lg:block" aria-label="Navegacao principal">
          <ul className="flex items-center gap-8 text-sm text-white/68">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-white" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <Button href="#cta" variant="secondary" className="px-4 py-2.5 text-xs md:text-sm">
          Solicitar orcamento
        </Button>
      </Container>
    </header>
  )
}
