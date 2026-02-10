import React, { useState, useMemo } from "react";
import { Search, Star, MessageCircle } from "lucide-react";

// Mock Interviewer Data
const MOCK_INTERVIEWERS = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "Senior Frontend Engineer",
    rating: 4.9,
    reviews: 156,
    price: 45,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    skills: ["React", "TypeScript", "CSS"],
    bio: "8+ years of experience in modern web development",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Full Stack Developer",
    rating: 4.85,
    reviews: 142,
    price: 50,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    skills: ["Node.js", "React", "MongoDB"],
    bio: "10+ years building scalable applications",
  },
  {
    id: 3,
    name: "Emma Wilson",
    role: "Backend Engineer",
    rating: 4.95,
    reviews: 189,
    price: 55,
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    skills: ["Python", "PostgreSQL", "Docker"],
    bio: "Specialized in backend optimization and scalability",
  },
  {
    id: 4,
    name: "David Martinez",
    role: "DevOps Engineer",
    rating: 4.8,
    reviews: 98,
    price: 60,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    skills: ["Kubernetes", "AWS", "CI/CD"],
    bio: "Expert in cloud infrastructure and deployment",
  },
  {
    id: 5,
    name: "Jessica Lee",
    role: "Data Scientist",
    rating: 4.92,
    reviews: 127,
    price: 65,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    skills: ["Python", "Machine Learning", "SQL"],
    bio: "Focused on ML algorithms and data analysis",
  },
  {
    id: 6,
    name: "James Thompson",
    role: "QA Engineer",
    rating: 4.87,
    reviews: 114,
    price: 40,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    skills: ["Selenium", "Testing", "Automation"],
    bio: "Ensuring software quality through comprehensive testing",
  },
];

const InterviewerList = ({ onSelectInterviewer, onBack }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredInterviewers = useMemo(() => {
    return MOCK_INTERVIEWERS.filter(
      (interviewer) =>
        interviewer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        interviewer.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        interviewer.skills.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    );
  }, [searchTerm]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <button
            onClick={onBack}
            className="mb-6 inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 font-medium"
          >
            ← Back
          </button>
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            Choose Your Interviewer
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Browse available interviewers and select the best match for your
            interview
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 animate-in slide-in-from-top duration-500">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, role, or skill..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-yellow-400 transition-colors duration-300 placeholder-gray-500"
            />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600 text-sm font-medium">
          {filteredInterviewers.length} interviewer
          {filteredInterviewers.length !== 1 ? "s" : ""} found
        </div>

        {/* Interviewers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom duration-500">
          {filteredInterviewers.map((interviewer) => (
            <div
              key={interviewer.id}
              className="bg-white border-2 border-gray-200 rounded-[2rem] overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-yellow-400 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48 bg-gray-100">
                <img
                  src={interviewer.image}
                  alt={interviewer.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                {/* Name & Role */}
                <h3 className="text-lg sm:text-xl font-bold text-black mb-1">
                  {interviewer.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{interviewer.role}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-black">
                      {interviewer.rating}
                    </span>
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({interviewer.reviews} reviews)
                  </span>
                </div>

                {/* Skills Tags */}
                <div className="flex flexwrap gap-2 mb-4">
                  {interviewer.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-yellow-100 text-yellow-900 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Bio */}
                <p className="text-gray-600 text-sm mb-5 line-clamp-2">
                  {interviewer.bio}
                </p>

                {/* Price & Action */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-black">
                    ${interviewer.price}
                    <span className="text-sm font-normal text-gray-600">
                      /hr
                    </span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">
                  <button
                    onClick={() => onSelectInterviewer(interviewer)}
                    className="flex-1 bg-yellow-400 text-black font-semibold py-2 rounded-xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Select
                  </button>
                  <button className="px-4 py-2 border-2 border-gray-200 rounded-xl hover:border-yellow-400 text-gray-600 hover:text-black transition-colors duration-300 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredInterviewers.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No interviewers found matching your search
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="mt-4 text-yellow-500 font-semibold hover:text-yellow-600 transition-colors"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewerList;
