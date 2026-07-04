const reviews = [
  '“O projeto ficou mais claro, premium e objetivo.”',
  '“A navegacao guiou o usuario direto para a conversao.”',
  '“Conseguimos apresentar servicos e prova social sem poluir a pagina.”',
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="section content-section">
      <div className="section-heading">
        <span className="section-kicker">Reviews</span>
        <h2>O que clientes dizem</h2>
      </div>

      <div className="card-grid">
        {reviews.map((review) => (
          <blockquote key={review} className="content-card review-card">
            <p>{review}</p>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
