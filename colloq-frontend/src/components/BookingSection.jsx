import React from "react";
import { CalendarPlus, ArrowRight } from "lucide-react";

export default function BookingSection() {
  return (
    <section className="mb-8 rounded-2xl p-8 shadow-lg flex items-center justify-between gap-8 bg-gradient-to-br from-yellow-300 to-amber-500 md:flex-col md:items-stretch">
      <div className="flex items-center gap-6 flex-1 md:flex-col md:text-center">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/20 text-gray-900">
          <CalendarPlus className="w-8 h-8" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2 md:text-xl">
            Book your next mock interview
          </h3>
          <p className="text-sm text-gray-800">
            Choose an interviewer and schedule a session that matches your goals.
          </p>
        </div>
      </div>

      <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-7 py-3.5 text-white font-semibold transition hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg">
        Book Now
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
}
