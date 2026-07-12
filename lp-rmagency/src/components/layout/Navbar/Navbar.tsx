import { useEffect, useState } from 'react'
import logo from '../../../assets/Logo.svg'
import { navItems } from '../../../content/site'
import { cn } from '../../../lib/cn'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const isContactPage = window.location.pathname === '/contact'

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
          'transition-all duration-300 px-4 pt-3 sm:px-6 md:px-10 md:pt-4 lg:px-16 xl:px-24',
          isScrolled ? 'translate-y-0' : 'pt-0',
        )}
      >
        <div
          className={cn(
            'flex h-14 items-center justify-between gap-3 transition-all duration-300 sm:h-16 sm:gap-4 md:h-20 md:gap-6',
            isScrolled
              ? 'rounded-full border border-white/10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.1))] px-3 shadow-[0_10px_32px_rgba(0,0,0,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-md sm:px-4 md:px-6'
              : 'bg-transparent px-0',
          )}
        >
          <a href="/" aria-label="Voltar para o topo" className="shrink-0">
            <img src={logo} alt="RM Agency" className="h-7 w-auto sm:h-8" />
          </a>

          <nav className="hidden lg:block" aria-label="Navegação principal">
            <ul className="flex items-center gap-6 text-sm text-white/70 lg:gap-8">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    className="transition hover:text-white"
                    href={
                      isContactPage && item.href.startsWith('#')
                        ? `/${item.href}`
                        : item.href
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button
            href={isContactPage ? '/#footer' : '#footer'}
            variant="secondary"
            className={cn(
              'min-w-0 px-3 py-2 text-xs font-medium text-white sm:px-5 sm:py-2.5 sm:text-sm',
              isScrolled
                ? 'border-white/16 bg-[linear-gradient(135deg,rgba(255,255,255,0.11),rgba(255,255,255,0.04))]'
                : 'border-white/14 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))]',
            )}
          >
            <span className="hidden sm:inline">Solicitar Orçamento</span>
            <span className="sm:hidden">Orçamento</span>
          </Button>
        </div>
      </Container>
    </header>
  )
}
