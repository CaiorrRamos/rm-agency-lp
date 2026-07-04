import { motion } from 'framer-motion'
import { aboutContent } from '../../../content/site'
import { fadeUp, scaleIn, staggerContainer } from '../../../utils/animations'
import { Badge } from '../../ui/Badge/Badge'
import { Card } from '../../ui/Card/Card'
import { Container } from '../../ui/Container/Container'
import { RevealSection } from '../../ui/Section/RevealSection'
import { SectionHeader } from '../../ui/Section/SectionHeader'

export function AboutSection() {
  return (
    <RevealSection id="about">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
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

          <motion.div variants={staggerContainer(0.08)} className="mt-8 grid gap-4 sm:grid-cols-3">
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
          <Card className="flex min-h-[420px] items-center justify-center overflow-hidden bg-white/[0.03] p-8">
            <img
              src={aboutContent.image}
              alt="RM Agency"
              className="h-auto w-full max-w-[320px] object-contain"
            />
          </Card>
        </motion.div>
      </Container>
    </RevealSection>
  )
}
