import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const RoleSelection = ({ onSelectRole, onBack }) => {
  const [selectedRole, setSelectedRole] = useState(null);

  const roles = [
    { id: "intern", label: "Intern" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "fullstack", label: "Fullstack" },
    { id: "devops", label: "DevOps" },
    { id: "data-science", label: "Data Science" },
    { id: "qa", label: "QA" },
    { id: "mobile", label: "Mobile Dev" },
    { id: "ml", label: "Machine Learning" },
    { id: "cloud", label: "Cloud Architect" },
    { id: "security", label: "Cybersecurity" },
    { id: "other", label: "Other" },
  ];

  const handleContinue = () => {
    if (selectedRole) {
      onSelectRole(selectedRole);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 animate-fade-in">
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 font-medium"
          >
            ← Back
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            Select Your Role
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Choose the role that matches your interview requirements
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-8 animate-in slide-in-from-bottom duration-500">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`
                p-4 sm:p-6 rounded-2xl font-medium text-base sm:text-lg
                transition-all duration-300
                hover:shadow-lg hover:scale-105
                active:scale-95
                ${
                  selectedRole === role.id
                    ? "bg-yellow-400 text-black shadow-lg scale-105"
                    : "bg-white text-black border-2 border-gray-200 hover:border-yellow-300"
                }
              `}
            >
              {role.label}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="flex items-center gap-3 mt-10 animate-fade-in">
          <button
            onClick={handleContinue}
            disabled={!selectedRole}
            className={`
              group flex items-center gap-2
              font-semibold text-lg px-8 py-4
              rounded-2xl transition-all duration-300
              ${
                selectedRole
                  ? "bg-yellow-400 text-black hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed opacity-50"
              }
            `}
          >
            Continue
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
          {!selectedRole && (
            <span className="text-gray-600 text-sm">
              Select a role to continue
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
