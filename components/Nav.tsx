"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Spark Safe Electrical — home" className="font-black text-lg tracking-tight text-[var(--color-primary)]">
          Spark<span className="text-[var(--color-secondary-dark)]">Safe</span>
        </Link>
        <nav aria-label="Main navigation" className="hidden md:flex gap-8 text-sm font-medium text-[var(--color-text)]">
          <Link href="/" className="hover:text-[var(--color-secondary-dark)]">Home</Link>
          <Link href="/services" className="hover:text-[var(--color-secondary-dark)]">Services</Link>
          <Link href="/about" className="hover:text-[var(--color-secondary-dark)]">About</Link>
          <Link href="/contact" className="hover:text-[var(--color-secondary-dark)]">Contact</Link>
        </nav>
        <a href="tel:01610000005" className="hidden md:inline-flex items-center px-5 py-2 text-sm font-bold bg-[var(--color-secondary)] text-[var(--color-primary)] hover:bg-[var(--color-secondary-dark)] hover:text-white transition-colors rounded">
          0161 000 0005
        </a>
        <button aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)} className="md:hidden p-2">
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current mb-1" />
          <span className="block w-5 h-0.5 bg-current" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
          <a href="tel:01610000005" className="font-bold text-[var(--color-secondary-dark)]">0161 000 0005</a>
        </div>
      )}
    </header>
  );
}
