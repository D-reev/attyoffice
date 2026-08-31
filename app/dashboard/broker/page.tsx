"use client";

import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ClipboardList, FileText, HandCoins, MapPinned, MessageSquareQuote, TrendingUp, Users } from "lucide-react";

const COLORS = {
  forest: "#14274E",
  forestDark: "#0B1730",
  paper: "#FFFFFF",
  paperSoft: "#EEF2F8",
  brass: "#B8922E",
  brassLight: "#E6C767",
  ink: "#1B2233",
};

const NAV_LINKS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "My Listings", href: "#listings" },
  { label: "Client Leads", href: "#leads" },
  { label: "Document Tracking", href: "#documents" },
  { label: "Commission Tracker", href: "#commissions" },
  { label: "Marketing Tools", href: "#marketing" },
];

const HIGHLIGHTS = [
  "Accredited Developer Inventory Access",
  "Direct BIR & Registry of Deeds Processing Support",
  "Real-Time Commission Tracking & Payouts",
];

const SERVICES = [
  {
    title: "Listing & Inventory Management",
    items: [
      "Publish residential, commercial, and agricultural properties.",
      "Access top-tier developer inventories for pre-selling condos and lots.",
      "Generate branded property sheets, virtual tour links, and social media kits.",
    ],
    icon: Building2,
  },
  {
    title: "Client & Lead Pipeline",
    items: [
      "Track buyer and seller journeys from initial inquiry to property turnover.",
      "Match buyer preferences with active database listings automatically.",
      "Synchronize viewings and client meetings across your calendar.",
    ],
    icon: Users,
  },
  {
    title: "Legal & Title Processing Assistance",
    items: [
      "Upload buyer and seller IDs, DOAS, and tax declarations securely.",
      "Request preliminary CGT and DST computations with legal support.",
      "Monitor government processing stages from BIR eCAR to Registry of Deeds TCT issuance.",
    ],
    icon: ClipboardList,
  },
];

const LISTINGS = [
  { title: "150 sqm Pre-Selling Residential Lot", location: "Tagaytay City, Cavite", price: "₱3,500,000", tag: "Exclusive" },
  { title: "2BR Condo Unit – River Crest", location: "Pasig City", price: "₱5,800,000", tag: "Co-Brokerage" },
  { title: "Commercial Retail Space", location: "Davao City", price: "₱9,700,000", tag: "Active Lead" },
];

const WORKFLOW = [
  { step: "01", title: "Client Sourcing & Qualification", body: "Capture leads through integrated CRM and verify buyer budget and intent." },
  { step: "02", title: "Property Inspection & Negotiation", body: "Conduct viewings and execute secure reservation agreements." },
  { step: "03", title: "Legal Due Diligence", body: "Hand off title verification and tax calculations to the legal team." },
  { step: "04", title: "Closing & Commission Release", body: "Finalize deed execution, transfer the title, and receive commission payout." },
];

const TESTIMONIALS = [
  { quote: "Having direct backend legal support for title transfers has allowed me to close three times as many secondary market deals without getting bogged down in paperwork.", author: "Top Performing Broker" },
  { quote: "The integrated CRM and document tracker keep my clients informed at every stage of the transaction.", author: "Commercial Real Estate Broker" },
];

