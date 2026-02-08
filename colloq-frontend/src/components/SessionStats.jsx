import React from "react";
import { CheckCircle2, Clock3, BarChart3 } from "lucide-react";

export default function SessionStats({ sessions }) {
  const items = [
    {
      key: "completed",
      label: "Completed",
      value: sessions.completed,
      icon: <CheckCircle2 className="w-6 h-6" />,
      iconWrap: "bg-emerald-100 text-emerald-600",
      delay: "100ms",
    },
    {
      key: "pending",
      label: "Pending",
      value: sessions.pending,
      icon: <Clock3 className="w-6 h-6" />,
      iconWrap: "bg-amber-100 text-amber-600",
      delay: "200ms",
    },
    {
      key: "total",
      label: "Total Sessions",
      value: sessions.total,
      icon: <BarChart3 className="w-6 h-6" />,
      iconWrap: "bg-blue-100 text-blue-600",
      delay: "300ms",
    },
  ];

  return (
    <section className="grid grid-cols-3 gap-4 mb-8 md:grid-cols-3 sm:grid-cols-1">
      {items.map((it) => (
        <div
          key={it.key}
          className={[
            "bg-white rounded-2xl p-6 shadow-md flex items-center gap-4",
            "transition hover:-translate-y-1 hover:shadow-lg",
            "[animation:fadeInUp_0.4s_ease-out] opacity-0 animate-[fadeInUp_0.4s_ease-out_forwards]",
            `[animation-delay:${it.delay}]`,
          ].join(" ")}
        >
          <div
            className={[
              "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
              it.iconWrap,
            ].join(" ")}
          >
            {it.icon}
          </div>

          <div className="flex-1">
            <div className="text-[2rem] font-bold leading-none text-gray-900 mb-1">
              {it.value}
            </div>
            <div className="text-sm font-medium text-gray-600">{it.label}</div>
          </div>
        </div>
      ))}
    </section>
  );
}
