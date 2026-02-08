import React from "react";
import { Clock, CheckCircle2, DollarSign } from "lucide-react";

export default function InterviewerStats({ stats }) {
  const items = [
    {
      key: "pending",
      label: "Pending Requests",
      value: stats.pending,
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconWrap: "bg-amber-100 text-amber-600",
      delay: "100ms",
    },
    {
      key: "approved",
      label: "Approved Sessions",
      value: stats.approved,
      icon: <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconWrap: "bg-emerald-100 text-emerald-600",
      delay: "200ms",
    },
    {
      key: "earnings",
      label: "Total Earnings",
      value: `$${stats.earnings}`,
      icon: <DollarSign className="w-5 h-5 sm:w-6 sm:h-6" />,
      iconWrap: "bg-blue-100 text-blue-600",
      delay: "300ms",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-4 mb-6 sm:mb-8">
      {items.map((it) => (
        <div
          key={it.key}
          className={[
            "bg-white rounded-lg sm:rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-md flex items-center gap-3 sm:gap-4",
            "transition hover:-translate-y-1 hover:shadow-lg",
            "[animation:fadeInUp_0.4s_ease-out] opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
            `[animation-delay:${it.delay}]`,
          ].join(" ")}
        >
          <div
            className={[
              "w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0",
              it.iconWrap,
            ].join(" ")}
          >
            {it.icon}
          </div>

          <div className="flex-1">
            <div className="text-xl sm:text-2xl lg:text-[2rem] font-bold leading-none text-gray-900">
              {it.value}
            </div>
            <div className="text-xs sm:text-sm font-medium text-gray-600 mt-1">{it.label}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
