import { budgetWhatsappLink, ctaContent, heroContent } from '../../../content/site'
import googleIcon from '../../../assets/google.svg'
import instagramIcon from '../../../assets/instagram.svg'
import whatsappIcon from '../../../assets/whatsapp.svg'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'

export function Footer() {
  return (
    <footer
      id="footer"
      className="relative isolate overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src={heroContent.media}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(178,248,40,0.16),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.7),rgba(0,0,0,0.76)_24%,rgba(0,0,0,0.84)_58%,rgba(0,0,0,0.93))]" />
      <div className="pointer-events-none absolute inset-0 bg-black/30" />

      <Container className="relative z-10 flex min-h-[82svh] flex-col justify-between px-4 py-8 sm:px-6 sm:py-10 md:min-h-[92svh] md:px-8 md:py-12 lg:px-10">
        <div className="flex min-h-[14svh] flex-1 items-center justify-center">
          <div className="mx-auto flex w-full max-w-[760px] flex-col items-center text-center">
            <span className="inline-flex rounded-full border border-white/16 bg-white/[0.08] px-4 py-2 text-sm text-white/84 backdrop-blur-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_8px_28px_rgba(0,0,0,0.24)]">
              {ctaContent.eyebrow}
            </span>

            <h2 className="mt-6 max-w-[11.5ch] text-balance text-[2.45rem] font-semibold leading-[0.92] tracking-tight text-white sm:mt-8 sm:text-[2.7rem] md:text-6xl lg:text-[4.4rem]">
              {ctaContent.title}
            </h2>

            <Button
              href="/contact"
              className="mt-7 w-full max-w-[280px] px-8 py-3.5 text-base text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.24),0_0_0_1px_rgba(255,255,255,0.12),0_18px_42px_rgba(0,0,0,0.34)] sm:mt-8 sm:w-auto sm:max-w-none"
            >
              Começar Projeto
            </Button>

            <div className="mt-8 flex items-center gap-4 text-white/82 sm:mt-10 sm:gap-5">
              <a
                href="https://www.google.com/search?q=RM+Agency"
                target="_blank"
                rel="noreferrer"
                aria-label="Google"
                className="flex h-8 w-8 items-center justify-center transition hover:opacity-80"
              >
                <img src={googleIcon} alt="" className="h-5 w-5 object-contain" />
              </a>
              <span className="h-6 w-px bg-white/18" />
              <a
                href="https://www.instagram.com/rmagency.co/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center transition hover:opacity-80"
              >
                <img src={instagramIcon} alt="" className="h-5 w-5 object-contain" />
              </a>
              <span className="h-6 w-px bg-white/18" />
              <a
                href={budgetWhatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-8 w-8 items-center justify-center transition hover:opacity-80"
              >
                <img src={whatsappIcon} alt="" className="h-5 w-5 object-contain" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2 pb-1 text-xs text-white/68 sm:gap-3 sm:text-sm md:grid-cols-3 md:items-end">
          <p className="text-center md:text-left">@rmagency.co</p>
          <p className="text-center">Design por Caio Ramos</p>
          <p className="text-center md:text-right">All rights reserved, ©2026</p>
        </div>
      </Container>
    </footer>
  )
}
