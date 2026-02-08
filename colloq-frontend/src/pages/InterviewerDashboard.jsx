import React, { useState } from "react";
import InterviewerProfileCard from "../components/InterviewerProfileCard";
import InterviewerStats from "../components/InterviewerStats";
import CandidateRequests from "../components/CandidateRequests";
import UpcomingInterviews from "../components/UpcomingInterviews";

export default function InterviewerDashboard() {
  const [interviewer] = useState({
    name: "Alex Johnson",
    email: "alex.j@email.com",
    profilePic:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    location: "New York, NY",
    joinedDate: "March 2023",
    bio: "Senior PM with 8+ years of experience. Passionate about mentoring aspiring product managers and helping them break into tech.",
    skills: [
      "Product Strategy",
      "Data Analysis",
      "Technical Interview",
      "System Design",
      "Leadership",
    ],
    isOnline: true,
    github: "https://github.com/alexjohnson",
    linkedin: "https://linkedin.com/in/alexjohnson",
    behance: "https://behance.net/alexjohnson",
    cvUrl: "https://files.example.com/cv-alex-johnson.pdf",
  });

  const [stats] = useState({
    pending: 5,
    approved: 12,
    earnings: 2480,
  });

  const [requests, setRequests] = useState([
    {
      id: 1,
      candidateName: "Sarah Williams",
      candidateAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      targetRole: "Product Manager",
      requestDate: "Feb 8, 2026",
      preferredTime: "2:00 PM - 3:00 PM",
      package: "1 Session",
      sessionType: "Product Strategy",
      price: 150,
      message:
        "Hi Alex! I'm very interested in learning about your approach to product roadmapping. Looking forward to our discussion!",
      status: "pending",
    },
    {
      id: 2,
      candidateName: "Michael Chen",
      candidateAvatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
      targetRole: "Senior PM",
      requestDate: "Feb 7, 2026",
      preferredTime: "3:30 PM - 4:30 PM",
      package: "3 Sessions",
      sessionType: "Technical + Strategy",
      price: 350,
      message:
        "Would love to discuss system design patterns and how they apply to real-world product decisions.",
      status: "pending",
    },
    {
      id: 3,
      candidateName: "Emily Rodriguez",
      candidateAvatar:
        "https://images.unsplash.com/photo-1507876466326-155bde20a0e0?w=200&h=200&fit=crop",
      targetRole: "Product Manager",
      requestDate: "Feb 5, 2026",
      preferredTime: "10:00 AM - 11:00 AM",
      package: "1 Session",
      sessionType: "General Guidance",
      price: 120,
      message: "",
      status: "approved",
    },
    {
      id: 4,
      candidateName: "David Park",
      candidateAvatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop",
      targetRole: "Associate PM",
      requestDate: "Feb 3, 2026",
      preferredTime: "1:00 PM - 2:00 PM",
      package: "5 Sessions",
      sessionType: "Comprehensive Program",
      price: 500,
      message: "",
      status: "declined",
    },
  ]);

  const handleApprove = (requestId) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId ? { ...req, status: "approved" } : req,
      ),
    );
  };

  const handleDecline = (requestId) => {
    setRequests((prev) =>
      prev.map((req) =>
        req.id === requestId ? { ...req, status: "declined" } : req,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
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
            👋 Hello {interviewer.name.split(" ")[0]}, welcome to your
            dashboard!
          </h1>

          <button className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2.5 sm:px-5 sm:py-3 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-sm font-semibold text-gray-900 transition hover:bg-gray-50 hover:border-gray-400 whitespace-nowrap">
            <span className="text-lg sm:text-xl">⚙️</span>
            Settings
          </button>
        </div>
      </header>

      {/* Main Grid */}
      <main className="max-w-[1400px] mx-auto p-4 sm:p-6 lg:p-8 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-[350px_1fr] lg:gap-8 items-start">
        <div>
          <InterviewerProfileCard interviewer={interviewer} />
        </div>

        <div>
          <InterviewerStats stats={stats} />
          <CandidateRequests
            requests={requests}
            onApprove={handleApprove}
            onDecline={handleDecline}
          />
          <UpcomingInterviews interviews={requests} />
        </div>
      </main>
    </div>
  );
}
