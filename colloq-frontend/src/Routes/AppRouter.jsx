import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import CandidateDashboard from "../pages/CandidateDashboard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/candidate-profile" element={<CandidateDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
