const quotes = [
  { q: "Called at 8pm with no power to half the house. Engineer arrived within 90 minutes, diagnosed a faulty RCBO and fixed it on the spot. Brilliant.", attr: "D.M. · Salford" },
  { q: "Had the fuse board replaced and three EV chargers installed across different properties. Every job was spotless — labelled, tested, certified. Highly recommend.", attr: "T.H. · Eccles" },
  { q: "EICR done for my rental property same week I called. Report was thorough and the remedial work was sorted before the tenant moved in. Seamless.", attr: "R.J. · Salford landlord" },
  { q: "Used Spark Safe for a full rewire on a 1960s house. They worked around our schedule, left the place clean every day, and the price was exactly as quoted.", attr: "K.L. · Worsley" },
  { q: "Needed sockets added to a garage conversion. Job was done in a morning, all neat behind the plasterboard. No mess, no drama, certificate issued the same day.", attr: "A.W. · Pendleton" },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden" aria-labelledby="reviews-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="reviews-heading" className="text-3xl font-black text-[var(--color-primary)] mb-2">
          What customers say
        </h2>
        <p className="text-[var(--color-text-muted)] mb-10">★★★★★ 4.8 from 210+ Google reviews</p>

        {/* Horizontal scrolling strip */}
        <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory -mx-6 px-6">
          {quotes.map((t) => (
            <figure
              key={t.attr}
              className="flex-shrink-0 w-72 snap-start bg-[var(--color-surface)] border border-[var(--color-border)] p-6"
            >
              <blockquote className="text-sm text-[var(--color-text)] leading-relaxed mb-4">&ldquo;{t.q}&rdquo;</blockquote>
              <figcaption className="text-xs font-bold text-[var(--color-text-muted)]">{t.attr}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
