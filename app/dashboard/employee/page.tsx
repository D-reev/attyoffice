"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2, ClipboardCheck, Headset, Users } from "lucide-react";

const COLORS = {
  forest: "#14274E",
  forestDark: "#0B1730",
  paper: "#FFFFFF",
  paperSoft: "#EEF2F8",
  brass: "#B8922E",
  brassLight: "#E6C767",
  ink: "#1B2233",
};

export default function EmployeePortalPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.paperSoft, color: COLORS.ink }}>
      <header className="sticky top-0 z-20 border-b" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.35)" }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-sm" style={{ backgroundColor: COLORS.forest, color: COLORS.brassLight }}><BriefcaseBusiness size={20} /></div>
            <div>
              <p className="font-semibold" style={{ color: COLORS.forest }}>Pawingi Realty</p>
              <p className="text-[10px] uppercase tracking-[0.2em]" style={{ color: COLORS.ink, opacity: 0.7 }}>Employee Portal</p>
            </div>
          </Link>
          <button type="button" className="inline-flex items-center gap-2 rounded-sm px-4 py-2 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>
            <ClipboardCheck size={15} /> Daily Ops
          </button>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em]" style={{ color: COLORS.brass }}>Internal operations</p>
            <h1 className="max-w-2xl text-4xl font-semibold leading-tight md:text-5xl" style={{ color: COLORS.forest }}>Support the property lifecycle with organized internal workflows.</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(27,34,51,0.76)" }}>Coordinate support requests, maintain compliance checklists, and keep all customer-facing departments aligned across the transaction process.</p>
            <div className="mt-8 flex gap-4">
              <Link href="#tasks" className="inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold" style={{ backgroundColor: COLORS.forest, color: COLORS.paper }}>
                Review Tasks <ArrowRight size={16} />
              </Link>
              <button type="button" className="rounded-sm border px-5 py-3 text-sm font-semibold" style={{ borderColor: "rgba(184,146,46,0.4)", color: COLORS.forest, backgroundColor: COLORS.paper }}>Open Help Desk</button>
            </div>
          </div>

          <div className="rounded-sm border p-8" style={{ backgroundColor: COLORS.paper, borderColor: "rgba(184,146,46,0.3)" }}>
            <div className="mb-8 flex items-center gap-3">
              <Headset size={26} style={{ color: COLORS.brass }} />
              <div>
                <p className="text-xs uppercase tracking-[0.18em]" style={{ color: COLORS.brass }}>Priority queue</p>
                <h2 className="text-2xl font-semibold" style={{ color: COLORS.forest }}>Today</h2>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["14", "Open tickets"],
                ["09", "Reviews"],
                ["06", "Escalations"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-sm border p-4" style={{ borderColor: "rgba(184,146,46,0.25)", backgroundColor: COLORS.paperSoft }}>
                  <p className="text-3xl font-semibold" style={{ color: COLORS.forest }}>{value}</p>
                  <p className="mt-2 text-[11px] uppercase tracking-[0.12em]" style={{ color: COLORS.ink, opacity: 0.68 }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tasks" className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: "Support Requests", items: ["Resolve customer onboarding issues.", "Escalate missing documents and approval blockers."], icon: Headset },
            { title: "Compliance Checklists", items: ["Confirm property and transfer completeness.", "Track verification deadlines and SLA progress."], icon: ClipboardCheck },
            { title: "Team Coordination", items: ["Share status updates across sales and legal units.", "Synchronize follow-ups with property operations."], icon: Users },
          ].map(({ title, items, icon: Icon }) => (
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

      <footer className="border-t" style={{ backgroundColor: COLORS.forestDark, borderColor: "rgba(230,199,103,0.2)" }}>
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-300 lg:px-10">© 2026 [Firm Name]. Employee Portal. All Rights Reserved.</div>
      </footer>
    </main>
  );
}
