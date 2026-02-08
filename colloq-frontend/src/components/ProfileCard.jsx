import React from "react";
import { Mail, MapPin, Calendar, Pencil } from "lucide-react";

export default function ProfileCard({ user }) {
  return (
    <aside className="lg:sticky lg:top-[100px] bg-white rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md lg:order-first">
      <div className="text-center mb-4 sm:mb-6 lg:mb-6">
        <div className="relative inline-block mb-2 sm:mb-4 lg:mb-4">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[120px] lg:h-[120px] rounded-full object-cover border-4 border-yellow-300 shadow-lg"
          />
          <span className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-emerald-500 border-[3px] border-white" />
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 transition hover:bg-gray-200 hover:border-gray-400">
          <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
          Edit Profile
        </button>
      </div>

      <div className="text-left">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
          {user.name}
        </h2>

        <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
            <span className="truncate">{user.email}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
            <span className="truncate">{user.location}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
            <span>Joined {user.joinedDate}</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700">
            {user.bio}
          </p>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
            Interests
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {(user.interests || []).map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-yellow-300 px-2 py-0.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium text-gray-900 whitespace-nowrap"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
