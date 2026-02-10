import React from "react";
import { Check } from "lucide-react";

const BookingProgress = ({ currentStep }) => {
  const steps = [
    { id: "type-selection", label: "Type" },
    { id: "role-selection", label: "Role" },
    { id: "interviewer-list", label: "List" },
    { id: "profile", label: "Profile" },
    { id: "scheduling", label: "Schedule" },
    { id: "payment", label: "Pay" },
  ];

  const getStepIndex = (stepId) => steps.findIndex((s) => s.id === stepId);
  const currentStepIndex = getStepIndex(currentStep);

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Desktop Progress Bar */}
        <div className="hidden sm:flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  index <= currentStepIndex
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index < currentStepIndex ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              {/* Step Label */}
              <span
                className={`ml-2 text-sm font-medium transition-colors duration-300 ${
                  index <= currentStepIndex ? "text-black" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>

              {/* Line to Next Step */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-3 transition-colors duration-300 ${
                    index < currentStepIndex ? "bg-yellow-400" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Mobile Progress Bar */}
        <div className="sm:hidden">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-black">
              Step {currentStepIndex + 1} of {steps.length}
            </span>
            <span className="text-sm text-gray-600">
              {steps[currentStepIndex]?.label}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="h-2 bg-yellow-400 rounded-full transition-all duration-300"
              style={{
                width: `${((currentStepIndex + 1) / steps.length) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingProgress;
