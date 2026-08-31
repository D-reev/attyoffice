"use client";

import Link from "next/link";
import { ArrowRight, Bell, Building2, CheckCircle2, FileText, Gavel, ShieldCheck, UserCog, Users } from "lucide-react";

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
  { label: "User Management", href: "#users" },
  { label: "Property Approvals", href: "#approvals" },
  { label: "Document Audits", href: "#audits" },
  { label: "System Settings", href: "#systems" },
  { label: "Support Tickets", href: "#support" },
];

const HIGHLIGHTS = [
  "Role-Based Access Control (RBAC) Enabled",
  "Real-Time Database Sync (PostgreSQL / Supabase)",
  "Encrypted Legal Document Vault",
];

const SERVICES = [
  {
    title: "User & Role Management",
    items: [
      "Review and approve broker licenses (PRC & DHSUD) and seller credentials.",
      "Grant, modify, or revoke permissions across admin, broker, and seller tiers.",
      "Track user logins, listing changes, and document access history.",
    ],
    icon: UserCog,
  },
  {
    title: "Listing & Compliance Oversight",
    items: [
      "Review, approve, or flag submitted property listings before public publication.",
      "Cross-check uploaded land titles (TCT/CCT) against due diligence notes.",
      "Handle reported listings, fraudulent claims, or client disputes.",
    ],
    icon: ShieldCheck,
  },
  {
    title: "System & Financial Audits",
    items: [
      "Oversee platform commission structures, processing fees, and payment gateways.",
      "Supervise secure cloud storage buckets for legal contracts and e-signatures.",
      "Track total active listings, closed title transfers, and user acquisition metrics.",
    ],
    icon: Gavel,
  },
];

const QUEUE_ITEMS = [
  { title: "500 sqm Commercial Lot – Escort Review Required", location: "Makati City, Metro Manila", price: "₱45,000,000", tag: "Pending Approval" },
  { title: "Central Residential Cluster – Title Recheck", location: "Quezon City", price: "₱28,500,000", tag: "Document Review" },
  { title: "Agri Land Block – Dispute Escalation", location: "Bacolod City", price: "₱12,900,000", tag: "Flagged Listing" },
];

const WORKFLOW = [
  { step: "01", title: "User Submission", body: "Brokers or sellers submit new accounts, listings, or legal transfer requests." },
  { step: "02", title: "Automated & Manual Check", body: "System validates file integrity while compliance officers check legal standing." },
  { step: "03", title: "Approval or Revision", body: "Admin grants clearance or flags items with specific compliance remarks." },
  { step: "04", title: "Live Deployment", body: "Approved listings go public; cleared legal documents move to the execution phase." },
];

const TESTIMONIALS = [
  { quote: "The automated role controls and document verification pipelines have cut our processing time for title transfers in half.", author: "Senior Compliance Officer" },
  { quote: "Complete visibility over our broker network and secure audit logs give us absolute peace of mind.", author: "Managing Director" },
];

