import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { aboutContent } from '../../../content/site'
import { fadeUp, scaleIn, staggerContainer } from '../../../utils/animations'
import { Badge } from '../../ui/Badge/Badge'
import { Card } from '../../ui/Card/Card'
import { Container } from '../../ui/Container/Container'
import { RevealSection } from '../../ui/Section/RevealSection'
import { SectionHeader } from '../../ui/Section/SectionHeader'

export function AboutSection() {
  const [activeFounder, setActiveFounder] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveFounder(current => (current + 1) % aboutContent.founders.length)
    }, 3200)

    return () => window.clearInterval(timer)
  }, [])

  const founder = aboutContent.founders[activeFounder]

  return (
    <RevealSection id="about">
      <Container className="grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeader
            eyebrow={aboutContent.eyebrow}
            title={aboutContent.title}
            description={aboutContent.description}
          />

          <motion.div variants={staggerContainer(0.06)} className="flex flex-wrap gap-2">
            {aboutContent.capabilities.map((capability) => (
              <motion.div key={capability} variants={scaleIn}>
                <Badge>{capability}</Badge>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={staggerContainer(0.08)} className="mt-8 grid gap-3 sm:grid-cols-3 sm:gap-4">
            {aboutContent.stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <Card className="rounded-2xl p-4" interactive>
                  <p className="text-2xl font-semibold tracking-[-0.05em] text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-white/48">{stat.label}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div variants={scaleIn}>
          <Card className="relative min-h-[360px] overflow-hidden bg-white/[0.03] p-0 sm:min-h-[420px]">
            <div className="relative flex min-h-[360px] flex-col justify-end sm:min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={founder.image}
                  src={founder.image}
                  alt={founder.name}
                  initial={{ opacity: 0, y: 28, scale: 1.02 }}
                  animate={{ opacity: 1, y: 0, scale: 1.06 }}
                  exit={{ opacity: 0, y: -28, scale: 0.985 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
              </AnimatePresence>

              <div className="relative z-10 flex items-end justify-between gap-4 p-4 sm:p-5 md:p-6">
                <div className="max-w-[68%] sm:max-w-[60%]">
                  <p className="text-lg font-semibold tracking-[-0.05em] text-white sm:text-xl md:text-2xl">
                    {founder.name}
                  </p>
                  <p className="mt-1 text-xs text-white/62 md:text-sm">{founder.role}</p>
                </div>

                <div className="flex items-center gap-2">
                  {aboutContent.founders.map((item, index) => (
                    <button
                      key={item.name}
                      type="button"
                      aria-label={`Mostrar ${item.name}`}
                      onClick={() => setActiveFounder(index)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        index === activeFounder
                          ? 'w-8 bg-white'
                          : 'w-2.5 bg-white/30 hover:bg-white/55'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </Container>
    </RevealSection>
  )
}
