import type { Metadata } from "next";
import "./globals.css";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: { default: "Spark Safe Electrical | NICEIC Electricians Salford", template: "%s | Spark Safe Electrical" },
  description: "NICEIC approved electricians covering Salford and Greater Manchester. Fuse boards, rewires, EV chargers, emergency call-outs. No call-out fee.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[var(--color-secondary)] focus:text-[var(--color-primary)] focus:rounded focus:shadow-lg">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
