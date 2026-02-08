import React from "react";
import { ArrowRight } from "lucide-react";

import DottedBackground from "../components/backgroundEffect";
import ColloQLogo from "../components/logo";

export default function HeroSection() {
  return (
    <section className="relative bg-white text-black">
      {/* Background Effect */}
      <div className="absolute inset-0">
        <DottedBackground />

        {/* soft top/bottom glow */}
        <div className="pointer-events-none absolute -top-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-200/60 to-transparent blur-3xl" />
        <div className="pointer-events-none absolute -bottom-44 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-gradient-to-t from-gray-200/60 to-transparent blur-3xl" />
      </div>

      {/* Navbar */}
      <header className="relative z-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 mt-3 py-4  ">
          <div className="flex items-center gap-2">

            <ColloQLogo size="text-3xl" />
          </div>

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

          <button className="rounded-xl bg-yellow-500 px-5 py-3 text-sm font-bold text-black shadow-sm hover:bg-yellow-400 transition">
            Book Session
          </button>
        </div>
        {/* <ColoQLogo /> */}
      </header>

      {/* Floating bubbles */}
      <div className="pointer-events-none absolute inset-0 z-[5]">
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
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-20 pt-8 md:pb-28 md:pt-14">
        <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-6 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            Over 1,000+ expert interviewers available now
          </div>

          {/* Title */}
          <h1 className="mt-30 font-bold text-[44px] leading-[1.05] text-black md:text-[80px]">
            How top professionals{" "}
            <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-gray-800 bg-clip-text text-transparent">
              prepare for interviews
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-gray-600 md:text-lg">
            Practical interview prep loved by 100,000+ candidates and hiring
            managers. Master your next big opportunity with real-world practice.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="rounded-xl border border-gray-300 bg-white px-7 py-4 text-sm font-bold text-black shadow-sm hover:bg-gray-100 transition">
              Book a Session
            </button>

            <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-black px-7 py-4 text-sm font-bold text-white shadow-sm hover:bg-gray-900 transition">
              Start Practicing
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
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
        "animate-float",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}
