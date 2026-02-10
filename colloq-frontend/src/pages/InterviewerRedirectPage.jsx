import React from "react";

export const InterviewerRedirectPage = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      // Logic for completion would go here
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col md:flex-row font-sans selection:bg-yellow-200 selection:text-yellow-900 animate-in fade-in duration-700">
      {/* Sidebar Info - Fixed/Sticky on Desktop */}
      <div className="w-full md:w-1/3 bg-[#FDE047] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden md:h-screen md:sticky md:top-0">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-5%] right-[-5%] w-64 h-64 bg-white rounded-full blur-3xl opacity-40"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-80 h-80 bg-yellow-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <div className="w-10 h-10 bg-gray-900 rounded-xl flex items-center justify-center text-[#FDE047] shadow-lg mb-6">
            H
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3 tracking-tight leading-tight">
            Complete your Interviewer Profile
          </h2>

          <p className="text-gray-800 text-sm md:text-base font-medium opacity-90 mb-6 max-w-xs leading-relaxed">
            To ensure the quality of our platform, we require a few more
            professional details before you start conducting interviews.
          </p>

          <div className="space-y-3">
            {[
              {
                icon: <ShieldCheck size={16} />,
                text: "Identity Verification",
              },
              { icon: <FileText size={16} />, text: "Resume & Portfolio" },
              {
                icon: <Briefcase size={16} />,
                text: "Professional Experience",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 text-gray-900 font-bold bg-white/40 backdrop-blur-md p-3 rounded-xl border border-white/20 transition-transform hover:translate-x-1"
              >
                {item.icon}
                <span className="text-xs uppercase tracking-wider">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info in sidebar stays at the bottom */}
        <div className="relative z-10">
          <div className="h-px w-12 bg-gray-900/20 mb-4"></div>
          <div className="text-[10px] font-black text-gray-700 tracking-[0.2em] uppercase">
            Step {step} of 1 • Verification Phase
          </div>
        </div>
      </div>

      {/* Form Area - Scrollable Content */}
      <div className="w-full md:w-2/3 bg-white p-8 md:p-12 lg:p-20 flex flex-col justify-center">
        <div className="max-w-xl w-full mx-auto">
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2 tracking-tight">
              Professional Credentials
            </h1>
            <p className="text-gray-500 font-medium text-sm">
              Please provide your official information below to verify your
              account.
            </p>
          </header>

          <form onSubmit={handleFinalSubmit} className="space-y-5">
            {/* Row 1: Identification & Experience */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                  NIC / ID Number
                </label>
                <div className="relative group">
                  <ShieldCheck
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FDE047] transition-colors"
                    size={18}
                  />
                  <input
                    required
                    type="text"
                    placeholder="e.g. 12345-6789012-3"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:border-[#FDE047] outline-none transition-all font-medium text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                  Years of Experience
                </label>
                <div className="relative group">
                  <Clock
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FDE047] transition-colors"
                    size={18}
                  />
                  <input
                    required
                    type="number"
                    placeholder="e.g. 5"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:border-[#FDE047] outline-none transition-all font-medium text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Row 2: Social Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                  LinkedIn Profile
                </label>
                <div className="relative group">
                  <Linkedin
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FDE047] transition-colors"
                    size={18}
                  />
                  <input
                    required
                    type="url"
                    placeholder="linkedin.com/in/..."
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:border-[#FDE047] outline-none transition-all font-medium text-sm"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                  GitHub Profile
                </label>
                <div className="relative group">
                  <Github
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#FDE047] transition-colors"
                    size={18}
                  />
                  <input
                    required
                    type="url"
                    placeholder="github.com/username"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:border-[#FDE047] outline-none transition-all font-medium text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload Box */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                CV / Resume (PDF Only)
              </label>
              <div className="border-2 border-dashed border-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center bg-gray-50 hover:bg-gray-100/50 transition-colors cursor-pointer group">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
                  <UploadCloud size={18} className="text-gray-400" />
                </div>
                <p className="text-xs font-bold text-gray-900 mb-1 uppercase tracking-tight">
                  Click to upload or drag and drop
                </p>
                <p className="text-[10px] text-gray-400 font-medium">
                  PDF, DOCX up to 10MB
                </p>
                <input
                  type="file"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                />
              </div>
            </div>

            {/* Short Bio */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">
                Professional Bio
              </label>
              <textarea
                placeholder="Tell us about your technical expertise and interviewing style..."
                rows={3}
                className="w-full p-4 bg-gray-50 border border-gray-100 rounded-xl focus:bg-white focus:ring-4 focus:ring-yellow-100 focus:border-[#FDE047] outline-none transition-all font-medium text-sm resize-none"
              ></textarea>
            </div>

            <button
              disabled={loading}
              type="submit"
              className={`w-full py-3.5 rounded-xl font-black text-gray-900 shadow-lg shadow-yellow-100/50 transition-all active:scale-[0.97] flex items-center justify-center gap-2 text-base ${
                loading
                  ? "bg-yellow-200 cursor-not-allowed"
                  : "bg-[#FDE047] hover:bg-[#FACC15]"
              }`}
            >
              {loading ? (
                <div className="w-5 h-5 border-[3px] border-gray-900/20 border-t-gray-900 rounded-full animate-spin"></div>
              ) : (
                <>
                  Complete Registration
                  <ChevronRight size={18} />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InterviewerRedirectPage;
