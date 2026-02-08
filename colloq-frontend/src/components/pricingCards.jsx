import React from "react";
import { Check } from "lucide-react";

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  highlighted,
  buttonText,
}) {
  return (
    <div
      className={`group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 sm:p-8 ${
        highlighted
          ? "border-2 border-yellow-400 ring-4 ring-yellow-100"
          : "border border-gray-200 hover:border-yellow-300"
      }`}
    >
      {/* Badge for highlighted plan */}
      {highlighted && (
        <div className="mb-4 inline-block rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
          MOST POPULAR
        </div>
      )}

      {/* Plan name */}
      <h3 className="mb-2 text-2xl font-bold text-gray-900">{name}</h3>

      {/* Price */}
      <div className="mb-4">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
        <span className="ml-2 text-gray-600">/ {period}</span>
      </div>

      {/* Description */}
      <p className="mb-6 text-gray-600">{description}</p>

      {/* CTA Button */}
      <button
        className={`mb-6 w-full rounded-xl px-6 py-3 text-sm font-bold shadow-sm transition ${
          highlighted
            ? "bg-yellow-500 text-black hover:bg-yellow-400"
            : "border border-gray-300 bg-white text-black hover:bg-gray-50"
        }`}
      >
        {buttonText}
      </button>

      {/* Features list */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-500 transition-transform duration-300 group-hover:scale-125" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}