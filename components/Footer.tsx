import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-2xl font-black mb-2">
            Spark<span className="text-[var(--color-secondary)]">Safe</span>
          </p>
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            NICEIC approved electricians covering Salford and Greater Manchester since 2014. All work certified and guaranteed.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm">
          <p className="font-bold text-[var(--color-secondary)] mb-2">Contact</p>
          <a href="tel:01610000005" className="hover:text-[var(--color-secondary)] font-bold text-lg">0161 000 0005</a>
          <a href="mailto:hello@spark-safe.demo" className="text-white/60 hover:text-white">hello@spark-safe.demo</a>
          <p className="text-white/60 mt-2">Salford, Greater Manchester</p>
          <nav aria-label="Footer navigation" className="flex gap-5 mt-4 text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-white/40 max-w-5xl mx-auto">
        © 2026 Spark Safe Electrical. Demo site.
      </div>
    </footer>
  );
}
