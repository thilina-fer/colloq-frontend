import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

import DottedBackground from "../components/backgroundEffect";
import ColloQLogo from "../components/logo";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // close on outside click (mobile menu)
  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // close on Esc
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white text-black">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <DottedBackground />

        {/* soft top/bottom glow (responsive sizes) */}
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-200/60 to-transparent blur-3xl sm:-top-44 sm:h-[520px] sm:w-[980px]" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-t from-gray-200/60 to-transparent blur-3xl sm:-bottom-44 sm:h-[520px] sm:w-[980px]" />
      </div>

      {/* Navbar */}
      <header className="relative z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2">
            <ColloQLogo size="text-2xl sm:text-3xl" />
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-10 text-sm font-semibold text-gray-700 md:flex">
            <a href="#features" className="hover:text-yellow-500 transition">
              Features
            </a>
            <a href="#pricing" className="hover:text-yellow-500 transition">
              Pricing
            </a>
            <a href="#how" className="hover:text-yellow-500 transition">
              How It Works
            </a>
          </nav>

          <div className="flex items-center gap-2">
            {/* Desktop CTA */}
            <button className="hidden rounded-xl bg-yellow-500 px-5 py-3 text-sm font-bold text-black shadow-sm hover:bg-yellow-400 transition sm:inline-flex">
              Book Session
            </button>

            {/* Mobile menu button */}
            <button
              className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white/80 p-2 shadow-sm backdrop-blur md:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Open menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="px-4 sm:px-6 md:hidden">
            <div
              ref={panelRef}
              className="rounded-2xl border border-gray-200 bg-white/90 p-4 shadow-lg backdrop-blur"
            >
              <nav className="flex flex-col gap-3 text-sm font-semibold text-gray-800">
                <a href="#features" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">
                  Features
                </a>
                <a href="#pricing" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">
                  Pricing
                </a>
                <a href="#how" onClick={() => setOpen(false)} className="hover:text-yellow-500 transition">
                  How It Works
                </a>
              </nav>

              <button
                onClick={() => setOpen(false)}
                className="mt-4 w-full rounded-xl bg-yellow-500 px-5 py-3 text-sm font-bold text-black shadow-sm hover:bg-yellow-400 transition"
              >
                Book Session
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Floating bubbles (hide on small screens to avoid overlap) */}
      <div className="pointer-events-none absolute inset-0 z-[5] hidden sm:block">
        <Bubble className="left-[5%] top-[18%]">
          <span className="font-bold text-yellow-500">G</span>
        </Bubble>

        <Bubble className="left-[12%] top-[46%]">
          <span className="text-xl font-semibold text-gray-700">∞</span>
        </Bubble>

        <Bubble className="right-[12%] top-[20%]">
          <span className="text-2xl font-bold text-black">N</span>
        </Bubble>

        <Bubble className="right-[6%] top-[30%]">
          <span className="text-2xl font-bold text-yellow-500">S</span>
        </Bubble>

        <Bubble className="right-[10%] top-[56%]">
          <span className="text-sm font-semibold text-gray-800">Uber</span>
        </Bubble>

        <Bubble className="right-[18%] top-[80%]">
          <span className="text-xl">🏠</span>
        </Bubble>

        {/* faint empty circles */}
        <Bubble className="left-[25%] top-[22%]" faint />
        <Bubble className="left-[70%] top-[28%]" faint size="lg" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-28">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur sm:px-6 sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            Over 1,000+ expert interviewers available now
          </div>

          {/* Title */}
          <h1 className="mt-8 font-bold leading-[1.05] text-black text-[34px] sm:text-[52px] md:text-[72px] lg:text-[80px]">
            How top professionals{" "}
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-gray-800 bg-clip-text text-transparent">
              prepare for interviews
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-gray-600 sm:text-base md:mt-8 md:text-lg">
            Practical interview prep loved by 100,000+ candidates and hiring
            managers. Master your next big opportunity with real-world practice.
          </p>

          {/* CTA */}
          <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <button className="w-full rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-bold text-black shadow-sm hover:bg-gray-100 transition sm:w-auto sm:px-7 sm:py-4">
              Book a Session
            </button>

            <button className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-bold text-white shadow-sm hover:bg-gray-900 transition sm:w-auto sm:px-7 sm:py-4">
              Start Practicing
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile CTA hint (optional) */}
          <p className="mt-6 text-xs text-gray-500 sm:hidden">
            Tip: Use the menu icon above to explore sections.
          </p>
        </div>
      </div>
    </section>
  );
}

/** Small bubble helper */
function Bubble({ className = "", children, faint = false, size = "md" }) {
  const sizes = {
    md: "h-14 w-14",
    lg: "h-20 w-20",
  };

  return (
    <div
      className={[
        "absolute grid place-items-center rounded-full bg-white shadow-md",
        faint ? "opacity-40 shadow-sm" : "opacity-100",
        sizes[size],
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