export default function AdminPortalPage() {
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
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: COLORS.ink, opacity: 0.7 }}>Admin Portal</p>
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
            <Bell size={15} /> System Status: Optimal
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em]" style={{ color: COLORS.brass }}>Administrative Oversight</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl" style={{ color: COLORS.forest }}>
              Complete Administrative Control Over Platform Operations
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(27,34,51,0.76)" }}>
              Monitor broker performance, oversee legal document processing, manage user roles, and maintain platform-wide compliance.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="#approvals" className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>
                Review Pending Approvals <ArrowRight size={16} />
              </Link>
              <button type="button" className="inline-flex items-center gap-2 rounded-sm border px-5 py-3 text-sm font-semibold" style={{ borderColor: "rgba(184,146,46,0.4)", color: COLORS.forest, backgroundColor: COLORS.paper }}>
                Generate System Audit Report
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
                <p className="text-xs uppercase tracking-[0.18em]" style={{ color: COLORS.brass }}>Portal Summary</p>
                <h2 className="mt-2 text-2xl font-semibold" style={{ color: COLORS.forest }}>Executive Snapshot</h2>
              </div>
              <div className="rounded-full border px-3 py-1 text-xs font-semibold uppercase" style={{ borderColor: "rgba(184,146,46,0.3)", color: COLORS.forest }}>Operational</div>
            </div>
            <div className="space-y-5">
              <div className="grid grid-cols-3 gap-3">
                <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                  <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>128</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Users</p>
                </div>
                <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                  <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>24</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Checks</p>
                </div>
                <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                  <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>09</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>Alerts</p>
                </div>
              </div>
              <div className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium" style={{ color: COLORS.forest }}>Compliance health</span>
                  <span className="text-sm font-semibold" style={{ color: COLORS.brass }}>96%</span>
                </div>
                <div className="mt-4 h-2 w-full rounded-full" style={{ backgroundColor: "rgba(20,39,78,0.08)" }}>
                  <div className="h-2 rounded-full" style={{ width: "96%", backgroundColor: COLORS.brass }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="mb-10">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Management Modules</p>
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

      <section id="approvals" className="bg-[#0B1730] px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl lg:px-10">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brassLight }}>Administrative Queue</p>
              <h2 className="mt-3 text-3xl font-semibold">High-priority entries requiring review</h2>
            </div>
            <button type="button" className="hidden rounded-sm border px-4 py-2 text-sm font-semibold md:inline-flex" style={{ borderColor: "rgba(230,199,103,0.4)", color: COLORS.paper }}>Open Review Board</button>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {QUEUE_ITEMS.map(({ title, location, price, tag }) => (
              <div key={title} className="overflow-hidden rounded-sm border" style={{ backgroundColor: "rgba(255,255,255,0.03)", borderColor: "rgba(230,199,103,0.25)" }}>
                <div className="flex h-48 items-center justify-center border-b" style={{ borderColor: "rgba(230,199,103,0.25)", background: "linear-gradient(135deg, rgba(184,146,46,0.28), rgba(20,39,78,0.3))" }}>
                  <FileText size={48} style={{ color: COLORS.brassLight }} />
                </div>
                <div className="p-5">
                  <span className="inline-flex rounded-sm border px-2 py-1 text-[10px] uppercase tracking-[0.12em]" style={{ borderColor: "rgba(230,199,103,0.4)", color: COLORS.brassLight }}>{tag}</span>
                  <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>{location}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-2xl font-semibold text-white">{price}</span>
                    <button type="button" className="rounded-sm px-3 py-2 text-xs font-semibold" style={{ backgroundColor: COLORS.brassLight, color: COLORS.forest }}>Review Listing</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Platform Governance</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>4-Step Administrative Workflow</h2>
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
            <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Admin Directive</p>
            <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Upholding Platform Integrity and Security</h2>
            <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(27,34,51,0.78)" }}>
              The administrative architecture ensures that every transaction executed on the platform meets rigorous legal and regulatory standards in the Philippines. By combining strict verification protocols with advanced database security, the admin portal safeguards both clients and real estate professionals against fraudulent activities and non-compliance.
            </p>
          </div>
          <div className="rounded-sm border p-8" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
            <div className="mb-6 flex items-center gap-3">
              <ShieldCheck size={24} style={{ color: COLORS.brass }} />
              <h3 className="text-xl font-semibold" style={{ color: COLORS.forest }}>Operational protocols</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Mandatory title verification before publication.",
                "Document access controls tied to role permissions.",
                "Real-time listing, transfer, and user audit logging.",
                "Escalation framework for licensing, privacy, and dispute issues.",
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
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Internal System Feedback</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>What the team is saying</h2>
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
          <p className="text-xs uppercase tracking-[0.2em]" style={{ color: COLORS.brass }}>Support Desk</p>
          <h2 className="mt-3 text-3xl font-semibold" style={{ color: COLORS.forest }}>Need technical support or account escalation?</h2>
          <p className="mt-3 text-sm text-slate-600">Submit an internal ticket to the platform engineering or compliance team.</p>
          <form className="mt-8 grid gap-5 md:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium" style={{ color: COLORS.forest }}>
              Full Name
              <input className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium" style={{ color: COLORS.forest }}>
              Admin ID / Email
              <input className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium md:col-span-2" style={{ color: COLORS.forest }}>
              Issue Category
              <select className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }}>
                <option>Technical Bug</option>
                <option>Compliance Issue</option>
                <option>User Dispute</option>
                <option>Other</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium md:col-span-2" style={{ color: COLORS.forest }}>
              Description
              <textarea rows={5} className="rounded-sm border px-3 py-3 text-sm" style={{ borderColor: "rgba(184,146,46,0.4)", backgroundColor: COLORS.paperSoft }} />
            </label>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="rounded-sm px-5 py-3 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>Submit Ticket</button>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t" style={{ backgroundColor: COLORS.forestDark, borderColor: "rgba(230,199,103,0.2)" }}>
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 text-sm md:grid-cols-3 lg:px-10">
          <div>
            <p className="font-semibold text-white">Firm Info</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>Corporate Headquarters</li>
              <li>Admin Desk Contact Numbers</li>
              <li>secure@firmdomain.com</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Quick Links</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>System Logs</li>
              <li>Security Protocols</li>
              <li>Compliance Guidelines</li>
              <li>Admin FAQ</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-white">Accreditations</p>
            <ul className="mt-4 space-y-2 text-slate-300">
              <li>ISO Security Certified</li>
              <li>Data Privacy Act Compliant</li>
              <li>National Database Infrastructure</li>
            </ul>
          </div>
        </div>
        <div className="border-t px-6 py-5 text-center text-xs text-slate-300" style={{ borderColor: "rgba(230,199,103,0.2)" }}>
          © 2026 [Firm Name]. Admin Environment. All Rights Reserved.
        </div>
      </footer>
    </main>
  );
}
