const answers = [
  {
    question: 'Como essa pasta de componentes ajuda?',
    answer:
      'Cada secao fica isolada, facilitando manutencao, reutilizacao e evolucao do layout.',
  },
  {
    question: 'Posso trocar a ordem das secoes depois?',
    answer:
      'Sim. Basta reorganizar os imports e a composicao dentro de App.tsx.',
  },
  {
    question: 'Da para estilizar cada bloco separadamente?',
    answer:
      'Sim. A estrutura ja deixa classes e secoes semanticas prontas para isso.',
  },
]

export function AnswersSection() {
  return (
    <section id="answers" className="section content-section">
      <div className="section-heading">
        <span className="section-kicker">Answers</span>
        <h2>Respostas rapidas</h2>
      </div>

      <div className="faq-list">
        {answers.map((item) => (
          <article key={item.question} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
