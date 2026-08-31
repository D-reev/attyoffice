"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileSearch, House, KeyRound, Search, ShieldCheck } from "lucide-react";

const COLORS = {
  forest: "#14274E",
  forestDark: "#0B1730",
  paper: "#FFFFFF",
  paperSoft: "#EEF2F8",
  brass: "#B8922E",
  brassLight: "#E6C767",
  ink: "#1B2233",
};

const FEATURED = [
  { title: "Prime Residential Lot", location: "Santa Rosa, Laguna", price: "₱4,850,000", tag: "For Sale" },
  { title: "Riverside Condo Unit", location: "Ortigas, Pasig", price: "₱7,200,000", tag: "Pre-Selling" },
  { title: "Commercial Frontage Lot", location: "Lipa, Batangas", price: "₱18,500,000", tag: "Commercial" },
];

export default function CustomerPortalPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.paperSoft, color: COLORS.ink }}>
      <header className="sticky top-0 z-20 border-b" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.35)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm" style={{ backgroundColor: COLORS.forest, color: COLORS.brassLight }}><House size={20} /></div>
            <div>
              <p className="font-semibold" style={{ color: COLORS.forest }}>Pawingi Realty</p>
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: COLORS.ink, opacity: 0.7 }}>Customer Portal</p>
            </div>
          </Link>
          <button type="button" className="inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>
            <Search size={15} /> Search Listings
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em]" style={{ color: COLORS.brass }}>Property Search Portal</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl" style={{ color: COLORS.forest }}>Find the right property with verified legal support.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(27,34,51,0.76)" }}>Browse titled lots, condominiums, and commercial spaces with due diligence guidance and secure transaction support.</p>
            <div className="mt-8 flex gap-4">
              <Link href="#listings" className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>
                Browse Listings <ArrowRight size={16} />
              </Link>
              <button type="button" className="rounded-sm border px-5 py-3 text-sm font-semibold" style={{ borderColor: "rgba(184,146,46,0.4)", color: COLORS.forest, backgroundColor: COLORS.paper }}>Book a Viewing</button>
            </div>
          </div>

          <div className="rounded-sm border p-8" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
            <div className="mb-8 flex items-center gap-3">
              <ShieldCheck size={26} style={{ color: COLORS.brass }} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em]" style={{ color: COLORS.brass }}>Account Security</p>
                <h2 className="text-2xl font-semibold" style={{ color: COLORS.forest }}>Verified and protected</h2>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Check title authenticity and due diligence notes.",
                "Track offer status and payment milestones.",
                "Access secure document updates from your dashboard.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm" style={{ color: "rgba(27,34,51,0.75)" }}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: COLORS.brass }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="listings" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Featured listings</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Properties available today</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURED.map(({ title, location, price, tag }) => (
            <div key={title} className="rounded-sm border p-5" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
              <div className="mb-4 flex h-40 items-center justify-center rounded-sm" style={{ background: "linear-gradient(135deg, rgba(184,146,46,0.28), rgba(20,39,78,0.15))" }}>
                <FileSearch size={42} style={{ color: COLORS.brass }} />
              </div>
              <span className="inline-flex rounded-sm border px-2 py-1 text-[10px] uppercase tracking-[0.12em]" style={{ borderColor: "rgba(184,146,46,0.3)", color: COLORS.forest }}>{tag}</span>
              <h3 className="mt-4 text-xl font-semibold" style={{ color: COLORS.forest }}>{title}</h3>
              <p className="mt-2 text-sm" style={{ color: "rgba(27,34,51,0.7)" }}>{location}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-2xl font-semibold" style={{ color: COLORS.forest }}>{price}</span>
                <button type="button" className="rounded-sm px-3 py-2 text-xs font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t" style={{ backgroundColor: COLORS.forestDark, borderColor: "rgba(230,199,103,0.2)" }}>
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-300 lg:px-10">© 2026 [Firm Name]. Customer Portal. All Rights Reserved.</div>
      </footer>
    </main>
  );
}
