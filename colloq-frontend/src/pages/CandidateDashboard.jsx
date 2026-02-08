import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import SessionStats from "../components/SessionStats";
import BookingSection from "../components/BookingSection";
import UpcomingSessions from "../components/UpcomingSessions";
import CompletedSessions from "../components/CompletedSessions";

export default function CandidateDashboard() {
  const [user] = useState({
    name: "Matthew Loganoretti",
    email: "matthew.l@email.com",
    profilePic:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    location: "San Francisco, CA",
    joinedDate: "January 2024",
    bio: "Aspiring product manager seeking to break into tech. Currently preparing for PM interviews at top companies.",
    interests: ["Product", "Strategy", "System Design", "Leadership"],
  });

  const [sessions] = useState({
    completed: 12,
    pending: 3,
    total: 15,
  });

  const [upcomingSessions] = useState([
    {
      id: 1,
      interviewerName: "Sarah Chen",
      interviewerRole: "Senior PM at Google",
      date: "Feb 15, 2026",
      time: "2:00 PM",
      type: "Product Management",
      status: "confirmed",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      interviewerName: "Michael Roberts",
      interviewerRole: "Engineering Manager at Meta",
      date: "Feb 18, 2026",
      time: "10:00 AM",
      type: "Technical Interview",
      status: "pending",
      avatar:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=200&h=200&fit=crop",
    },
  ]);

  const [completedSessions] = useState([
    {
      id: 1,
      interviewerName: "Jennifer Lee",
      interviewerRole: "Director of Product at Stripe",
      date: "Feb 5, 2026",
      type: "Product Strategy",
      rating: 4.5,
      feedback:
        "Great responses to product case questions. Work on data-driven decision making.",
      avatar:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      interviewerName: "David Park",
      interviewerRole: "VP Engineering at Airbnb",
      date: "Feb 1, 2026",
      type: "System Design",
      rating: 5,
      feedback: "Excellent system design skills. Very clear communication.",
      avatar:
        "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* tiny global keyframes (so you don’t need extra CSS files) */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
          <h1 className="text-base sm:text-lg lg:text-[1.75rem] font-bold text-gray-900 break-words">
            👋 Hello {user.name.split(" ")[0]}, this is your dashboard!
          </h1>

          <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 transition hover:bg-gray-50 hover:border-gray-400 whitespace-nowrap">
            <span className="text-lg sm:text-xl">🎁</span>
            Refer & Earn
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[350px_1fr] lg:gap-8 items-start">
        {/* Left Column */}
        <div className="w-full">
          <ProfileCard user={user} />
        </div>

        {/* Right Column */}
        <div className="w-full min-w-0">
          <SessionStats sessions={sessions} />
          <BookingSection />
          <UpcomingSessions sessions={upcomingSessions} />
          <CompletedSessions sessions={completedSessions} />
        </div>
      </main>
    </div>
  );
}
