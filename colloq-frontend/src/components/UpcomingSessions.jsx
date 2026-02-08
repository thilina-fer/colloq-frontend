import React from "react";
import { Clock, CalendarDays, BadgeCheck, BadgeAlert } from "lucide-react";

export default function UpcomingSessions({ sessions }) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-md mb-8">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">Upcoming Sessions</h3>
        <span className="text-sm font-medium text-gray-500">
          {sessions.length} sessions
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {sessions.map((s, idx) => {
          const confirmed = s.status === "confirmed";

          return (
            <div
              key={s.id}
              className={[
                "flex justify-between items-start gap-6 p-6 rounded-xl border border-gray-200",
                "transition hover:border-yellow-300 hover:shadow-md hover:-translate-y-0.5",
                "md:flex-col",
                "opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
                idx === 0 ? "[animation-delay:100ms]" : "[animation-delay:200ms]",
              ].join(" ")}
            >
              <div className="flex gap-4 flex-1">
                <div className="w-14 h-14 shrink-0">
                  <img
                    src={s.avatar}
                    alt={s.interviewerName}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>

                <div className="flex-1">
                  <h4 className="text-base font-semibold text-gray-900 mb-1">
                    {s.interviewerName}
                  </h4>
                  <div className="text-sm text-gray-600 mb-3">
                    {s.interviewerRole}
                  </div>

                  <div className="flex flex-wrap gap-4 mb-3">
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                      <CalendarDays className="w-4 h-4 text-gray-400" />
                      {s.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-gray-600">
                      <Clock className="w-4 h-4 text-gray-400" />
                      {s.time}
                    </span>
                  </div>

                  <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {s.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-end gap-3 md:w-full md:flex-row md:flex-wrap md:items-center">
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-lg px-3.5 py-1.5 text-xs font-semibold capitalize",
                    confirmed
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700",
                  ].join(" ")}
                >
                  {confirmed ? (
                    <BadgeCheck className="w-4 h-4" />
                  ) : (
                    <BadgeAlert className="w-4 h-4" />
                  )}
                  {s.status}
                </span>

                <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 hover:border-gray-400">
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
