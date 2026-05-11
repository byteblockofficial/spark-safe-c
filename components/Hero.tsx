import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Thick accent bar + strapline */}
        <div className="flex items-stretch gap-6 mb-10">
          <div className="w-1 bg-[var(--color-secondary)] rounded-full flex-shrink-0" aria-hidden="true" />
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--color-text-muted)] mb-1">
              NICEIC Approved · Part P Certified · Salford &amp; Greater Manchester
            </p>
            <p className="text-sm text-[var(--color-text-muted)]">No call-out fee · 24/7 emergency cover</p>
          </div>
        </div>

        {/* Giant headline */}
        <h1 className="text-5xl md:text-7xl font-black text-[var(--color-primary)] leading-none mb-8 tracking-tight">
          No power?<br />
          <span className="text-[var(--color-secondary-dark)]">No problem.</span>
        </h1>

        <p className="text-lg text-[var(--color-text-muted)] mb-10 max-w-xl leading-relaxed">
          Salford&apos;s most trusted electricians — fuse boards, rewires, EV chargers, and emergency call-outs done right the first time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="tel:01610000005" className="inline-flex items-center justify-center px-8 py-4 font-bold text-base bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary-dark)] hover:text-white transition-colors">
            Call 0161 000 0005
          </a>
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-bold text-base border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-colors">
            Get a free quote
          </Link>
        </div>
      </div>
    </section>
  );
}
