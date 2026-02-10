import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CandidateDashboard from "../pages/CandidateDashboard";
import InterviewerDashboard from "../pages/InterviewerDashboard";
import LandingPage from "../pages/landingPage";
import LoginPage from "../pages/LoginPage";
import BookingFlow from "../components/bookings/BookingFlow";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/candidate-profile" element={<CandidateDashboard />} />
        <Route
          path="/interviewer-dashboard"
          element={<InterviewerDashboard />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/booking" element={<BookingFlow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
