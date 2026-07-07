import { useEffect, useState } from 'react'
import logo from '../../../assets/Logo.svg'
import { navItems } from '../../../content/site'
import { cn } from '../../../lib/cn'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <Container
        className={cn(
          'transition-all duration-300 px-6 pt-4 md:px-10 lg:px-16 xl:px-24',
          isScrolled ? 'translate-y-0' : 'pt-0',
        )}
      >
        <div
          className={cn(
            'flex h-16 items-center justify-between gap-6 transition-all duration-300 md:h-20',
            isScrolled
              ? 'rounded-full border border-white/10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.1))] px-4 shadow-[0_10px_32px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md md:px-6'
              : 'bg-transparent px-0',
          )}
        >
          <a href="#hero" aria-label="Voltar para o topo" className="shrink-0">
            <img src={logo} alt="RM Agency" className="h-8 w-auto" />
          </a>

          <nav className="hidden lg:block" aria-label="Navegacao principal">
            <ul className="flex items-center gap-6 text-sm text-white/70 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a className="transition hover:text-white" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            href="#footer"
            variant="secondary"
            className={cn(
              'px-5 py-2.5 text-sm font-medium text-white',
              isScrolled
                ? 'border-white/16 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),rgba(255,255,255,0.04))]'
                : 'border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]',
            )}
          >
            Solicitar orcamento
          </Button>
        </div>
      </Container>
    </header>
  )
}
