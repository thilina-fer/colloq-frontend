import React from "react";
import { CalendarDays, Clock } from "lucide-react";

export default function UpcomingInterviews({ interviews }) {
  const approvedInterviews = interviews.filter(i => i.status === "approved");

  return (
    <section className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-6 shadow-md mb-6 sm:mb-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">Upcoming Interviews</h3>
        <span className="text-xs sm:text-sm font-medium text-gray-500">
          {approvedInterviews.length} interviews
        </span>
      </div>

      {approvedInterviews.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-xs sm:text-sm text-gray-600">No upcoming interviews scheduled yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3 sm:gap-4">
          {approvedInterviews.map((interview, idx) => (
            <div
              key={interview.id}
              className={[
                "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border border-gray-200",
                "transition hover:border-yellow-300 hover:shadow-md hover:-translate-y-0.5",
                "opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
                idx === 0 ? "[animation-delay:100ms]" : "[animation-delay:200ms]",
              ].join(" ")}
            >
              <div className="flex gap-3 sm:gap-4 flex-1 min-w-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0">
                  <img
                    src={interview.candidateAvatar}
                    alt={interview.candidateName}
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                    {interview.candidateName}
                  </h4>
                  <div className="text-xs sm:text-sm text-gray-600 mb-2">
                    {interview.targetRole}
                  </div>

                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1.5 sm:gap-3">
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                      <CalendarDays className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                      {interview.interviewDate}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs sm:text-sm text-gray-600">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                      {interview.interviewTime}
                    </span>
                  </div>

                  <span className="inline-block rounded-md sm:rounded-lg bg-gray-100 px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-xs font-medium text-gray-700 mt-2">
                    {interview.sessionType}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2 w-full sm:w-auto sm:items-end">
                <span className="inline-flex items-center rounded-lg bg-emerald-100 text-emerald-700 px-3 py-1.5 text-xs sm:text-xs font-semibold">
                  Confirmed
                </span>
                <button className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 bg-white hover:bg-gray-50 px-3 py-2 text-xs sm:text-sm text-gray-900 font-semibold transition w-full sm:w-auto">
                  Join Call
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
