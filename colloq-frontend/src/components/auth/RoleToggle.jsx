export default function RoleToggle({ role, onRoleChange }) {
  return (
    <div
      className="relative inline-flex p-1 bg-gray-100 rounded-full"
      style={{ width: "220px" }}
    >
      <div
        className="absolute top-1/2 -translate-y-1/2 bg-white rounded-full shadow-sm"
        style={{
          width: "50%",
          height: "36px",
          left: role === "candidate" ? "2px" : "calc(50% + 2px)",
          transition: "left 180ms ease",
        }}
      />

      <button
        onClick={() => onRoleChange("candidate")}
        className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium rounded-full ${
          role === "candidate" ? "text-[#1F2937]" : "text-[#6B7280]"
        }`}
        aria-pressed={role === "candidate"}
      >
        Candidate
      </button>

      <button
        onClick={() => onRoleChange("interviewer")}
        className={`relative z-10 flex-1 px-4 py-2 text-sm font-medium rounded-full ${
          role === "interviewer" ? "text-[#1F2937]" : "text-[#6B7280]"
        }`}
        aria-pressed={role === "interviewer"}
      >
        Interviewer
      </button>
    </div>
  );
}
