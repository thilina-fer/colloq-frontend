import React from "react";
import { Briefcase, Users } from "lucide-react";

const TypeSelection = ({ onSelectType }) => {
  const types = [
    {
      id: "skill-based",
      title: "Skill-Based Interview",
      description:
        "Technical interview focused on specific skills and expertise roles",
      icon: Briefcase,
      color: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-300",
    },
    {
      id: "hr",
      title: "HR Interview",
      description:
        "Behavioral and cultural fit interview with HR professionals",
      icon: Users,
      color: "from-blue-50 to-blue-100",
      borderColor: "border-blue-300",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            Select Interview Type
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Choose the type of interview that best matches your needs
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in slide-in-from-bottom duration-500">
          {types.map((type) => {
            const Icon = type.icon;
            return (
              <div
                key={type.id}
                onClick={() => onSelectType(type.id)}
                className={`
                  group cursor-pointer 
                  bg-gradient-to-br ${type.color}
                  border-2 ${type.borderColor}
                  rounded-[2.5rem] p-8 sm:p-12
                  transition-all duration-300
                  hover:shadow-xl hover:scale-105
                  hover:border-yellow-400
                  active:scale-95
                `}
              >
                {/* Icon Container */}
                <div
                  className={`
                    w-16 h-16 sm:w-20 sm:h-20
                    rounded-2xl bg-white
                    flex items-center justify-center
                    mb-6 group-hover:scale-110 transition-transform duration-300
                    shadow-md
                  `}
                >
                  <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-black" />
                </div>

                {/* Content */}
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-2">
                  {type.title}
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                  {type.description}
                </p>

                {/* CTA */}
                <div className="flex items-center text-black font-semibold group-hover:gap-2 transition-all duration-300">
                  <span>Continue</span>
                  <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center text-gray-600 text-sm animate-fade-in animate-delay-300">
          <p>
            You can change your selection anytime during the booking process
          </p>
        </div>
      </div>
    </div>
  );
};

export default TypeSelection;
