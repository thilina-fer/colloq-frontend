import React from "react";
import { Clock, CalendarDays, BadgeCheck, BadgeAlert } from "lucide-react";

export default function UpcomingSessions({ sessions }) {
  return (
    <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-6 shadow-md mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
          Upcoming Sessions
        </h3>
        <span className="text-xs sm:text-sm font-medium text-gray-500">
          {sessions.length} sessions
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {sessions.map((s, idx) => {
          const confirmed = s.status === "confirmed";

          return (
            <div
              key={s.id}
              className={[
                "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200",
                "transition hover:border-yellow-300 hover:shadow-md hover:-translate-y-0.5",
                "md:flex-col",
                "opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
                idx === 0
                  ? "[animation-delay:100ms]"
                  : "[animation-delay:200ms]",
              ].join(" ")}
            >
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-3 flex-1 min-w-0">
                <div className="w-14 h-14 shrink-0 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10">
                  <img
                    src={s.avatar}
                    alt={s.interviewerName}
                    className="w-14 h-14 lg:w-12 lg:h-12 md:w-12 md:h-12 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-semibold text-gray-900 mb-1 lg:text-sm md:text-sm sm:text-xs">
                    {s.interviewerName}
                  </h4>
                  <div className="text-sm text-gray-600 mb-3 lg:text-xs md:text-xs md:mb-2 sm:text-[10px]">
                    {s.interviewerRole}
                  </div>

                  <div className="flex flex-wrap gap-4 lg:gap-3 mb-3 md:gap-2 md:mb-2 sm:gap-1.5 sm:mb-1">
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 lg:text-xs md:text-xs sm:text-[10px]">
                      <CalendarDays className="w-4 h-4 text-gray-400 lg:w-3.5 lg:h-3.5 md:w-3 md:h-3 sm:w-3 sm:h-3" />
                      {s.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600 lg:text-xs md:text-xs sm:text-[10px]">
                      <Clock className="w-4 h-4 text-gray-400 lg:w-3.5 lg:h-3.5 md:w-3 md:h-3 sm:w-3 sm:h-3" />
                      {s.time}
                    </span>
                  </div>

                  <span className="inline-block rounded-lg lg:rounded-md md:rounded-md bg-gray-100 px-3 py-1 lg:px-2.5 lg:py-0.5 md:px-2 md:py-0.5 sm:px-1.5 text-xs font-medium text-gray-700 lg:text-[10px] md:text-[10px] sm:text-[9px]">
                    {s.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-start sm:items-end gap-3 lg:gap-2.5 w-full md:w-full md:flex-row md:flex-wrap md:items-center md:gap-2 sm:gap-2">
                <span
                  className={[
                    "inline-flex items-center gap-1.5 sm:gap-2 rounded-md sm:rounded-lg px-2 py-0.5 sm:px-3 sm:py-1.5 text-xs sm:text-xs font-semibold capitalize",
                    confirmed
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700",
                  ].join(" ")}
                >
                  {confirmed ? (
                    <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <BadgeAlert className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                  {s.status}
                </span>

                <button className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-md sm:rounded-lg border border-gray-300 bg-white px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-semibold text-gray-900 transition hover:bg-gray-50 hover:border-gray-400">
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
