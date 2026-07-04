import { faqItems } from '../../../content/site'
import { Container } from '../../ui/Container/Container'
import { RevealSection } from '../../ui/Section/RevealSection'
import { SectionHeader } from '../../ui/Section/SectionHeader'
import { FAQItem } from './FAQItem'

export function FAQSection() {
  return (
    <RevealSection id="faq">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeader
            eyebrow="FAQ"
            title="Duvidas? Nos respondemos."
            description="Essa secao deve tratar objecoes reais de prazo, escopo, copy, investimento e encaixe do servico."
          />
        </div>

        <div className="grid gap-4">
          {faqItems.map((item) => (
            <FAQItem key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </RevealSection>
  )
}
