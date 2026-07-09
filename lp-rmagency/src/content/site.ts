import aboutImage from '../assets/logo-rm-wh-green.png'
import heroVideo from '../assets/bg-video.mp4'
import processImage from '../assets/Background-process.png'
import showcaseBrand from '../assets/em breve-case.png'
import showcaseDidi from '../assets/mockup-didi.png'
import showcaseHat from '../assets/mockup-suzana-rio.png'
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
  { label: 'Sobre nós', href: '#about' },
  { label: 'Processos', href: '#process' },
  { label: 'Soluções', href: '#solutions' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
]

export const heroContent: HeroContent & { media: string } = {
  eyebrow: 'O posicionamente que sua marca precisa para crescer.',
  title: 'Construindo marcas que permanecem relevantes.',
  subtitle:
    'Landing pages premium, design de interface e estrategia visual para empresas que querem crescer com clareza e conversao.',
  primaryCta: { label: 'Começar projeto', href: '#cta' },
  secondaryCta: { label: 'Ver projetos', href: '#showcase' },
  trustItems: ['Estrategia', 'Edicao visual', 'Digital', 'Motion'],
  media: heroVideo,
}

export const showcaseItems: ShowcaseItem[] = [
  {
    id: 'coming-1',
    title: 'Em breve',
    category: 'Webflow LP',
    status: 'coming-soon',
    href: '#cta',
  },
  {
    id: 'brand-rm',
    title: 'RM Agency Brand System',
    category: 'Brand system',
    status: 'live',
    href: '#cta',
    image: showcaseBrand,
  },
  {
    id: 'coming-2',
    title: 'Em breve',
    category: 'Webflow LP',
    status: 'coming-soon',
    href: '#cta',
  },
  {
    id: 'coming-3',
    title: 'Em breve',
    category: 'UX refresh',
    status: 'coming-soon',
    href: '#cta',
  },
  {
    id: 'featured-hat',
    title: 'Colecao Suzana Rio',
    category: 'Visual campaign',
    status: 'live',
    href: '#cta',
    image: showcaseHat,
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
    id: 'featured-didi',
    title: 'DIDI launch assets',
    category: 'Launch page',
    status: 'live',
    href: '#cta',
    image: showcaseDidi,
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
  eyebrow: 'Conheca a RM',
  title: 'Direcao criativa, interface e narrativa em uma operacao enxuta.',
  description:
    'A RM Agency combina design premium, estrategia de conversao e execucao rapida para transformar presenca digital em ativo de marca.',
  capabilities: [
    'Design',
    'Experiencia visual',
    'UI Design',
    'Sistemas visuais',
    'Landing Page',
    'Copy',
    'Motion',
  ],
  stats: [
    { label: 'Projetos entregues', value: '180+' },
    { label: 'Taxa de satisfacao', value: '96%' },
    { label: 'Experiencia', value: '15+' },
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
  title: 'Uma estrutura clara para sair da ideia e chegar em uma pagina pronta para converter.',
  description:
    'Cada etapa existe para reduzir ruído, acelerar decisao e manter consistencia entre narrativa, interface e performance.',
  image: processImage,
  steps: [
    {
      id: 'discover',
      step: '01',
      title: 'Descobrimos o seu negocio',
      description:
        'Mapeamos posicionamento, publico, oferta e pontos de atrito para definir o angulo correto do projeto.',
    },
    {
      id: 'plan',
      step: '02',
      title: 'Planejamos a estrategia',
      description:
        'Organizamos copy, hierarchy visual, CTA e referencias para construir uma direcao coerente.',
    },
    {
      id: 'design',
      step: '03',
      title: 'Design e desenvolvimento',
      description:
        'Executamos o layout com refinamento visual, responsividade e foco em uma experiencia objetiva.',
    },
  ],
}

export const solutionsContent: { eyebrow: string; title: string; description: string; items: Solution[] } = {
  eyebrow: 'Nossas Solucoes',
  title: 'Servicos pensados para posicionamento, percepcao premium e conversao.',
  description:
    'A estrutura permite vender desde branding ate landing pages de alta intencao sem fragmentar a narrativa da marca.',
  items: [
    {
      id: 'branding',
      title: 'Branding Estrategico',
      description: 'Identidade visual e direcao criativa para marcas que precisam parecer maduras e memoraveis.',
      tags: ['Brand', 'Positioning'],
    },
    {
      id: 'visual',
      title: 'Identidade Visual',
      description: 'Sistemas visuais, assets e refinamento estetico para canais digitais e campanhas.',
      tags: ['Visual system', 'Art direction'],
    },
    {
      id: 'social',
      title: 'Social Media',
      description: 'Pacotes editoriais com consistencia grafica e leitura rapida para reforco de marca.',
      tags: ['Content', 'Campaign'],
    },
    {
      id: 'landing',
      title: 'Websites e Landing Pages',
      description: 'Paginas com foco em clareza, prova social e CTA estrategico para captacao.',
      tags: ['UI/UX', 'Conversion'],
    },
  ],
}

export const testimonialsContent: { eyebrow: string; title: string; description: string; items: Testimonial[]; metrics: AboutStat[] } = {
  eyebrow: 'Reviews de Clientes',
  title: 'Credibilidade visual com relatos que reduzem friccao na decisao.',
  description:
    'Comentarios objetivos ajudam a sustentar preco, acelerar confianca e mostrar consistencia de entrega.',
  items: [
    {
      id: 'ricardo',
      name: 'Ricardo Almeida',
      role: 'CEO, consultoria',
      quote:
        'A nova apresentacao da marca ficou mais premium e a landing passou a conduzir melhor o usuario para contato.',
      avatar: reviewRicardo,
      rating: 5,
    },
    {
      id: 'juliana',
      name: 'Juliana Costa',
      role: 'Fundadora, wellness brand',
      quote:
        'O processo foi rapido, claro e muito mais estrategico do que um layout bonito isolado.',
      avatar: reviewJuliana,
      rating: 5,
    },
    {
      id: 'matheus',
      name: 'Matheus Oliveira',
      role: 'Diretor comercial',
      quote:
        'A pagina ganhou linguagem mais sofisticada e uma hierarquia que valorizou melhor a oferta.',
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
      'Depende do escopo, mas projetos bem definidos costumam andar entre uma e tres semanas com revisoes objetivas.',
  },
  {
    id: 'deliverables',
    question: 'Vocês entregam so o design ou tambem a implementacao?',
    answer:
      'A operacao pode incluir estrategia, layout e desenvolvimento, conforme a necessidade da pagina.',
  },
  {
    id: 'copy',
    question: 'Posso contratar mesmo sem copy pronta?',
    answer:
      'Sim. A estrutura ja considera apoio na organizacao da mensagem e na hierarquia da oferta.',
  },
  {
    id: 'fit',
    question: 'Esse servico serve para qual tipo de empresa?',
    answer:
      'Funciona melhor para marcas que valorizam percepcao premium, clareza comercial e experiencia visual.',
  },
]

export const ctaContent: CTAContent = {
  eyebrow: 'Pronto para comecar?',
  title: 'O proximo passo da sua empresa pode comecar hoje.',
  subtitle:
    'Se a marca precisa parecer mais solida e vender com mais clareza, a proxima conversa ja deve ser sobre execucao.',
  primaryCta: { label: 'Solicitar orcamento', href: budgetWhatsappLink },
}
