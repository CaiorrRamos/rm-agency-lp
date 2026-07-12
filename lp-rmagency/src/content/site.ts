import aboutImage from '../assets/logo-rm-wh-green.png'
import heroVideo from '../assets/bg-video.mp4'
import processImage from '../assets/Background-process.png'
import showcaseAscendBg from '../assets/showcase/ascend-bg.webp'
import showcaseAscendLogo from '../assets/showcase/ascend-logo.svg'
import showcaseCerealiBg from '../assets/showcase/cereali-figata-bg.webp'
import showcaseCerealiLogo from '../assets/showcase/cereali-figata-logo.svg'
import showcaseDidiBg from '../assets/showcase/didi-center-bg.webp'
import showcaseDidiLogo from '../assets/showcase/didi-center-logo.svg'
import showcaseKumoBg from '../assets/showcase/kumo-bg.webp'
import showcaseKumoLogo from '../assets/showcase/kumo-logo.svg'
import showcaseSuzanaBg from '../assets/showcase/suzana-rio-bg.webp'
import showcaseSuzanaLogo from '../assets/showcase/suzanario-logo.svg'
import avatarCaio from '../assets/imagem-caio.png'
import avatarJohn from '../assets/imagem-john.png'
import avatarJuan from '../assets/imagem-juan.png'
import reviewJuliana from '../assets/review-juliana.jpeg'
import reviewMatheus from '../assets/review-matheus.jpeg'
import reviewRicardo from '../assets/review-ricardo.jpeg'
import type {
  AboutFounder,
  AboutStat,
  CTAContent,
  FAQItem,
  HeroContent,
  NavItem,
  ProcessStep,
  ShowcaseItem,
  Solution,
  Testimonial,
} from '../types/content'

export const budgetWhatsappLink =
  'https://wa.me/5581973344954?text=Ol%C3%A1!%20Gostaria%20de%20Solicitar%20um%20Or%C3%A7amento%20Gratuito!'

export const navItems: NavItem[] = [
  { label: 'Projetos', href: '#showcase' },
  { label: 'Conheça a RM', href: '#about' },
  { label: 'Processo', href: '#process' },
  { label: 'Soluções', href: '#solutions' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '/contact' },
]

export const heroContent: HeroContent & { media: string } = {
  eyebrow: 'O Posicionamento que sua marca precisa',
  title: 'Construindo marcas que permanecem relevantes.',
  subtitle:
    'Landing pages, designs e estratégia visual para empresas que querem crescer com clareza e conversão.',
  primaryCta: { label: 'Começar projeto', href: '/contact' },
  secondaryCta: { label: 'Ver projetos', href: '#showcase' },
  trustItems: ['Estratégia', 'Edição visual', 'Digital', 'Motion'],
  media: heroVideo,
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'suzana-rio',
    title: 'Suzana Rio',
    category: 'Identidade visual',
    status: 'live',
    href: '#cta',
    image: showcaseSuzanaBg,
    logo: showcaseSuzanaLogo,
  },
  {
    id: 'kumo',
    title: 'Kumo',
    category: 'Brand design',
    status: 'live',
    href: '#cta',
    image: showcaseKumoBg,
    logo: showcaseKumoLogo,
  },
  {
    id: 'didi-center',
    title: 'DIDI Center',
    category: 'Direção criativa',
    status: 'live',
    href: '#cta',
    image: showcaseDidiBg,
    logo: showcaseDidiLogo,
  },
  {
    id: 'coming-3',
    title: 'Em breve',
    category: 'UX refresh',
    status: 'coming-soon',
    href: '#cta',
  },
  {
    id: 'cereali-figata',
    title: 'Cereali Figata',
    category: 'Brand identity',
    status: 'live',
    href: '#cta',
    image: showcaseCerealiBg,
    logo: showcaseCerealiLogo,
  },
  {
    id: 'coming-4',
    title: 'Em breve',
    category: 'Creative direction',
    status: 'coming-soon',
    href: '#cta',
  },
  {
    id: 'coming-5',
    title: 'Em breve',
    category: 'Positioning',
    status: 'coming-soon',
    href: '#cta',
  },
  {
    id: 'ascend',
    title: 'Ascend',
    category: 'Performance brand',
    status: 'live',
    href: '#cta',
    image: showcaseAscendBg,
    logo: showcaseAscendLogo,
  },
  {
    id: 'coming-6',
    title: 'Em breve',
    category: 'No-code site',
    status: 'coming-soon',
    href: '#cta',
  },
]

export const aboutContent = {
  eyebrow: 'Conheça a RM',
  title: 'Direção criativa, interface e narrativa em uma operação enxuta.',
  description:
    'A RM Agency combina design premium, estratégia de conversão e execução rápida para transformar presença digital em ativo de marca.',
  capabilities: [
    'Design',
    'Experiência visual',
    'UI Design',
    'Sistemas visuais',
    'Landing Page',
    'Copy',
    'Motion',
  ],
  stats: [
    { label: 'Projetos entregues', value: '180+' },
    { label: 'Taxa de satisfação', value: '96%' },
    { label: 'Experiência', value: '15+' },
  ] satisfies AboutStat[],
  image: aboutImage,
  founders: [
    {
      name: 'Caio',
      role: 'CEO & Founder',
      image: avatarCaio,
    },
    {
      name: 'John',
      role: 'CTO & Diretor de Design',
      image: avatarJohn,
    },
    {
      name: 'Juan',
      role: 'COO & Video Director',
      image: avatarJuan,
    },
  ] satisfies AboutFounder[],
}

