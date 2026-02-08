import React from "react";
import { Mail, MapPin, Calendar, Pencil, Github, Linkedin, Globe, Download } from "lucide-react";

export default function InterviewerProfileCard({ interviewer }) {
  return (
    <aside className="lg:sticky lg:top-[100px] bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-md lg:order-first">
      <div className="text-center mb-4 sm:mb-6 lg:mb-6">
        <div className="relative inline-block mb-2 sm:mb-4 lg:mb-4">
          <img
            src={interviewer.profilePic}
            alt={interviewer.name}
            className="w-20 h-20 sm:w-24 sm:h-24 lg:w-[120px] lg:h-[120px] rounded-full object-cover border-4 border-yellow-300 shadow-lg"
          />
          <span className={`absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full border-[3px] border-white ${
            interviewer.isOnline ? "bg-emerald-500" : "bg-gray-400"
          }`} />
        </div>

        <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-gray-100 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 transition hover:bg-gray-200 hover:border-gray-400">
          <Pencil className="w-3 h-3 sm:w-4 sm:h-4" />
          Edit Profile
        </button>
      </div>

      <div className="text-left">
        <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{interviewer.name}</h2>

        <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
            <span className="truncate">{interviewer.email}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
            <span className="truncate">{interviewer.location}</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600">
            <Calendar className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 shrink-0" />
            <span>Joined {interviewer.joinedDate}</span>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700">{interviewer.bio}</p>
        </div>

        <div>
          <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
            Skills
          </h4>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {(interviewer.skills || []).map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-yellow-300 px-2 py-0.5 sm:px-3 sm:py-1.5 text-[10px] sm:text-xs font-medium text-gray-900 whitespace-nowrap"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
          <h4 className="text-xs sm:text-sm font-semibold text-gray-700 mb-3 sm:mb-4">
            Links & CV
          </h4>
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-4">
            {interviewer.github && (
              <a
                href={interviewer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-900 hover:text-white transition"
                title="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
            {interviewer.linkedin && (
              <a
                href={interviewer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
            {interviewer.behance && (
              <a
                href={interviewer.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white transition"
                title="Behance"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            )}
          </div>

          {interviewer.cvUrl && (
            <a
              href={interviewer.cvUrl}
              download
              className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-yellow-300 hover:bg-yellow-400 text-gray-900 px-3 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium transition"
              title="Download CV"
            >
              <Download className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Download CV</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
}
