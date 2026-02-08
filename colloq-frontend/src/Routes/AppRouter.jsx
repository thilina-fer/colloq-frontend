import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import CandidateDashboard from "../pages/CandidateDashboard";
import InterviewerDashboard from "../pages/InterviewerDashboard";

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
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
