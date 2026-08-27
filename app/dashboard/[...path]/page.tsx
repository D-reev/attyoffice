"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, BarChart3, Building2, ClipboardCheck, FileText, LogOut, Plus, ShieldCheck, Users } from "lucide-react";
import { supabase } from "../../../lib/supabase";

const ROLE_LABELS: Record<string, string> = {
  customer: "Customer",
  broker: "Broker",
  unverified_broker: "Unverified broker",
  seller: "Seller",
  unverified_seller: "Unverified seller",
  admin: "Administrator",
  employee: "Employee",
};

const PORTALS: Record<string, { eyebrow: string; title: string; description: string; actions: string[]; stats: string[] }> = {
  seller: { eyebrow: "Seller workspace", title: "Manage your property listings", description: "Create listings, review buyer inquiries, and keep your property documents organized.", actions: ["Add property listing", "Review inquiries", "Upload documents"], stats: ["Active listings", "Buyer inquiries", "Documents"] },
  broker: { eyebrow: "Broker workspace", title: "Coordinate every property transaction", description: "Track listings, match buyers and sellers, and move verified deals through the next step.", actions: ["Browse listings", "Review clients", "Create transaction"], stats: ["Assigned listings", "Active clients", "Open transactions"] },
  admin: { eyebrow: "Administration", title: "Operate the Pawingi Realty portal", description: "Review users, approve verification requests, and monitor activity across the business.", actions: ["Manage users", "Review verifications", "View activity"], stats: ["Total users", "Pending reviews", "Active listings"] },
};

export default function DashboardPage() {
  const router = useRouter();
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Loading your workspace...");

  useEffect(() => {
    async function loadProfile() {
      const { data: authData } = await supabase.auth.getUser();
      if (!authData.user) {
        router.push("/login");
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", authData.user.id)
        .single();

      if (error || !profile?.role || !ROLE_LABELS[profile.role]) {
        await supabase.auth.signOut();
        setStatus("This account does not have a valid portal role.");
        return;
      }

      setRole(profile.role);
      setStatus("");
    }

    void loadProfile();
  }, [router]);

  async function handleSignOut() {
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <main className="min-h-screen p-6 sm:p-10" style={{ backgroundColor: "#EEF2F8", color: "#1B2233" }}>
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#14274E" }}><ArrowLeft size={17} /> Pawingi Realty</Link>
          <button type="button" onClick={handleSignOut} className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: "#14274E" }}><LogOut size={16} /> Sign out</button>
        </header>
        <section className="border p-8 sm:p-12" style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(184,146,46,0.4)" }}>
          <ShieldCheck size={30} style={{ color: "#B8922E" }} />
          {status ? <p className="mt-5 text-sm" role="status">{status}</p> : PORTALS[role] ? <PortalContent portal={PORTALS[role]} role={role} /> : <p className="mt-5">{ROLE_LABELS[role]} portal</p>}
        </section>
      </div>
    </main>
  );
}

function PortalContent({ portal, role }: { portal: typeof PORTALS[string]; role: string }) {
  const icons = role === "seller" ? [Plus, ClipboardCheck, FileText] : role === "broker" ? [Building2, Users, FileText] : [Users, ClipboardCheck, BarChart3];
  return <>
    <p className="mt-5 text-xs tracking-[0.18em] uppercase" style={{ color: "#B8922E" }}>{portal.eyebrow}</p>
    <h1 className="mt-2 text-3xl sm:text-4xl font-semibold" style={{ color: "#14274E" }}>{portal.title}</h1>
    <p className="mt-4 max-w-xl leading-relaxed opacity-75">{portal.description}</p>
    <div className="grid sm:grid-cols-3 gap-3 mt-8">{portal.stats.map((stat) => <div key={stat} className="border p-4" style={{ borderColor: "rgba(184,146,46,0.3)", backgroundColor: "#EEF2F8" }}><p className="text-2xl font-semibold" style={{ color: "#14274E" }}>0</p><p className="text-xs mt-1 opacity-70">{stat}</p></div>)}</div>
    <div className="grid sm:grid-cols-3 gap-3 mt-8">{portal.actions.map((action, index) => { const Icon = icons[index]; return <button key={action} type="button" className="flex items-center gap-2 border p-4 text-left text-sm font-semibold hover:bg-[#EEF2F8]" style={{ borderColor: "rgba(184,146,46,0.4)", color: "#14274E" }}><Icon size={17} style={{ color: "#B8922E" }} /> {action}</button>; })}</div>
  </>;
}