export default function BrokerPortalPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.paperSoft, color: COLORS.ink }}>
      <header className="sticky top-0 z-20 border-b" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.35)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm" style={{ backgroundColor: COLORS.forest, color: COLORS.brassLight }}>
              <Building2 size={20} />
            </div>
            <div>
              <p className="font-semibold" style={{ color: COLORS.forest }}>Pawingi Realty</p>
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: COLORS.ink, opacity: 0.7 }}>Broker Portal</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium transition-opacity hover:opacity-70" style={{ color: COLORS.ink }}>
                {item.label}
              </a>
            ))}
          </nav>

          <button type="button" className="inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>
            <TrendingUp size={15} /> Add New Listing
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em]" style={{ color: COLORS.brass }}>Sales & Client Pipeline</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl" style={{ color: COLORS.forest }}>
              Accelerate Your Real Estate Sales with Integrated Legal Support
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(27,34,51,0.76)" }}>
              Manage your active buyer pipelines, submit title transfer requests, and close property deals with complete institutional backing.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#leads" className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>
                View Active Leads <ArrowRight size={16} />
              </Link>
              <button type="button" className="inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold" style={{ borderColor: "rgba(184,146,46,0.4)", color: COLORS.forest, backgroundColor: COLORS.paper }}>
                Submit Title Transfer Request
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {HIGHLIGHTS.map((item) => (
                <span key={item} className="rounded-full border px-3 py-2 text-xs font-medium uppercase tracking-[0.12em]" style={{ borderColor: "rgba(184,146,46,0.35)", backgroundColor: COLORS.paper, color: COLORS.forest }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-sm border p-8" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.35)", boxShadow: "0 24px 60px rgba(20,39,78,0.08)" }}>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.18em]" style={{ color: COLORS.brass }}>Pipeline Snapshot</p>
                <h2 className="mt-2 text-2xl font-semibold" style={{ color: COLORS.forest }}>This Month</h2>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-semibold uppercase" style={{ borderColor: "rgba(184,146,46,0.3)", color: COLORS.forest }}>On track</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>42</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Leads</p>
              </div>
              <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>17</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Deals</p>
              </div>
              <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>₱12M</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Payout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Broker Tools</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Primary services offered</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map(({ title, items, icon: Icon }) => (
            <div key={title} className="rounded-sm border p-6" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm" style={{ backgroundColor: "rgba(184,146,46,0.12)", color: COLORS.brass }}>
                <Icon size={22} />
              </div>
              <h3 className="text-xl font-semibold" style={{ color: COLORS.forest }}>{title}</h3>
              <ul className="mt-5 space-y-3">
                {items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgba(27,34,51,0.72)" }}>
                    <CheckCircle2 className="mt-0.5 shrink-0" size={16} style={{ color: COLORS.brass }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="listings" className="bg-[#0B1730] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brassLight }}>Active Inventory</p>
              <h2 className="mt-3 text-3xl font-semibold">Your active inventory</h2>
            </div>
            <button type="button" className="hidden rounded-sm border px-4 py-2 text-sm font-semibold md:inline-flex" style={{ borderColor: "rgba(230,199,103,0.4)", color: COLORS.paper }}>View All Listings</button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {LISTINGS.map(({ title, location, price, tag }) => (
              <div key={title} className="overflow-hidden rounded-sm border" style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(230,199,103,0.25)" }}>
                <div className="flex h-48 items-center justify-center border-b" style={{ borderColor: "rgba(230,199,103,0.25)", background: "linear-gradient(135deg, rgba(184,146,46,0.28), rgba(20,39,78,0.3))" }}>
                  <MapPinned size={48} style={{ color: COLORS.brassLight }} />
                </div>
                <div className="p-5">
                  <span className="inline-flex rounded-sm border px-2 py-1 text-[10px] uppercase tracking-[0.12em]" style={{ borderColor: "rgba(230,199,103,0.4)", color: COLORS.brassLight }}>{tag}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{location}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-semibold text-white">{price}</span>
                    <button type="button" className="rounded-sm px-3 py-2 text-xs font-semibold" style={{ backgroundColor: COLORS.brassLight, color: COLORS.forest }}>Manage Listing</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Broker Sales Cycle</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Simplified closing workflow for brokers</h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {WORKFLOW.map(({ step, title, body }) => (
            <div key={step} className="rounded-sm border p-6" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
              <span className="text-xs uppercase tracking-[0.18em]" style={{ color: COLORS.brass }}>{step}</span>
              <h3 className="mt-4 text-xl font-semibold" style={{ color: COLORS.forest }}>{title}</h3>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(27,34,51,0.72)" }}>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#EEF2F8] px-6 py-20 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-sm border p-8" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Broker Partnership</p>
            <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Built by professionals, for professionals</h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(27,34,51,0.78)" }}>
              Real estate brokerage thrives on trust and speed. This portal empowers licensed brokers to focus on relationship-building and selling, while the internal legal and administrative teams handle the complex bottlenecks of title transfers, tax clearances, and government document processing.
            </p>
          </div>
          <div className="rounded-sm border p-8" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
            <div className="mb-6 flex items-center gap-3">
              <HandCoins size={24} style={{ color: COLORS.brass }} />
              <h3 className="text-xl font-semibold" style={{ color: COLORS.forest }}>Broker advantage</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Automated lead qualification and buyer matching.",
                "End-to-end document workflow with legal tracking.",
                "Clear commission visibility and payout monitoring.",
                "Faster closure through coordinated due diligence support.",
              ].map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed" style={{ color: "rgba(27,34,51,0.75)" }}>
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: COLORS.brass }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Broker Success Stories</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Results from the field</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map(({ quote, author }) => (
            <div key={author} className="rounded-sm border p-8" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
              <p className="text-lg leading-relaxed" style={{ color: COLORS.ink }}>
                “{quote}”
              </p>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.12em]" style={{ color: COLORS.brass }}>{author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-sm border p-8 md:p-10" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>New Property Dispatch</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Ready to submit a new property or request legal assistance?</h2>
          <p className="mt-3 text-sm text-slate-600">Send a direct dispatch to the processing desk.</p>
          <form className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium" style={{ color: COLORS.forest }}>
              Broker Name
              <input className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium" style={{ color: COLORS.forest }}>
              PRC License Number
              <input className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium" style={{ color: COLORS.forest }}>
              Client Name
              <input className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium" style={{ color: COLORS.forest }}>
              Request Type
              <select className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }}>
                <option>Title Transfer</option>
                <option>Tax Computation</option>
                <option>Due Diligence Check</option>
                <option>Other</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium md:col-span-2" style={{ color: COLORS.forest }}>
              Details
              <textarea rows={5} className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="rounded-sm px-5 py-3 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>Send Dispatch</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t" style={{ backgroundColor: COLORS.forestDark, borderColor: "rgba(230,199,103,0.2)" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 text-sm md:grid-cols-3 lg:px-10">
          <div>
            <p className="font-semibold text-white">Firm Info</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Broker Support Desk</li>
              <li>Hotline Numbers</li>
              <li>brokers@firmdomain.com</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Commission Guidelines</li>
              <li>Developer Price Lists</li>
              <li>Downloadable Forms</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Accreditations</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>PRC Licensed Real Estate Broker Network</li>
              <li>DHSUD Accredited</li>
            </ul>
          </div>
        </div>
        <div className="border-t px-6 py-5 text-center text-xs text-slate-300" style={{ borderColor: "rgba(230,199,103,0.2)" }}>
          © 2026 [Firm Name]. Broker Portal. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
