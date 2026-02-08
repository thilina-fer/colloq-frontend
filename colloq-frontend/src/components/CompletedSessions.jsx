import React from "react";
import { CalendarDays, MessageSquareText, Star } from "lucide-react";

function Stars({ value }) {
  const full = Math.floor(value);
  const half = value - full >= 0.5;

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = i < full;
        const isHalf = i === full && half;

        return (
          <Star
            key={i}
            className={[
              "w-4 h-4",
              filled || isHalf
                ? "fill-amber-400 text-amber-400"
                : "text-gray-300",
            ].join(" ")}
          />
        );
      })}
      <span className="ml-2 text-sm font-semibold text-gray-700">{value}</span>
    </div>
  );
}

export default function CompletedSessions({ sessions }) {
  return (
    <section className="bg-white rounded-2xl p-6 shadow-md mb-8">
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200">
        <h3 className="text-xl font-bold text-gray-900">Completed Sessions</h3>
        <span className="text-sm font-medium text-gray-500">
          {sessions.length} sessions
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {sessions.map((s, idx) => (
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
                </div>

                <span className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {s.type}
                </span>

                <div className="mt-3">
                  <Stars value={s.rating} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-3 md:w-full md:items-start">
              <div className="w-full max-w-[350px] md:max-w-none bg-gray-50 rounded-lg p-4 flex gap-3">
                <MessageSquareText className="w-5 h-5 text-gray-400 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-700 leading-6">{s.feedback}</p>
              </div>

              <button className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-6 py-3 text-white font-semibold transition hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg">
                View Full Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
