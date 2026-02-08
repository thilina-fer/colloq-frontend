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
      <header className="sticky top-0 z-[100] bg-white border-b border-gray-200 shadow-sm px-8 py-6 md:px-6 md:py-5 sm:px-4 sm:py-4">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-8 md:flex-col md:items-start md:gap-4">
          <h1 className="text-[1.75rem] font-bold text-gray-900 md:text-[1.375rem] sm:text-[1.125rem]">
            👋 Hello {user.name.split(" ")[0]}, this is your dashboard!
          </h1>

          <div className="flex items-center gap-4">
            <button className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 hover:border-gray-400">
              <span className="text-lg">🎁</span>
              Refer & Earn
            </button>
          </div>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-[1400px] mx-auto p-8 grid grid-cols-[350px_1fr] gap-8 items-start xl:grid-cols-[320px_1fr] xl:gap-6 lg:grid-cols-1 lg:gap-6 md:p-6 sm:p-4">
        {/* Left Column */}
        <div>
          <ProfileCard user={user} />
        </div>

        {/* Right Column */}
        <div>
          <SessionStats sessions={sessions} />
          <BookingSection />
          <UpcomingSessions sessions={upcomingSessions} />
          <CompletedSessions sessions={completedSessions} />
        </div>
      </main>
    </div>
  );
}
