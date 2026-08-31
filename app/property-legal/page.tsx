"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  FileCheck2,
  Scale,
  Building2,
  MapPin,
  Phone,
  Mail,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  ScrollText,
  Search,
} from "lucide-react";
import PawingiLogo from "../public/PawingiLogo.jpg";


// ---------------------------------------------------------------------------
// Design tokens
// ---------------------------------------------------------------------------
const COLORS = {
  forest: "#14274E",
  forestDark: "#0B1730",
  paper: "#FFFFFF",
  paperDim: "#EEF2F8",
  brass: "#B8922E",
  brassLight: "#E6C767",
  seal: "#B8922E",
  ink: "#1B2233",
};

const FONT_DISPLAY = "font-['Fraunces']";
const FONT_BODY = "font-['Inter']";
const FONT_MONO = "font-['IBM_Plex_Mono']";

const cadastralGrid: React.CSSProperties = {
  backgroundImage: `
    repeating-linear-gradient(0deg, rgba(230,199,103,0.14) 0 1px, transparent 1px 72px),
    repeating-linear-gradient(90deg, rgba(230,199,103,0.14) 0 1px, transparent 1px 72px)
  `,
};

const cadastralGridDark: React.CSSProperties = {
  backgroundImage: `
    repeating-linear-gradient(0deg, rgba(31,59,47,0.10) 0 1px, transparent 1px 56px),
    repeating-linear-gradient(90deg, rgba(31,59,47,0.10) 0 1px, transparent 1px 56px)
  `,
};

// ---------------------------------------------------------------------------
// Content data
// ---------------------------------------------------------------------------
interface Property {
  id: string;
  tag: "For Sale" | "Pre-Selling" | "Commercial Lot";
  title: string;
  location: string;
  price: string;
  ref: string;
}

const PROPERTIES: Property[] = [
  { id: "p1", tag: "For Sale", title: "120 sqm Residential Lot — Prime Corner", location: "Santa Rosa, Laguna", price: "₱4,850,000", ref: "TCT-8821" },
  { id: "p2", tag: "Pre-Selling", title: "2BR Condominium Unit, Riverside Tower", location: "Ortigas, Pasig City", price: "₱7,200,000", ref: "CCT-1904" },
  { id: "p3", tag: "Commercial Lot", title: "500 sqm Commercial Frontage", location: "Lipa City, Batangas", price: "₱18,500,000", ref: "TCT-4477" },
  { id: "p4", tag: "For Sale", title: "Titled Farm Lot, Clean Boundary", location: "Tanauan, Batangas", price: "₱2,300,000", ref: "TCT-6650" },
];

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Acquiring land can be stressful, but the team handled title verification and the sales process seamlessly. Complete peace of mind from start to finish.",
    name: "M. Villanueva",
    role: "Property Buyer",
  },
  {
    quote:
      "Our family's extrajudicial settlement had stalled for years until this team stepped in. They moved the BIR eCAR and Registry of Deeds filings efficiently.",
    name: "R. Santos",
    role: "Title Transfer Client",
  },
];

interface ProcessStep {
  entry: string;
  title: string;
  body: string;
}

const PROCESS: ProcessStep[] = [
  { entry: "01", title: "Initial Consultation & Verification", body: "We review your property objectives, current title status, and the documents already on hand." },
  { entry: "02", title: "Legal & Financial Clearance", body: "Tax computations, document execution, and filings with the BIR, LGU, and Registry of Deeds." },
  { entry: "03", title: "Property / Contract Execution", body: "Secure signing of the deed and final settlement between all parties." },
  { entry: "04", title: "Turnover & Title Delivery", body: "You receive your updated Title (TCT/CCT) and Tax Declaration, hassle-free." },
];

