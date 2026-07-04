import { Container } from '../../ui/Container/Container'

export function Footer() {
  return (
    <footer className="border-t border-white/8 py-8">
      <Container className="flex flex-col gap-3 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
        <p>hello@rmagency.com</p>
        <p>Design e desenvolvimento para marcas em crescimento.</p>
        <p>All rights reserved, 2026</p>
      </Container>
    </footer>
  )
}
