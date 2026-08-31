"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileLock2, House, KeyRound, MapPinned, MessageSquareText, ShieldCheck, TrendingUp } from "lucide-react";

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
  { label: "My Properties", href: "#properties" },
  { label: "Document Vault", href: "#vault" },
  { label: "Valuation Request", href: "#valuation" },
  { label: "Messages", href: "#messages" },
  { label: "Support", href: "#support" },
];

const HIGHLIGHTS = [
  "Verified Buyers Only (Strict Financial & Identity Checks)",
  "Transparent Title Clearance & Tax Computation",
  "End-to-End Protection by Licensed Legal Practitioners",
];

const SERVICES = [
  {
    title: "Property Listing Management",
    items: [
      "Upload property photos, descriptions, pricing, and location data.",
      "View status as Pending Review, Active, Under Offer, or Sold.",
      "Access comparative market analysis for your specific area.",
    ],
    icon: House,
  },
  {
    title: "Legal Document Vault",
    items: [
      "Use an encrypted upload portal for TCT/CCT, tax declaration, and valid IDs.",
      "Monitor verification checks on your title to assure buyers of legitimacy.",
      "Track capital gains tax and real estate tax settlement statuses.",
    ],
    icon: FileLock2,
  },
  {
    title: "Buyer Inquiries & Offers",
    items: [
      "Review letters of intent and purchase offers without delays.",
      "Use secure communication channels with your assigned broker or representative.",
      "Track every milestone from down payment through final deed execution.",
    ],
    icon: MessageSquareText,
  },
];

const LISTINGS = [
  { title: "300 sqm Ancestral Lot with Clean Title", location: "Antipolo City, Rizal", price: "₱6,800,000", tag: "Active Listing" },
  { title: "Modern Mixed-Use Property", location: "Cebu City", price: "₱11,200,000", tag: "Under Offer" },
  { title: "Commercial Parcel with DP", location: "General Santos City", price: "₱9,100,000", tag: "Document Verification" },
];

const WORKFLOW = [
  { step: "01", title: "Submit Property Details", body: "Input property specs and upload initial ownership documents to the secure vault." },
  { step: "02", title: "Title Verification & Valuation", body: "Legal team checks your title while brokers establish optimal market pricing." },
  { step: "03", title: "Marketing & Buyer Matching", body: "Your property is deployed to verified buyers and promoted across active broker channels." },
  { step: "04", title: "Closing & Proceeds Release", body: "Complete the deed of sale, clear government taxes, and receive sales proceeds safely." },
];

const TESTIMONIALS = [
  { quote: "Selling our family land seemed overwhelming given the messy paperwork, but uploading documents to the secure vault and letting the team handle the extrajudicial settlement made all the difference.", author: "Land Inheritor" },
  { quote: "I loved being able to track my buyer’s offer and the status of my capital gains tax clearance directly from my phone.", author: "Condo Owner" },
];

