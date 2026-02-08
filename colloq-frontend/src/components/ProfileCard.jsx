import React from "react";
import { Mail, MapPin, Calendar, Pencil } from "lucide-react";

export default function ProfileCard({ user }) {
  return (
    <aside className="sticky top-[100px] bg-white rounded-2xl p-8 shadow-md lg:static">
      <div className="text-center mb-6">
        <div className="relative inline-block mb-4">
          <img
            src={user.profilePic}
            alt={user.name}
            className="w-[120px] h-[120px] rounded-full object-cover border-4 border-yellow-300 shadow-lg"
          />
          <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-500 border-[3px] border-white" />
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200 hover:border-gray-400">
          <Pencil className="w-4 h-4" />
          Edit Profile
        </button>
      </div>

      <div className="text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{user.name}</h2>

        <div className="flex flex-col gap-3 mb-6">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Mail className="w-4 h-4 text-gray-400" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <MapPin className="w-4 h-4 text-gray-400" />
            <span>{user.location}</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <Calendar className="w-4 h-4 text-gray-400" />
            <span>Joined {user.joinedDate}</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <p className="text-sm leading-6 text-gray-700">{user.bio}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-3">
            Interests
          </h4>
          <div className="flex flex-wrap gap-2">
            {(user.interests || []).map((tag) => (
              <span
                key={tag}
                className="rounded-lg bg-yellow-300 px-3 py-1.5 text-xs font-medium text-gray-900"
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
