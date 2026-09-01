"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight, KeyRound, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "../../lib/supabase";

const ROLE_DESTINATIONS: Record<string, string> = {
  customer: "/dashboard/customer",
  broker: "/dashboard/broker",
  unverified_broker: "/dashboard/broker/verification",
  seller: "/dashboard/seller",
  unverified_seller: "/dashboard/seller/verification",
  admin: "/dashboard/admin",
  employee: "/dashboard/employee",
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");
    setIsLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error || !data.user) {
      setErrorMessage("Invalid email or password. Use a Supabase Auth account, then verify its role in the profiles table.");
      setIsLoading(false);
      return;
    }

    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", data.user.id)
      .single();

    const destination = profile?.role ? ROLE_DESTINATIONS[profile.role] : undefined;
    if (profileError || !destination) {
      await supabase.auth.signOut();
      setErrorMessage("Your account is signed in but has no valid role assigned. Please contact support.");
      setIsLoading(false);
      return;
    }

    // Show success toast
    toast.success(`Welcome! Redirecting to your dashboard...`);
    
    // Wait for session to sync to cookies before redirecting
    setTimeout(() => {
      router.push(destination);
      setIsLoading(false);
    }, 800);
  }

  return (
    <main className="min-h-screen grid lg:grid-cols-[0.9fr_1.1fr]" style={{ backgroundColor: "#EEF2F8", color: "#1B2233" }}>
      <section className="hidden lg:flex flex-col justify-between p-12" style={{ backgroundColor: "#14274E", color: "#FFFFFF" }}>
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold"><ArrowLeft size={17} /> Back to Pawingi Realty</Link>
        <div className="max-w-md">
          <p className="text-xs tracking-[0.2em] uppercase mb-5" style={{ color: "#E6C767" }}>Pawingi Realty Portal</p>
          <h1 className="text-5xl font-semibold leading-tight mb-5">Your property work, in one secure place.</h1>
          <p className="leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>Access the workspace assigned to your account. Customers, brokers, sellers, employees, and administrators each see the tools meant for their role.</p>
        </div>
        <div className="flex items-center gap-2 text-xs" style={{ color: "rgba(255,255,255,0.62)" }}><ShieldCheck size={16} style={{ color: "#E6C767" }} /> Protected by Supabase authentication</div>
      </section>

      <section className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md">
          <Link href="/" className="lg:hidden inline-flex items-center gap-2 text-sm font-semibold mb-12" style={{ color: "#14274E" }}><ArrowLeft size={17} /> Back to Pawingi Realty</Link>
          <div className="border p-7 sm:p-10" style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(184,146,46,0.4)" }}>
            <div className="flex items-center gap-3 mb-8">
              <span className="grid place-items-center w-11 h-11 rounded-sm" style={{ backgroundColor: "#14274E", color: "#E6C767" }}><KeyRound size={20} /></span>
              <div><p className="text-xs tracking-[0.16em] uppercase" style={{ color: "#B8922E" }}>Member access</p><h2 className="text-2xl font-semibold" style={{ color: "#14274E" }}>Sign in</h2></div>
            </div>
            <form onSubmit={handleLogin} className="space-y-5">
              <label className="flex flex-col gap-2 text-sm font-medium">Email address<input required type="email" autoComplete="email" value={email} onChange={(event) => setEmail(event.target.value)} className="px-3.5 py-3 border rounded-sm font-normal focus:outline-2 focus:outline-offset-2" style={{ borderColor: "rgba(184,146,46,0.5)" }} /></label>
              <label className="flex flex-col gap-2 text-sm font-medium">Password<input required type="password" autoComplete="current-password" value={password} onChange={(event) => setPassword(event.target.value)} className="px-3.5 py-3 border rounded-sm font-normal focus:outline-2 focus:outline-offset-2" style={{ borderColor: "rgba(184,146,46,0.5)" }} /></label>
              {errorMessage && <p role="alert" className="text-sm leading-relaxed" style={{ color: "#A33A2B" }}>{errorMessage}</p>}
              <button disabled={isLoading} type="submit" className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm text-sm font-semibold disabled:opacity-60" style={{ backgroundColor: "#14274E", color: "#FFFFFF" }}>{isLoading ? "Signing in..." : "Continue"} {!isLoading && <ArrowRight size={16} />}</button>
            </form>
            <p className="text-xs leading-relaxed mt-6 opacity-65">Your role is assigned by the Pawingi Realty team and determines which portal you can access.</p>
          </div>
        </div>
      </section>
    </main>
  );
}