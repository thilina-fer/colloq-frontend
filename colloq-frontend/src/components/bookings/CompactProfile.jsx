import React from "react";
import { MessageCircle, Check } from "lucide-react";

const CompactProfile = ({ interviewer, onSelectSlot, onBack, onChat }) => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 font-medium"
        >
          ← Back
        </button>

        {/* Main Card */}
        <div className="bg-white border-2 border-gray-200 rounded-[2.5rem] p-6 sm:p-8 lg:p-10 hover:border-yellow-400 transition-colors duration-300 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Left: Interviewer Image & Quick Stats */}
            <div className="flex flex-col items-center">
              {/* Image */}
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-[2rem] overflow-hidden shadow-lg mb-6 flex-shrink-0">
                <img
                  src={interviewer.image}
                  alt={interviewer.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quick Stats */}
              <div className="w-full space-y-4">
                {/* Rating */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-center">
                  <p className="text-gray-600 text-sm font-medium mb-1">
                    Rating
                  </p>
                  <p className="text-2xl font-bold text-black">
                    {interviewer.rating}⭐
                  </p>
                  <p className="text-gray-600 text-xs">
                    ({interviewer.reviews} reviews)
                  </p>
                </div>

                {/* Price */}
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-xl p-4 text-center">
                  <p className="text-gray-800 text-sm font-medium mb-1">
                    Price Per Hour
                  </p>
                  <p className="text-3xl font-bold text-black">
                    ${interviewer.price}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Information & Actions */}
            <div className="flex flex-col">
              {/* Name & Role */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">
                  {interviewer.name}
                </h1>
                <p className="text-lg text-gray-700 font-medium">
                  {interviewer.role}
                </p>
              </div>

              {/* Bio */}
              <div className="mb-6">
                <p className="text-gray-700 leading-relaxed text-base">
                  {interviewer.bio}
                </p>
              </div>

              {/* Core Expertise */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-black mb-3">
                  Core Expertise
                </h3>
                <div className="flex flex-wrap gap-3">
                  {interviewer.skills.map((skill) => (
                    <div
                      key={skill}
                      className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-xl font-medium text-sm flex items-center gap-2"
                    >
                      <Check className="w-4 h-4" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-6" />

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button
                  onClick={onSelectSlot}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 sm:py-4 px-4 rounded-2xl transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 text-center"
                >
                  Select Slot & Continue
                </button>
                <button
                  onClick={onChat}
                  className="flex-1 sm:flex-none bg-white border-2 border-gray-300 hover:border-yellow-400 text-black font-bold py-3 sm:py-4 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat
                </button>
              </div>

              {/* Trust Elements */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600 text-sm">
                  ✓ Verified interviewer • ✓ 100% private sessions • ✓
                  Money-back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompactProfile;
