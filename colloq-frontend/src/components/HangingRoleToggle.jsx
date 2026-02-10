import { useState } from "react";

export default function HangingRoleToggle({ selectedRole, onRoleChange }) {
  const [hoveredRole, setHoveredRole] = useState(null);

  const roles = [
    { id: "candidate", label: "Candidate" },
    { id: "interviewer", label: "Interviewer" },
  ];

  return (
    <div className="flex gap-4">
      <style>{`
        @keyframes gentle-swing {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(2deg); }
        }

        .hanging-button {
          position: relative;
          transition: all 0.3s ease;
        }

        .hanging-button::before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 8px;
          background: linear-gradient(to bottom, #9CA3AF, #D1D5DB);
          border-radius: 1px;
          opacity: 0.6;
        }

        .hanging-button:hover::before {
          animation: gentle-swing 0.6s ease-in-out infinite;
          transform-origin: top center;
        }

        .hanging-button:hover {
          animation: gentle-swing 0.6s ease-in-out infinite;
          transform-origin: top center;
        }
      `}</style>

      {roles.map((role) => (
        <button
          key={role.id}
          onClick={() => onRoleChange(role.id)}
          onMouseEnter={() => setHoveredRole(role.id)}
          onMouseLeave={() => setHoveredRole(null)}
          className={`
            flex-1 hanging-button pt-6 pb-3 px-4 rounded-lg font-semibold text-sm
            transition-all duration-300 focus:ring-2 focus:ring-yellow-400 focus:outline-none
            ${
              selectedRole === role.id
                ? "bg-yellow-400 text-deep-charcoal shadow-md"
                : "bg-gray-200 text-deep-charcoal hover:bg-gray-300"
            }
          `}
        >
          {role.label}
        </button>
      ))}
    </div>
  );
}