export default function SellerPortalPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.paperSoft, color: COLORS.ink }}>
      <header className="sticky top-0 z-20 border-b" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.35)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm" style={{ backgroundColor: COLORS.forest, color: COLORS.brassLight }}>
              <House size={20} />
            </div>
            <div>
              <p className="font-semibold" style={{ color: COLORS.forest }}>Pawingi Realty</p>
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: COLORS.ink, opacity: 0.7 }}>Seller Portal</p>
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
            <TrendingUp size={15} /> List My Property
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em]" style={{ color: COLORS.brass }}>Property Listing &amp; Document Tracker</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl" style={{ color: COLORS.forest }}>
              Sell Your Property Securely With Verified Legal and Market Support
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(27,34,51,0.76)" }}>
              Track your property listing status, monitor buyer inquiries, and oversee your land title transfer documents in one secure dashboard.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#properties" className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>
                Add / Submit Property <ArrowRight size={16} />
              </Link>
              <button type="button" className="inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold" style={{ borderColor: "rgba(184,146,46,0.4)", color: COLORS.forest, backgroundColor: COLORS.paper }}>
                Request Free Property Valuation
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
                <p className="text-xs uppercase tracking-[0.18em]" style={{ color: COLORS.brass }}>Property Snapshot</p>
                <h2 className="mt-2 text-2xl font-semibold" style={{ color: COLORS.forest }}>Current status</h2>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-semibold uppercase" style={{ borderColor: "rgba(184,146,46,0.3)", color: COLORS.forest }}>Verified</div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>3</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Assets</p>
              </div>
              <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>12</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Inquiries</p>
              </div>
              <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>02</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Offers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Seller Tools</p>
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

      <section id="properties" className="bg-[#0B1730] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brassLight }}>Your Submitted Properties</p>
              <h2 className="mt-3 text-3xl font-semibold">Current market status of your assets</h2>
            </div>
            <button type="button" className="hidden rounded-sm border px-4 py-2 text-sm font-semibold md:inline-flex" style={{ borderColor: "rgba(230,199,103,0.4)", color: COLORS.paper }}>View Portfolio</button>
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
                    <button type="button" className="rounded-sm px-3 py-2 text-xs font-semibold" style={{ backgroundColor: COLORS.brassLight, color: COLORS.forest }}>View Document Status</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Seller Journey</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Your 4-step selling & transfer journey</h2>
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
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Seller Assurance</p>
            <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Maximizing value, protecting ownership</h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(27,34,51,0.78)" }}>
              Selling property in the Philippines involves navigating strict tax regulations, municipal requirements, and title authentications. The seller portal gives you absolute transparency, ensuring your documents remain secure in an encrypted vault while licensed professionals handle negotiations and government compliance on your behalf.
            </p>
          </div>
          <div className="rounded-sm border p-8" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
            <div className="mb-6 flex items-center gap-3">
              <ShieldCheck size={24} style={{ color: COLORS.brass }} />
              <h3 className="text-xl font-semibold" style={{ color: COLORS.forest }}>Seller confidence</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Encrypted vault keeps important title and ID documents secure.",
                "Verified buyer screening reduces risk and protects your property interests.",
                "Transparent milestones keep you informed from listing to release.",
                "Licensed legal professionals manage compliance and transfer processing.",
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
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Seller Success Stories</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Property owners are seeing faster results</h2>
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
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Need Help?</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Have questions about selling your property?</h2>
          <p className="mt-3 text-sm text-slate-600">Reach out to your dedicated listing coordinator today.</p>
          <form className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium" style={{ color: COLORS.forest }}>
              Full Name
              <input className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium" style={{ color: COLORS.forest }}>
              Email Address
              <input className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium md:col-span-2" style={{ color: COLORS.forest }}>
              Property Type
              <select className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }}>
                <option>Residential Lot</option>
                <option>Condominium</option>
                <option>Commercial Space</option>
                <option>Agricultural Land</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium md:col-span-2" style={{ color: COLORS.forest }}>
              Inquiry Details
              <textarea rows={5} className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="rounded-sm px-5 py-3 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>Contact Coordinator</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t" style={{ backgroundColor: COLORS.forestDark, borderColor: "rgba(230,199,103,0.2)" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 text-sm md:grid-cols-3 lg:px-10">
          <div>
            <p className="font-semibold text-white">Firm Info</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Seller Assistance Center</li>
              <li>Client Support Lines</li>
              <li>sellers@firmdomain.com</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Seller Guide</li>
              <li>Tax Calculation FAQ</li>
              <li>Required Documents Checklist</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Accreditations</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Licensed Real Estate Brokerage Firm</li>
              <li>Data Privacy Act Compliant</li>
            </ul>
          </div>
        </div>
        <div className="border-t px-6 py-5 text-center text-xs text-slate-300" style={{ borderColor: "rgba(230,199,103,0.2)" }}>
          © 2026 [Firm Name]. Seller Portal. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
