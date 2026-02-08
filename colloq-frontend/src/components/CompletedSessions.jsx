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
              "w-3 h-3 sm:w-4 sm:h-4",
              filled || isHalf
                ? "fill-amber-400 text-amber-400"
                : "text-gray-300",
            ].join(" ")}
          />
        );
      })}
      <span className="ml-2 text-xs sm:text-sm font-semibold text-gray-700">
        {value}
      </span>
    </div>
  );
}

export default function CompletedSessions({ sessions }) {
  return (
    <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-6 shadow-md mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">
          Completed Sessions
        </h3>
        <span className="text-xs sm:text-sm font-medium text-gray-500">
          {sessions.length} sessions
        </span>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {sessions.map((s, idx) => (
          <div
            key={s.id}
            className={[
              "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200",
              "transition hover:border-yellow-300 hover:shadow-md hover:-translate-y-0.5",
              "opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
              idx === 0 ? "[animation-delay:100ms]" : "[animation-delay:200ms]",
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
                </div>

                <span className="inline-block rounded-lg lg:rounded-md md:rounded-md bg-gray-100 px-3 py-1 lg:px-2.5 lg:py-0.5 md:px-2 md:py-0.5 sm:px-1.5 text-xs font-medium text-gray-700 lg:text-[10px] md:text-[10px] sm:text-[9px]">
                  {s.type}
                </span>

                <div className="mt-3 lg:mt-2.5 md:mt-2 sm:mt-1">
                  <Stars value={s.rating} />
                </div>
              </div>
            </div>

            <div className="flex flex-col items-start md:items-end gap-3 lg:gap-2.5 w-full md:w-auto md:gap-2 sm:gap-2">
              <div className="w-full bg-gray-50 rounded-md sm:rounded-lg p-3 sm:p-4 flex gap-2 sm:gap-3">
                <MessageSquareText className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mt-0.5 shrink-0" />
                <p className="text-xs sm:text-sm text-gray-700 leading-5 sm:leading-6 break-words">
                  {s.feedback}
                </p>
              </div>

              <button className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 sm:gap-2 rounded-lg sm:rounded-xl bg-gray-900 px-3 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3 text-xs sm:text-sm text-white font-semibold transition hover:bg-gray-800 hover:-translate-y-0.5 hover:shadow-lg">
                View Full Feedback
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
