import React, { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Lock,
  User,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Users,
  Globe,
  Chrome,
  ShieldCheck,
  FileText,
  Linkedin,
  Clock,
  ChevronRight,
  UploadCloud,
} from "lucide-react";
import InterviewerRedirectPage from "./InterviewerRedirectPage";

/**
 * Interviewer Redirect Page Component
 * Data collection for interviewer onboarding
 * Fixed Sidebar implementation for high-end desktop experience.
 */

const LoginPage = () => {
  const [role, setRole] = useState("candidate");
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [view, setView] = useState("auth");

  const handleRoleChange = (newRole) => {
    if (newRole === role) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setRole(newRole);
      setIsTransitioning(false);
    }, 200);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (role === "interviewer") {
        setIsTransitioning(true);
        setTimeout(() => {
          setView("interviewer-redirect");
          setIsTransitioning(false);
        }, 300);
      }
    }, 2000);
  };

  if (view === "interviewer-redirect") {
    return <InterviewerRedirectPage />;
  }

  return (
    <div className="min-h-screen w-full bg-white font-sans selection:bg-yellow-200 selection:text-yellow-900 overflow-x-hidden">
      <div className="min-h-screen w-full flex flex-col relative">
        {/* Role Toggle Floating Switch */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block">
          <div className="bg-white/90 backdrop-blur-md p-1 rounded-full border border-gray-200 shadow-lg flex gap-1">
            <button
              onClick={() => handleRoleChange("candidate")}
              className={`px-8 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                role === "candidate"
                  ? "bg-[#FDE047] text-gray-900 shadow-md"
                  : "text-gray-400 hover:text-gray-800"
              }`}
            >
              Candidate
            </button>
            <button
              onClick={() => handleRoleChange("interviewer")}
              className={`px-8 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                role === "interviewer"
                  ? "bg-[#FDE047] text-gray-900 shadow-md"
                  : "text-gray-400 hover:text-gray-800"
              }`}
            >
              Interviewer
            </button>
          </div>
        </div>

        <div
          className={`flex flex-col w-full min-h-screen transition-all duration-700 ease-in-out ${role === "candidate" ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          {/* ILLUSTRATION PANEL */}
          <div className="w-full md:w-1/2 bg-[#FDE047] relative overflow-hidden flex flex-col justify-center p-8 md:p-12 lg:p-20 text-gray-900 min-h-[35vh] md:min-h-screen transition-colors duration-500">
            <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
              <div className="absolute top-[-5%] right-[-5%] w-[30rem] h-[30rem] bg-white rounded-full blur-3xl opacity-40 animate-pulse"></div>
              <div className="absolute bottom-[-10%] left-[-10%] w-[25rem] h-[25rem] bg-yellow-400 rounded-full blur-3xl"></div>
            </div>

            <div
              className={`relative z-10 transition-all duration-500 transform ${isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}
            >
              <div className="mb-8">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mb-6 shadow-xl rotate-3 transition-transform hover:rotate-6 duration-300">
                  {role === "candidate" ? (
                    <Briefcase size={32} className="text-[#FDE047]" />
                  ) : (
                    <Users size={32} className="text-[#FDE047]" />
                  )}
                </div>
                <h2 className="text-4xl lg:text-5xl font-black mb-4 leading-[1.1] tracking-tight text-gray-900 max-w-xl">
                  {role === "candidate"
                    ? "Your next big move starts here."
                    : "Find the missing piece of your team."}
                </h2>
                <p className="text-gray-800 text-lg max-w-md font-medium leading-relaxed opacity-90">
                  {role === "candidate"
                    ? "Join a community of top-tier talent and get matched with companies that actually care."
                    : "The most intuitive platform for technical assessments and talent acquisition."}
                </p>
              </div>

              <div className="space-y-4 pt-4">
                {[
                  role === "candidate"
                    ? "Smart Job Matching"
                    : "Live Coding Environment",
                  role === "candidate"
                    ? "Resume Optimization"
                    : "Team Collaboration Tools",
                  "Seamless AI Feedback",
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 group">
                    <div className="bg-gray-900/10 p-1.5 rounded-full group-hover:bg-gray-900/20 transition-colors">
                      <CheckCircle2 size={18} className="text-gray-900" />
                    </div>
                    <span className="text-gray-900 font-bold text-base">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute bottom-10 left-10 flex items-center gap-3 font-black text-xl tracking-tighter opacity-90">
              <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center text-[#FDE047] shadow-lg text-sm">
                H
              </div>
              <span className="text-gray-900">HireFlow</span>
            </div>
          </div>

          {/* FORM PANEL */}
          <div className="w-full md:w-1/2 bg-white flex flex-col justify-center px-6 py-16 md:px-12 lg:px-24 relative min-h-screen">
            <div className="md:hidden flex justify-center mb-8 bg-gray-100 p-1 rounded-xl">
              <button
                onClick={() => handleRoleChange("candidate")}
                className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all ${role === "candidate" ? "bg-[#FDE047] shadow-sm text-gray-900" : "text-gray-500"}`}
              >
                Candidate
              </button>
              <button
                onClick={() => handleRoleChange("interviewer")}
                className={`flex-1 py-3 text-xs font-bold rounded-lg transition-all ${role === "interviewer" ? "bg-[#FDE047] shadow-sm text-gray-900" : "text-gray-500"}`}
              >
                Interviewer
              </button>
            </div>

            <div
              className={`max-w-md mx-auto w-full transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
            >
              <header className="mb-8 text-center md:text-left">
                <h1 className="text-3xl font-black text-gray-900 mb-2 tracking-tight">
                  {isLogin ? "Welcome back" : "Get started"}
                </h1>
                <p className="text-gray-500 font-medium text-base">
                  {isLogin
                    ? `Sign in as a ${role}.`
                    : `Create your ${role} account.`}
                </p>
              </header>

              <button className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 py-3 px-4 rounded-xl font-bold text-gray-700 hover:bg-gray-50 transition-all duration-200 mb-6 group active:scale-[0.98] text-sm shadow-sm">
                <div className="w-5 h-5 flex items-center justify-center transition-transform group-hover:scale-110">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </div>
                Continue with Google
              </button>

              <div className="relative mb-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-100"></div>
                </div>
                <span className="relative bg-white px-4 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                  or use email
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 ml-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:border-[#FDE047] outline-none transition-all font-medium text-sm"
                      />
                    </div>
                  </div>
                )}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 ml-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      required
                      type="email"
                      placeholder="you@example.com"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:border-[#FDE047] outline-none transition-all font-medium text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center ml-1">
                    <label className="text-xs font-bold text-gray-700">
                      Password
                    </label>
                    {isLogin && (
                      <button
                        type="button"
                        className="text-[10px] font-black text-gray-900 hover:underline decoration-[#FDE047] decoration-2"
                      >
                        Forgot password?
                      </button>
                    )}
                  </div>
                  <div className="relative">
                    <Lock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      required
                      type="password"
                      placeholder="Min. 8 characters"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:border-[#FDE047] outline-none transition-all font-medium text-sm"
                    />
                  </div>
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className={`w-full py-3.5 rounded-xl font-black text-gray-900 shadow-lg shadow-yellow-100/50 transition-all active:scale-[0.97] flex items-center justify-center gap-2 text-base ${loading ? "bg-yellow-200 cursor-not-allowed" : "bg-[#FDE047] hover:bg-[#FACC15]"}`}
                >
                  {loading ? (
                    <div className="w-5 h-5 border-[3px] border-gray-900/20 border-t-gray-900 rounded-full animate-spin"></div>
                  ) : (
                    <>
                      {isLogin ? "Sign In" : "Create Account"}
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </form>

              <footer className="mt-8 text-center">
                <p className="text-gray-400 font-bold text-sm">
                  {isLogin ? "New to HireFlow?" : "Already a member?"}
                  <button
                    onClick={() => setIsLogin(!isLogin)}
                    className="ml-2 text-gray-900 font-black hover:underline decoration-[#FDE047] decoration-4"
                  >
                    {isLogin ? "Create an account" : "Log in here"}
                  </button>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