export const processContent: { eyebrow: string; title: string; description: string; image: string; steps: ProcessStep[] } = {
  eyebrow: 'Nosso Processo',
  title: 'Uma estrutura clara para sair da ideia e chegar em uma página pronta para converter.',
  description:
    'Cada etapa existe para reduzir ruído, acelerar decisão e manter consistência entre narrativa, interface e performance.',
  image: processImage,
  steps: [
    {
      id: 'discover',
      step: '01',
      title: 'Descobrimos o seu negócio',
      description:
        'Mapeamos posicionamento, público, oferta e pontos de atrito para definir o ângulo correto do projeto.',
    },
    {
      id: 'plan',
      step: '02',
      title: 'Planejamos a estratégia',
      description:
        'Organizamos copy, hierarchy visual, CTA e referências para construir uma direção coerente.',
    },
    {
      id: 'design',
      step: '03',
      title: 'Design e desenvolvimento',
      description:
        'Executamos o layout com refinamento visual, responsividade e foco em uma experiência objetiva.',
    },
  ],
}

export const solutionsContent: { eyebrow: string; title: string; description: string; items: Solution[] } = {
  eyebrow: 'Nossas Soluções',
  title: 'Serviços pensados para posicionamento, percepção premium e conversão.',
  description:
    'A estrutura permite vender desde branding até landing pages de alta intenção sem fragmentar a narrativa da marca.',
  items: [
    {
      id: 'branding',
      title: 'Branding Estratégico',
      description: 'Identidade visual e direção criativa para marcas que precisam parecer maduras e memoráveis.',
      tags: ['Brand', 'Positioning'],
    },
    {
      id: 'visual',
      title: 'Identidade Visual',
      description: 'Sistemas visuais, assets e refinamento estético para canais digitais e campanhas.',
      tags: ['Visual system', 'Art direction'],
    },
    {
      id: 'social',
      title: 'Social Media',
      description: 'Pacotes editoriais com consistência gráfica e leitura rápida para reforço de marca.',
      tags: ['Content', 'Campaign'],
    },
    {
      id: 'landing',
      title: 'Websites e Landing Pages',
      description: 'Páginas com foco em clareza, prova social e CTA estratégico para captação.',
      tags: ['UI/UX', 'Conversion'],
    },
  ],
}

export const testimonialsContent: { eyebrow: string; title: string; description: string; items: Testimonial[]; metrics: AboutStat[] } = {
  eyebrow: 'Reviews de Clientes',
  title: 'Credibilidade visual com relatos que reduzem fricção na decisão.',
  description:
    'Comentários objetivos ajudam a sustentar preço, acelerar confiança e mostrar consistência de entrega.',
  items: [
    {
      id: 'ricardo',
      name: 'Ricardo Almeida',
      role: 'CEO, consultoria',
      quote:
        'A nova apresentação da marca ficou mais premium e a landing passou a conduzir melhor o usuário para contato.',
      avatar: reviewRicardo,
      rating: 5,
    },
    {
      id: 'juliana',
      name: 'Juliana Costa',
      role: 'Fundadora, wellness brand',
      quote:
        'O processo foi rápido, claro e muito mais estratégico do que um layout bonito isolado.',
      avatar: reviewJuliana,
      rating: 5,
    },
    {
      id: 'matheus',
      name: 'Matheus Oliveira',
      role: 'Diretor comercial',
      quote:
        'A página ganhou linguagem mais sofisticada e uma hierarquia que valorizou melhor a oferta.',
      avatar: reviewMatheus,
      rating: 5,
    },
  ],
  metrics: [
    { label: 'Design projects completed', value: '180+' },
    { label: 'Client satisfaction rate', value: '96%' },
    { label: 'Years of experience', value: '15+' },
  ],
}

export const faqItems: FAQItem[] = [
  {
    id: 'timeline',
    question: 'Quanto tempo leva para desenvolver uma landing page?',
    answer:
      'Depende do escopo, mas projetos bem definidos costumam andar entre uma e três semanas com revisões objetivas.',
  },
  {
    id: 'deliverables',
    question: 'Vocês entregam só o design ou também a implementação?',
    answer:
      'A operação pode incluir estratégia, layout e desenvolvimento, conforme a necessidade da página.',
  },
  {
    id: 'copy',
    question: 'Posso contratar mesmo sem copy pronta?',
    answer:
      'Sim. A estrutura já considera apoio na organização da mensagem e na hierarquia da oferta.',
  },
  {
    id: 'fit',
    question: 'Esse serviço serve para qual tipo de empresa?',
    answer:
      'Funciona melhor para marcas que valorizam percepção premium, clareza comercial e experiência visual.',
  },
]

export const ctaContent: CTAContent = {
  eyebrow: 'Pronto para começar?',
  title: 'O próximo passo da sua empresa pode começar hoje.',
  subtitle:
    'Se a marca precisa parecer mais sólida e vender com mais clareza, a próxima conversa já deve ser sobre execução.',
  primaryCta: { label: 'Solicitar orçamento', href: budgetWhatsappLink },
}
