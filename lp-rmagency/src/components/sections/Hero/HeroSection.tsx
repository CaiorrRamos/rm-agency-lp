import { motion } from 'framer-motion'
import logo from '../../../assets/Logo.svg'
import { heroContent } from '../../../content/site'
import { fadeIn, fadeUp, smoothTransition, staggerContainer } from '../../../utils/animations'
import LogoLoop, { type LogoItem } from '../../shared/LogoLoop'
import { Badge } from '../../ui/Badge/Badge'
import { Button } from '../../ui/Button/Button'
import { Container } from '../../ui/Container/Container'
import { Section } from '../../ui/Section/Section'

const logos: LogoItem[] = Array.from({ length: 8 }, (_, index) => ({
  src: logo,
  alt: `RM Agency ${index + 1}`,
  title: 'RM Agency',
  width: 124,
  height: 28,
}))

export function HeroSection() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-24 sm:px-6 md:px-10 md:pt-28 lg:px-16 xl:px-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(178,248,40,0.18),transparent_25%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.7))]" />
      <div className="pointer-events-none absolute inset-0 bg-black/40" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[96vh] bg-gradient-to-b from-transparent via-black/76 via-[48%] to-black blur-2xl" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[74vh] bg-gradient-to-b from-transparent via-black/90 via-[38%] to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[460px] bg-gradient-to-t from-black via-black/98 via-[70%] to-transparent" />

      <div className="pointer-events-none absolute inset-0 opacity-60 mix-blend-screen">
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

      <Container className="relative z-10 flex min-h-[calc(100svh-4rem)] w-full max-w-5xl flex-col items-center justify-center px-0 sm:min-h-[calc(100svh-5rem)]">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-[36%] rounded-full bg-white/[0.012] blur-[100px]" />
        <motion.div
          className="relative mx-auto flex w-full max-w-5xl flex-col items-center gap-5 text-center sm:gap-6 md:gap-8"
          initial="hidden"
          animate="show"
          variants={staggerContainer(0.12, 0.1)}
        >
          <motion.div variants={fadeIn}>
            <Badge className="rounded-full border border-white/11 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.022))] px-4 py-2 text-sm font-medium normal-case tracking-normal text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_6px_14px_rgba(0,0,0,0.06)] [backdrop-filter:blur(14px)_saturate(155%)]">
              {heroContent.eyebrow}
            </Badge>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={smoothTransition(0.75)}
            className="max-w-[11ch] text-[2.65rem] font-semibold leading-[0.98] tracking-tight text-white [text-shadow:0_4px_18px_rgba(0,0,0,0.16)] sm:max-w-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {heroContent.title}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={smoothTransition(0.65, 0.05)}
            className="max-w-[31ch] text-sm leading-6 text-white/62 [text-shadow:0_3px_14px_rgba(0,0,0,0.14)] sm:max-w-2xl sm:text-base sm:leading-relaxed md:text-lg"
          >
            {heroContent.subtitle}
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={smoothTransition(0.6, 0.1)}
            className="mt-3 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:mt-4 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5 md:mt-6"
          >
            <Button
              href={heroContent.primaryCta.href}
              className="w-full border-white/20 text-sm text-white sm:w-auto"
            >
              {heroContent.primaryCta.label}
            </Button>
            <Button
              href={heroContent.secondaryCta.href}
              variant="secondary"
              className="w-full text-sm text-white sm:w-auto"
            >
              {heroContent.secondaryCta.label}
            </Button>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={smoothTransition(0.6, 0.15)}
            className="mt-7 flex flex-col items-center justify-center text-[11px] text-white/40 sm:mt-8 sm:text-xs md:mt-10"
          >
            <div className="flex w-full max-w-[680px] items-center justify-center gap-2 sm:gap-4 md:gap-6">
              <span className="whitespace-nowrap">Role para baixo</span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/8 to-transparent sm:w-20 md:w-32" />
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] text-white/66 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_6px_16px_rgba(0,0,0,0.1)] backdrop-blur-lg">
                i
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/8 to-transparent sm:w-20 md:w-32" />
              <span className="whitespace-nowrap">para ver mais</span>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            transition={smoothTransition(0.6, 0.2)}
            className="relative mt-16 w-[calc(100%+1.5rem)] max-w-6xl overflow-hidden px-2 py-3 opacity-70 sm:mt-20 sm:w-full sm:px-6 md:mt-32 md:px-12"
          >
            <LogoLoop
              logos={logos}
              speed={40}
              direction="left"
              logoHeight={34}
              gap={36}
              pauseOnHover
              fadeOut
              fadeOutColor="#000000"
              ariaLabel="Logos RM Agency"
              className="relative z-10 bg-transparent"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