const NAV_LINKS = [
  { label: "About Us", href: "#about" },
  { label: "Property Listings", href: "#listings" },
  { label: "Legal & Documentation", href: "#services" },
  { label: "Resources & Guides", href: "#resources" },
  { label: "Contact Us", href: "#contact" },
];

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function CornerBracket({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute w-8 h-8 border-[#E6C767] ${className}`}
      style={{ opacity: 0.7 }}
    />
  );
}

function SealBadge() {
  return (
    <div
      aria-hidden
      className="relative shrink-0 grid place-items-center w-24 h-24 rounded-full border-2 border-dashed rotate-[-9deg] motion-reduce:rotate-0"
      style={{ borderColor: COLORS.brassLight, color: COLORS.brassLight }}
    >
      <div className="absolute inset-1.5 rounded-full border border-[#E6C767]/60" />
      <div className="flex flex-col items-center leading-none">
        <ShieldCheck size={22} strokeWidth={1.75} />
        <span className={`${FONT_MONO} mt-1 text-[8px] tracking-[0.18em]`}>VERIFIED</span>
        <span className={`${FONT_MONO} text-[7px] tracking-[0.18em] opacity-70`}>PH TITLE</span>
      </div>
    </div>
  );
}

function TagPill({ tag }: { tag: Property["tag"] }) {
  return (
    <span
      className={`${FONT_MONO} inline-block text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-sm border`}
      style={{ borderColor: COLORS.brass, color: COLORS.forest, backgroundColor: "#FFFFFF" }}
    >
      {tag}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------

export default function PropertyLegalLandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serviceNeeded, setServiceNeeded] = useState("Buy Property");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={`${FONT_BODY} min-h-screen`} style={{ backgroundColor: COLORS.paper, color: COLORS.ink }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300..700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500&display=swap');
        html { scroll-behavior: smooth; }
        @media (prefers-reduced-motion: reduce) {
          html { scroll-behavior: auto; }
          * { animation-duration: 0.001ms !important; transition-duration: 0.001ms !important; }
        }
        .focus-ring:focus-visible {
          outline: 2px solid ${COLORS.brass};
          outline-offset: 3px;
        }
      `}</style>

      {/* ============================= HEADER ============================= */}
      <header
        className="sticky top-0 z-40 border-b"
        style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.35)" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 h-24 flex items-center justify-between gap-8">
          <a href="#top" className="flex items-center gap-4 shrink-0 focus-ring rounded-sm">
            <span
              className="relative block w-12 h-12 shrink-0 overflow-hidden rounded-sm"
            >
              <Image
                src={PawingiLogo}
                alt="Pawingi Realty"
                fill
                sizes="48px"
                className="object-contain"
                priority
              />
            </span>
            <span className={`${FONT_DISPLAY} text-lg tracking-tight`} style={{ color: COLORS.forest }}>
              Pawingi Realty
              <span className="block text-[10px] tracking-[0.2em] uppercase font-normal opacity-70" style={{ color: COLORS.ink }}>
                Realty &amp; Legal Counsel
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center xl:gap-4 sm:gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:opacity-70 transition-opacity focus-ring rounded-sm"
                style={{ color: COLORS.ink }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <div className="flex items-center gap-7 shrink-0">
              <a href="/login" className="text-sm font-semibold hover:opacity-70 transition-opacity focus-ring rounded-sm" style={{ color: COLORS.forest }}>
                Sign in
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-sm transition-transform hover:-translate-y-0.5 focus-ring"
                style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}
              >
                Book a Consultation
              </a>
            </div>
          </div>

          <button
            className="lg:hidden p-3 -mr-2 focus-ring rounded-sm"
            aria-label={navOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavOpen((v) => !v)}
          >
            {navOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {navOpen && (
          <div className="lg:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: "rgba(184,146,46,0.35)" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium" onClick={() => setNavOpen(false)}>
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-sm mt-2"
              style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}
              onClick={() => setNavOpen(false)}
            >
              Book a Consultation
            </a>
            <a
              href="/login"
              className="inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-sm border"
              style={{ borderColor: COLORS.forest, color: COLORS.forest }}
              onClick={() => setNavOpen(false)}
            >
              Sign in
            </a>
          </div>
        )}
      </header>

      {/* ============================== HERO =============================== */}
      <section id="top" className="relative overflow-hidden" style={{ backgroundColor: COLORS.forest }}>
        <div className="absolute inset-0" style={cadastralGrid} aria-hidden />
        <div className="relative max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div
            className="relative border rounded-sm px-6 py-12 md:px-14 md:py-16"
            style={{ borderColor: "rgba(230,199,103,0.45)" }}
          >
            <CornerBracket className="top-0 left-0 border-t-2 border-l-2 -mt-px -ml-px" />
            <CornerBracket className="top-0 right-0 border-t-2 border-r-2 -mt-px -mr-px" />
            <CornerBracket className="bottom-0 left-0 border-b-2 border-l-2 -mb-px -ml-px" />
            <CornerBracket className="bottom-0 right-0 border-b-2 border-r-2 -mb-px -mr-px" />

            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
              <div className="max-w-2xl">
                <p className={`${FONT_MONO} text-s tracking-[0.2em] uppercase mb-5`} style={{ color: COLORS.brassLight }}>
                  Certificate of Service — Brokerage &amp; Title Counsel
                </p>
                <h1 className={`${FONT_DISPLAY} text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] mb-6`} style={{ color: COLORS.paper }}>
                  Secure your property investments with complete legal confidence.
                </h1>
                <p className="text-base md:text-lg leading-relaxed mb-9" style={{ color: "rgba(255,255,255,0.82)" }}>
                  Trusted real estate brokerage, land title transfers, and comprehensive legal
                  due diligence, all under one roof, across the Philippines.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#listings"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-sm transition-transform hover:-translate-y-0.5 focus-ring"
                    style={{ backgroundColor: COLORS.brassLight, color: COLORS.forestDark }}
                  >
                    Explore Available Properties <ArrowRight size={16} />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-sm border transition-colors hover:bg-white/5 focus-ring"
                    style={{ borderColor: "rgba(255,255,255,0.5)", color: COLORS.paper }}
                  >
                    Request Legal / Title Assistance
                  </a>
                </div>
              </div>
              <SealBadge />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= TRUST HIGHLIGHTS ========================= */}
      <section className="border-b" style={{ borderColor: "rgba(184,146,46,0.35)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 grid sm:grid-cols-3 gap-8">
          {[
            { icon: ShieldCheck, title: "Licensed Real Estate Professionals", body: "PRC &amp; DHSUD registered brokers and legal practitioners." },
            { icon: FileCheck2, title: "End-to-End Documentation", body: "Registry of Deeds, BIR, and LGU processing handled for you." },
            { icon: Scale, title: "100% Secure Transactions", body: "Thorough due diligence and clean title verification, every time." },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="shrink-0 grid place-items-center w-11 h-11 rounded-sm" style={{ backgroundColor: COLORS.paperDim, color: COLORS.forest }}>
                <item.icon size={20} strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-semibold text-sm mb-1" style={{ color: COLORS.forest }}>{item.title}</p>
                <p className="text-sm opacity-75" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ============================ SERVICES ============================= */}
      <section id="services" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <p className={`${FONT_MONO} text-s tracking-[0.2em] uppercase mb-3`} style={{ color: COLORS.brass }}>
            Schedule A — Services Rendered
          </p>
          <h2 className={`${FONT_DISPLAY} text-3xl md:text-4xl leading-tight`} style={{ color: COLORS.forest }}>
            Full-service real estate &amp; legal solutions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(184,146,46,0.35)" }}>
          {[
            {
              icon: Building2,
              letter: "A",
              title: "Real Estate Brokerage & Investment",
              items: [
                "Property sales & marketing — residential lots, commercial spaces, and agricultural land",
                "Project selling with accredited subdivision and condominium developers",
                "Buyer & seller representation, negotiation, and fair market valuations",
              ],
            },
            {
              icon: ScrollText,
              letter: "B",
              title: "Title Transfer & Legal Documentation",
              items: [
                "Full execution of transfers for sales, donations, and extrajudicial settlements",
                "BIR & tax clearance — CGT, DST, donor's tax, and estate tax computation",
                "Registry of Deeds & LGU processing — eCAR, TCT/CCT, and tax declaration updates",
              ],
            },
            {
              icon: Search,
              letter: "C",
              title: "Due Diligence & Advisory",
              items: [
                "Title verification and annotation cleanup for encumbrances or adverse claims",
                "Land use & zoning verification, including conversion requirements",
                "Contract drafting & review — DOAS, CTS, lease contracts, and SPA",
              ],
            },
          ].map((col) => (
            <div key={col.letter} className="p-8 md:p-9 flex flex-col" style={{ backgroundColor: COLORS.paper }}>
              <div className="flex items-center gap-3 mb-6">
                <span className={`${FONT_MONO} text-xs px-2 py-1 rounded-sm`} style={{ backgroundColor: COLORS.forest, color: COLORS.brassLight }}>
                  {col.letter}
                </span>
                <col.icon size={20} strokeWidth={1.75} style={{ color: COLORS.forest }} />
              </div>
              <h3 className="font-semibold text-base mb-4" style={{ color: COLORS.forest }}>{col.title}</h3>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-snug opacity-80">
                    <CheckCircle2 size={15} className="shrink-0 mt-0.5" style={{ color: COLORS.brass }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= FEATURED LISTINGS ======================== */}
      <section id="listings" className="py-20 md:py-28" style={{ backgroundColor: COLORS.paperDim }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
            <div>
              <p className={`${FONT_MONO} text-s tracking-[0.2em] uppercase mb-3`} style={{ color: COLORS.brass }}>
                Schedule B — Featured Parcels
              </p>
              <h2 className={`${FONT_DISPLAY} text-3xl md:text-4xl`} style={{ color: COLORS.forest }}>
                Featured properties
              </h2>
            </div>
            <p className="text-sm opacity-70 max-w-sm">Handpicked properties, verified and ready for seamless acquisition.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROPERTIES.map((p) => (
              <a
                key={p.id}
                href="#contact"
                className="group block rounded-sm overflow-hidden border transition-shadow hover:shadow-lg focus-ring"
                style={{ borderColor: "rgba(184,146,46,0.35)", backgroundColor: COLORS.paper }}
              >
                <div className="relative h-36" style={{ backgroundColor: COLORS.forest, ...cadastralGrid }}>
                  <div className="absolute inset-0 grid place-items-center">
                    <Building2 size={28} strokeWidth={1.25} style={{ color: "rgba(255,255,255,0.55)" }} />
                  </div>
                  <span className={`${FONT_MONO} absolute bottom-2 right-2 text-[9px] tracking-wider px-1.5 py-0.5 rounded-sm`} style={{ backgroundColor: "rgba(11,23,48,0.75)", color: COLORS.brassLight }}>
                    Ref. {p.ref}
                  </span>
                </div>
                <div className="p-5">
                  <div className="mb-3"><TagPill tag={p.tag} /></div>
                  <h3 className="font-semibold text-sm leading-snug mb-2" style={{ color: COLORS.forest }}>{p.title}</h3>
                  <p className="flex items-center gap-1.5 text-xs opacity-70 mb-4">
                    <MapPin size={13} /> {p.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className={`${FONT_MONO} text-sm font-medium`} style={{ color: COLORS.forest }}>{p.price}</span>
                    <span className="text-xs font-semibold inline-flex items-center gap-1 group-hover:gap-1.5 transition-all" style={{ color: COLORS.brass }}>
                      View Details <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= PROCESS ============================== */}
      <section id="resources" className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <p className={`${FONT_MONO} text-s tracking-[0.2em] uppercase mb-3`} style={{ color: COLORS.brass }}>
            Schedule C — Order of Proceedings
          </p>
          <h2 className={`${FONT_DISPLAY} text-3xl md:text-4xl leading-tight`} style={{ color: COLORS.forest }}>
            A simple, transparent four-step process
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute left-[27px] top-2 bottom-2 w-px"
            style={{ backgroundColor: "rgba(184,146,46,0.4)" }}
            aria-hidden
          />
          <div className="space-y-10 md:space-y-12">
            {PROCESS.map((step) => (
              <div key={step.entry} className="relative flex gap-6 md:gap-8">
                <span
                  className={`${FONT_MONO} relative z-10 shrink-0 grid place-items-center w-14 h-14 rounded-full border-2 text-sm`}
                  style={{ borderColor: COLORS.brass, color: COLORS.forest, backgroundColor: COLORS.paper }}
                >
                  {step.entry}
                </span>
                <div className="pt-3">
                  <h3 className="font-semibold text-base mb-1.5" style={{ color: COLORS.forest }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed opacity-75 max-w-xl">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== ABOUT ================================ */}
      <section id="about" className="py-20 md:py-28" style={{ backgroundColor: COLORS.forest }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1fr_1.1fr] gap-14 items-center">
          <div
            className="relative aspect-[4/5] rounded-sm border grid place-items-center"
            style={{ borderColor: "rgba(230,199,103,0.4)", ...cadastralGridDark, backgroundColor: "rgba(255,255,255,0.03)" }}
          >
            <CornerBracket className="top-0 left-0 border-t-2 border-l-2 -mt-px -ml-px" />
            <CornerBracket className="bottom-0 right-0 border-b-2 border-r-2 -mb-px -mr-px" />
            <ScrollText size={56} strokeWidth={1} style={{ color: "rgba(230,199,103,0.6)" }} />
          </div>
          <div>
            <p className={`${FONT_MONO} text-s tracking-[0.2em] uppercase mb-3`} style={{ color: COLORS.brassLight }}>
              About the Firm
            </p>
            <h2 className={`${FONT_DISPLAY} text-3xl md:text-4xl leading-tight mb-6`} style={{ color: COLORS.paper }}>
              Expertise rooted in professional integrity
            </h2>
            <p className="text-sm md:text-base leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.8)" }}>
              Navigating the Philippine real estate market requires more than finding the
              right location. It demands bulletproof legal compliance and transparent
              documentation.
            </p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
              We bridge the gap between real estate transactions and legal expertise.
              Directed by licensed real estate professionals and legal practitioners, every
              transaction, from purchasing a first home to transferring ancestral land, is
              handled with accuracy, efficiency, and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* =========================== TESTIMONIALS ============================ */}
      <section className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <p className={`${FONT_MONO} text-s tracking-[0.2em] uppercase mb-3 text-center`} style={{ color: COLORS.brass }}>
          What Our Clients Say
        </p>
        <h2 className={`${FONT_DISPLAY} text-3xl md:text-4xl leading-tight text-center mb-14`} style={{ color: COLORS.forest }}>
          Signed, sealed, delivered
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="p-8 md:p-10 rounded-sm border"
              style={{ borderColor: "rgba(184,146,46,0.35)", backgroundColor: COLORS.paperDim }}
            >
              <p className={`${FONT_DISPLAY} italic text-lg md:text-xl leading-relaxed mb-8`} style={{ color: COLORS.ink }}>
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-3 pt-4 border-t border-dashed" style={{ borderColor: "rgba(184,146,46,0.5)" }}>
                <span className={`${FONT_MONO} text-sm font-medium`} style={{ color: COLORS.forest }}>{t.name}</span>
                <span className="text-xs opacity-60">— {t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ============================== CONTACT =============================== */}
      <section id="contact" className="py-20 md:py-28" style={{ backgroundColor: COLORS.paperDim }}>
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <p className={`${FONT_MONO} text-s tracking-[0.2em] uppercase mb-3`} style={{ color: COLORS.brass }}>
              Application for Assistance
            </p>
            <h2 className={`${FONT_DISPLAY} text-3xl md:text-4xl leading-tight mb-4`} style={{ color: COLORS.forest }}>
              Ready to buy, sell, or process your property documents?
            </h2>
            <p className="text-sm opacity-70 max-w-lg mx-auto">
              Send us a message today for a preliminary assessment of your property needs.
            </p>
          </div>

          <div
            className="rounded-sm border p-6 md:p-10"
            style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paper }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 size={32} className="mx-auto mb-4" style={{ color: COLORS.forest }} />
                <p className="font-semibold text-base mb-1" style={{ color: COLORS.forest }}>Inquiry received</p>
                <p className="text-sm opacity-70">A member of our team will get back to you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
                <label className="flex flex-col gap-1.5 text-sm sm:col-span-1">
                  <span className="font-medium" style={{ color: COLORS.forest }}>Full Name</span>
                  <input required type="text" name="name" placeholder="Juan Dela Cruz"
                    className="px-3.5 py-2.5 rounded-sm border bg-transparent text-sm focus-ring"
                    style={{ borderColor: "rgba(184,146,46,0.5)" }} />
                </label>
                <label className="flex flex-col gap-1.5 text-sm sm:col-span-1">
                  <span className="font-medium" style={{ color: COLORS.forest }}>Email Address</span>
                  <input required type="email" name="email" placeholder="juan@email.com"
                    className="px-3.5 py-2.5 rounded-sm border bg-transparent text-sm focus-ring"
                    style={{ borderColor: "rgba(184,146,46,0.5)" }} />
                </label>
                <label className="flex flex-col gap-1.5 text-sm sm:col-span-1">
                  <span className="font-medium" style={{ color: COLORS.forest }}>Phone / WhatsApp / Viber</span>
                  <input required type="tel" name="phone" placeholder="+63 9XX XXX XXXX"
                    className="px-3.5 py-2.5 rounded-sm border bg-transparent text-sm focus-ring"
                    style={{ borderColor: "rgba(184,146,46,0.5)" }} />
                </label>
                <label className="flex flex-col gap-1.5 text-sm sm:col-span-1">
                  <span className="font-medium" style={{ color: COLORS.forest }}>Service Needed</span>
                  <select
                    value={serviceNeeded}
                    onChange={(e) => setServiceNeeded(e.target.value)}
                    className="px-3.5 py-2.5 rounded-sm border bg-transparent text-sm focus-ring"
                    style={{ borderColor: "rgba(184,146,46,0.5)" }}
                  >
                    <option>Buy Property</option>
                    <option>Sell Property</option>
                    <option>Title Transfer / Legal Help</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
                  <span className="font-medium" style={{ color: COLORS.forest }}>Message / Property Details</span>
                  <textarea required name="message" rows={4} placeholder="Tell us about your property or your goals..."
                    className="px-3.5 py-2.5 rounded-sm border bg-transparent text-sm resize-none focus-ring"
                    style={{ borderColor: "rgba(184,146,46,0.5)" }} />
                </label>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-sm font-semibold px-8 py-3.5 rounded-sm transition-transform hover:-translate-y-0.5 focus-ring"
                    style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}
                  >
                    Submit Inquiry <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ============================== FOOTER ================================ */}
      <footer style={{ backgroundColor: COLORS.forestDark, color: "rgba(255,255,255,0.75)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 grid sm:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="relative block w-12 h-12 shrink-0 overflow-hidden rounded-sm">
                        <Image
                          src={PawingiLogo}
                          alt="Pawingi Realty"
                          fill
                          sizes="48px"
                          className="object-contain"
                        />
              </span>
              <span className={`${FONT_DISPLAY} text-base`} style={{ color: COLORS.paper }}>Pawingi Realty</span>
            </div>
            <p className="text-sm leading-relaxed flex items-start gap-2 mb-2">
              <MapPin size={15} className="shrink-0 mt-0.5" /> District 4, Bayombong, Nueva Vizcaya Philippines, 3700
            </p>
            <p className="text-sm flex items-center gap-2 mb-2">
              <Phone size={15} /> 0961 293 2351
            </p>
            <p className="text-sm flex items-center gap-2">
              <Mail size={15} /> mp@pawingirealty.com
            </p>
          </div>

          <div>
            <p className={`${FONT_MONO} text-xs tracking-[0.2em] uppercase mb-4`} style={{ color: COLORS.brassLight }}>Quick Links</p>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:opacity-70">Privacy Policy</a></li>
              <li><a href="#" className="hover:opacity-70">Terms of Service</a></li>
              <li><a href="#" className="hover:opacity-70">FAQ</a></li>
              <li><a href="#listings" className="hover:opacity-70">Listings</a></li>
            </ul>
          </div>

          <div>
            <p className={`${FONT_MONO} text-xs tracking-[0.2em] uppercase mb-4`} style={{ color: COLORS.brassLight }}>Accreditations</p>
            <ul className="space-y-2 text-sm">
              <li>Real Estate Broker Lic. 0030882</li>
              <li>DHSUD Acc. No. NCR-B-9091</li>
              <li>2024-2025 REBAP Santiago City President</li>
            </ul>
          </div>
        </div>
        <div className="border-t py-6 text-center text-xs" style={{ borderColor: "rgba(230,199,103,0.2)" }}>
          © 2026 Pawingi Realty &amp; Legal Counsel. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}
