import React from "react";
import { CalendarPlus, ArrowRight } from "lucide-react";

export default function BookingSection() {
  return (
    <section className="mb-6 sm:mb-8 rounded-xl sm:rounded-2xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg flex flex-col sm:flex-row sm:items-center items-start gap-4 sm:gap-6 lg:gap-8 bg-gradient-to-br from-yellow-300 to-amber-500">
      <div className="flex items-start sm:items-center gap-3 sm:gap-4 lg:gap-6 flex-1">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl flex items-center justify-center bg-white/20 text-gray-900 shrink-0">
          <CalendarPlus className="w-6 h-6 sm:w-8 sm:h-8" />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
            Book your next mock interview
          </h3>
          <p className="text-xs sm:text-sm text-gray-800">
            Choose an interviewer and schedule a session that matches your
            goals.
          </p>
        </div>
      </div>

      <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-gray-900 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-7 lg:py-3.5 text-xs sm:text-sm text-white font-semibold transition hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg whitespace-nowrap">
        Book Now
        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>
    </section>
  );
}
