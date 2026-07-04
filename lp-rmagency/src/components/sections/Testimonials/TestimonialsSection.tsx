import { motion } from 'framer-motion'
import { testimonialsContent } from '../../../content/site'
import { fadeUp } from '../../../utils/animations'
import { Card } from '../../ui/Card/Card'
import { Container } from '../../ui/Container/Container'
import { RevealSection } from '../../ui/Section/RevealSection'
import { SectionHeader } from '../../ui/Section/SectionHeader'
import { TestimonialCard } from './TestimonialCard'

export function TestimonialsSection() {
  return (
    <RevealSection id="testimonials">
      <Container>
        <SectionHeader
          eyebrow={testimonialsContent.eyebrow}
          title={testimonialsContent.title}
          description={testimonialsContent.description}
        />

        <div className="grid gap-4 lg:grid-cols-3">
          {testimonialsContent.items.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonialsContent.metrics.map((metric) => (
            <motion.div key={metric.label} variants={fadeUp}>
              <Card className="rounded-[22px] p-5 text-center" interactive>
                <p className="text-3xl font-semibold tracking-[-0.05em] text-white">{metric.value}</p>
                <p className="mt-2 text-sm text-white/46">{metric.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}
