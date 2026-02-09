import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Target,
  Briefcase,
  Check,
  Linkedin,
  Github,
  Instagram,
  Mail,
} from "lucide-react";

import ColloQLogo from "../components/logo";
import PricingCard from "../components/pricingCards";
import ChatbotWidget from "../components/ChatbotWidget";

export default function LandingPage() {
  const [open, setOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const panelRef = useRef(null);
  const heroRef = useRef(null);
  const sectionsRef = useRef([]);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
      setScrollY(scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // close on outside click (mobile menu)
  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (panelRef.current && !panelRef.current.contains(e.target))
        setOpen(false);
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

  // Pricing data array
  const pricingPlans = [
    {
      name: "Basic",
      price: "$29",
      period: "per session",
      description: "Perfect for getting started with mock interviews",
      features: [
        "1 Mock Interview Session",
        "Basic feedback report",
        "Session recording",
        "Email support",
      ],
      highlighted: false,
      buttonText: "Get Started",
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Most popular for serious job seekers",
      features: [
        "4 Mock Interview Sessions",
        "Detailed feedback reports",
        "Session recordings",
        "Priority email support",
        "Resume review",
        "Interview prep resources",
      ],
      highlighted: true,
      buttonText: "Start Now",
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Unlimited mock interviews",
        "Advanced analytics",
        "All session recordings",
        "24/7 priority support",
        "Custom interview scenarios",
        "Team management dashboard",
        "Dedicated account manager",
      ],
      highlighted: false,
      buttonText: "Contact Sales",
    },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        /* Scroll progress bar */
        .scroll-progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          height: 3px;
          background: linear-gradient(90deg, #fbbf24, #f59e0b, #fbbf24);
          z-index: 999;
          box-shadow: 0 0 10px rgba(251, 191, 36, 0.5);
          transition: width 0.1s ease-out;
        }

        /* Scroll fade-in animation */
        .scroll-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }

        .scroll-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Parallax effect for background */
        .parallax-bg {
          will-change: transform;
          transform-origin: center;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative overflow-hidden bg-white text-black">
        {/* Yellow Gradient Effects - Parallax */}
        <div
          className="absolute inset-0 parallax-bg"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          {/* Top yellow glow */}
          <div className="pointer-events-none absolute -top-32 left-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-b from-yellow-300/40 via-yellow-200/30 to-transparent blur-3xl sm:-top-44 sm:w-[980px]" />

          {/* Center yellow accent */}
          <div className="pointer-events-none absolute top-1/3 left-1/4 h-[300px] w-[300px] rounded-full bg-yellow-400/20 blur-3xl  sm:w-[400px]" />

          {/* Bottom subtle glow */}
          <div className="pointer-events-none absolute  left-1/2 h-[360px] w-[560px] -translate-x-1/2 rounded-full bg-gradient-to-t from-yellow-100/30 to-transparent blur-3xl  sm:w-[980px]" />
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
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
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
                  <a
                    href="#features"
                    onClick={() => setOpen(false)}
                    className="hover:text-yellow-500 transition"
                  >
                    Features
                  </a>
                  <a
                    href="#pricing"
                    onClick={() => setOpen(false)}
                    className="hover:text-yellow-500 transition"
                  >
                    Pricing
                  </a>
                  <a
                    href="#how"
                    onClick={() => setOpen(false)}
                    className="hover:text-yellow-500 transition"
                  >
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
          <Bubble className="animate-fadeIn delay-200 animate-float left-[5%] top-[18%]">
            <span className="font-bold text-yellow-500">G</span>
          </Bubble>

          <Bubble className="animate-fadeIn delay-300 animate-float left-[12%] top-[46%]">
            <span className="text-xl font-semibold text-gray-700">∞</span>
          </Bubble>

          <Bubble className="animate-fadeIn delay-400 animate-float right-[12%] top-[20%]">
            <span className="text-2xl font-bold text-black">N</span>
          </Bubble>

          <Bubble className="animate-fadeIn delay-500 animate-float right-[6%] top-[30%]">
            <span className="text-2xl font-bold text-yellow-500">S</span>
          </Bubble>

          <Bubble className="animate-fadeIn delay-600 animate-float right-[10%] top-[56%]">
            <span className="text-sm font-semibold text-gray-800">Uber</span>
          </Bubble>

          <Bubble className="animate-fadeIn delay-300 animate-float right-[18%] top-[80%]">
            <span className="text-xl">🏠</span>
          </Bubble>

          {/* faint empty circles */}
          <Bubble className="animate-fadeIn delay-400 animate-float left-[25%] top-[22%]" faint />
          <Bubble className="animate-fadeIn delay-500 animate-float left-[70%] top-[28%]" faint size="lg" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 md:pb-28">
          <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
            {/* Badge */}
            <div className="animate-fadeInUp delay-100 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-2 text-xs font-medium text-gray-700 shadow-sm backdrop-blur sm:px-6 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-yellow-500" />
              Over 1,000+ expert interviewers available now
            </div>

            {/* Title */}
            <h1 className="animate-fadeInUp delay-200 mt-8 font-bold leading-[1.05] text-black text-[34px] sm:text-[52px] md:text-[72px] lg:text-[80px]">
              How top professionals{" "}
              <span className="block bg-gradient-to-r from-yellow-400 via-yellow-500 to-gray-800 bg-clip-text text-transparent">
                prepare for interviews
              </span>
            </h1>

            {/* Subtitle */}
            <p className="animate-fadeInUp delay-300 mt-6 max-w-2xl text-sm font-normal leading-relaxed text-gray-600 sm:text-base md:mt-8 md:text-lg">
              Practical interview prep loved by 100,000+ candidates and hiring
              managers. Master your next big opportunity with real-world
              practice.
            </p>

            {/* CTA */}
            <div className="animate-fadeInUp delay-400 mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
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

      {/* Two Sides, One Mission Section */}
      <section
        ref={(el) => (sectionsRef.current[0] = el)}
        className="scroll-section bg-white px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="animate-fadeInUp mb-12 text-center sm:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-wide text-teal-500">
              WHY COLOQ
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Two Sides, One Mission
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Whether you're an experienced interviewer or an ambitious
              candidate, MockPro creates the perfect environment for growth and
              success.
            </p>
          </div>

          {/* Two Cards */}
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {/* For Candidates Card */}
            <div className="animate-fadeInUp delay-100 group rounded-2xl bg-white border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-pink-300 hover:-translate-y-2 sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-teal-50 transition-all duration-300 group-hover:bg-pink-100 group-hover:scale-110">
                <Target className="h-8 w-8 text-pink-500 transition-transform duration-300 group-hover:rotate-12" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-pink-600 sm:text-3xl">
                For Candidates
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                Practice with real industry experts who understand your target
                role inside and out. Get actionable feedback that transforms
                your interview performance.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-gray-700">
                    Industry-specific mock interviews
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-gray-700">
                    Real-time constructive feedback
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-gray-700">
                    Recorded sessions for review
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-gray-700">
                    Customized preparation plans
                  </span>
                </li>
              </ul>
            </div>

            {/* For Expert Interviewers Card */}
            <div className="animate-fadeInUp delay-200 group rounded-2xl bg-white border border-gray-200 p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-teal-300 hover:-translate-y-2 sm:p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-teal-50 transition-all duration-300 group-hover:bg-teal-100 group-hover:scale-110">
                <Briefcase className="h-8 w-8 text-gray-700 transition-all duration-300 group-hover:text-teal-600 group-hover:rotate-12" />
              </div>

              <h3 className="mb-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-teal-600 sm:text-3xl">
                For Expert Interviewers
              </h3>

              <p className="mb-6 leading-relaxed text-gray-600">
                Share your expertise and help shape the next generation of
                professionals while building a flexible income stream on your
                own schedule.
              </p>

              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-gray-700">
                    Set your own rates and availability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-gray-700">
                    Choose your expertise areas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-gray-700">
                    Make real impact on careers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-300 group-hover:scale-125" />
                  <span className="text-gray-700">
                    Build your professional brand
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        ref={(el) => (sectionsRef.current[1] = el)}
        className="scroll-section bg-gray-50 px-4 py-16 sm:px-6 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="animate-fadeInUp mb-12 text-center sm:mb-16">
            <p className="mb-3 text-sm font-semibold tracking-wide text-yellow-500">
              PRICING
            </p>
            <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              Choose Your Plan
            </h2>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Select the perfect plan for your interview preparation journey
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="animate-fadeInUp delay-100 grid gap-6 md:grid-cols-3 md:gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* ////////////////////////////////////////////////////////////////////////// */}
      <section
        ref={(el) => (sectionsRef.current[2] = el)}
        className="scroll-section relative overflow-hidden bg-gray-100"
      >
        {/* Soft subtle texture */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.05),transparent_60%)]" />

        {/* Content */}
        <div className="animate-fadeInUp relative mx-auto flex max-w-7xl flex-col items-center px-4 py-16 text-center sm:px-6 sm:py-20 md:py-24">
          <h2 className="font-serif text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
            Ready to Ace Your
            <br />
            Interview?
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Join thousands of successful candidates who’ve transformed their
            interview skills with MockPro. Your dream job is one session away.
          </p>

          <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
            <button className="rounded-lg bg-black px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-900">
              Book Your Session
            </button>

            <button className="rounded-lg border border-gray-400 bg-transparent px-8 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:border-gray-600 hover:bg-gray-200">
              Become an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-gray-900 text-gray-300">
        {/* subtle overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 opacity-80" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6">
          {/* Top grid */}
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
            {/* Brand */}
            <div>
              <ColloQLogo size="text-2xl" />
              <p className="mt-4 max-w-xs text-sm text-gray-400">
                ColoQ helps candidates prepare for real interviews with industry
                experts through structured mock sessions and feedback.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-100">
                Product
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#features" className="hover:text-white transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#how" className="hover:text-white transition">
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-100">
                Company
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-100">
                Stay Updated
              </h4>
              <p className="mb-4 text-sm text-gray-400">
                Get interview tips and platform updates.
              </p>
              <div className="flex overflow-hidden rounded-lg border border-gray-700 bg-gray-800">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-1 bg-transparent px-3 py-2 text-sm text-gray-200 placeholder-gray-400 outline-none"
                />
                <button className="bg-yellow-400 px-4 text-sm font-semibold text-black hover:bg-yellow-300">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gray-700" />

          {/* Bottom bar */}
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} ColoQ. All rights reserved.
            </p>

            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Linkedin size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Github size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <Instagram size={18} />
              </a>
              <a
                href="mailto:support@coloq.com"
                className="text-gray-400 hover:text-white transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>

      <ChatbotWidget />
    </>
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
