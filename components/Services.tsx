import Link from "next/link";

const services = [
  { title: "Fuse board upgrades", desc: "Modern consumer units with RCD protection. Required for safety compliance and often for home insurance. Fully certified and Part P registered." },
  { title: "Full & partial rewires", desc: "Complete house rewires or targeted rewires of older circuits. All work inspected, tested, and certified to BS 7671 wiring regulations." },
  { title: "EV charger installation", desc: "Home EV charger fitting for all major brands. OZEV-registered installer — grants may be available. Tethered and untethered units supplied and fitted." },
  { title: "Emergency call-outs", desc: "Power out, circuit trip, burning smell — we cover emergencies 24/7 across Salford and Greater Manchester. No call-out fee. Fast response." },
  { title: "Landlord electrical certificates", desc: "EICR (Electrical Installation Condition Report) for landlords. Legally required every 5 years. Reports issued same day." },
  { title: "Sockets, lighting & extras", desc: "New sockets, outdoor lighting, loft conversions, garden power — all small jobs handled with the same standard as the big ones." },
];

export default function Services() {
  return (
    <section className="py-20 px-6 bg-[var(--color-surface)]" aria-labelledby="services-heading">
      <div className="max-w-5xl mx-auto">
        <h2 id="services-heading" className="text-3xl font-black text-[var(--color-primary)] mb-2">
          What we do
        </h2>
        <p className="text-[var(--color-text-muted)] mb-12">Every job. Done properly.</p>

        {/* Numbered list */}
        <div>
          {services.map((s, i) => (
            <div key={s.title} className="flex gap-6 md:gap-10 py-8 border-b border-[var(--color-border)] last:border-0">
              <div
                className="text-4xl md:text-5xl font-black text-[var(--color-secondary)] leading-none flex-shrink-0 w-14 md:w-20 opacity-40 select-none"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2">{s.title}</h3>
                <p className="text-[var(--color-text-muted)] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 font-bold text-base bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary-dark)] hover:text-white transition-colors">
            Get a free no-obligation quote
          </Link>
        </div>
      </div>
    </section>
  );
}
