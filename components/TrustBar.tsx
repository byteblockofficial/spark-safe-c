const stats = [
  { value: "NICEIC", label: "Approved Contractor" },
  { value: "Part P", label: "Certified" },
  { value: "24/7", label: "Emergency cover" },
  { value: "£0", label: "Call-out fee" },
  { value: "10+", label: "Years trading" },
];

export default function TrustBar() {
  return (
    <section aria-label="Trust signals" className="bg-[var(--color-primary)] py-5 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center md:justify-between gap-6">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-xl font-black text-[var(--color-secondary)]">{s.value}</p>
            <p className="text-xs text-white/70 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
