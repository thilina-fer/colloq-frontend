import React, { useState } from "react";
import BookingProgress from "./BookingProgress";
import TypeSelection from "./TypeSelection";
import RoleSelection from "./RoleSelection";
import InterviewerList from "./InterviewerList";
import CompactProfile from "./CompactProfile";
import InternalScheduler from "./InternalScheduler";
import CheckoutPage from "./CheckoutPage";
import ConfirmationPage from "./ConfirmationPage";

const BookingFlow = () => {
  // State management
  const [currentStep, setCurrentStep] = useState("type-selection");
  const [bookingData, setBookingData] = useState({
    type: null,
    role: null,
    interviewer: null,
    date: null,
    time: null,
    paymentDetails: null,
    status: "pending",
  });

  // Step handlers
  const handleTypeSelection = (type) => {
    setBookingData((prev) => ({
      ...prev,
      type,
      role: null, // Reset role when type changes
    }));
    // If HR, skip role selection
    if (type === "hr") {
      setCurrentStep("interviewer-list");
    } else {
      setCurrentStep("role-selection");
    }
  };

  const handleRoleSelection = (role) => {
    setBookingData((prev) => ({
      ...prev,
      role,
    }));
    setCurrentStep("interviewer-list");
  };

  const handleInterviewerSelection = (interviewer) => {
    setBookingData((prev) => ({
      ...prev,
      interviewer,
    }));
    setCurrentStep("profile");
  };

  const handleSlotSelection = (date, time) => {
    setBookingData((prev) => ({
      ...prev,
      date,
      time,
    }));
    setCurrentStep("scheduling");
  };

  const handleScheduleConfirmation = (scheduleData) => {
    setBookingData((prev) => ({
      ...prev,
      date: scheduleData.date,
      time: scheduleData.time,
    }));
    setCurrentStep("payment");
  };

  const handlePaymentConfirmation = (paymentData) => {
    setBookingData((prev) => ({
      ...prev,
      ...paymentData,
    }));
    setCurrentStep("confirmation");
  };

  // Navigation helpers
  const goBack = () => {
    const stepOrder = [
      "type-selection",
      "role-selection",
      "interviewer-list",
      "profile",
      "scheduling",
      "payment",
      "confirmation",
    ];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      const previousStep = stepOrder[currentIndex - 1];

      // Skip role-selection if type is HR
      if (previousStep === "role-selection" && bookingData.type === "hr") {
        setCurrentStep("type-selection");
      } else {
        setCurrentStep(previousStep);
      }
    }
  };

  const backFromProfile = () => {
    setCurrentStep("interviewer-list");
  };

  const backFromScheduling = () => {
    setCurrentStep("profile");
  };

  const startNewBooking = () => {
    setCurrentStep("type-selection");
    setBookingData({
      type: null,
      role: null,
      interviewer: null,
      date: null,
      time: null,
      paymentDetails: null,
      status: "pending",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Progress Bar (hidden on confirmation) */}
      {currentStep !== "confirmation" && (
        <BookingProgress currentStep={currentStep} />
      )}

      {/* Content */}
      <div className="w-full">
        {currentStep === "type-selection" && (
          <TypeSelection onSelectType={handleTypeSelection} />
        )}

        {currentStep === "role-selection" && (
          <RoleSelection onSelectRole={handleRoleSelection} onBack={goBack} />
        )}

        {currentStep === "interviewer-list" && (
          <InterviewerList
            onSelectInterviewer={handleInterviewerSelection}
            onBack={goBack}
          />
        )}

        {currentStep === "profile" && bookingData.interviewer && (
          <CompactProfile
            interviewer={bookingData.interviewer}
            onSelectSlot={() => setCurrentStep("scheduling")}
            onBack={backFromProfile}
            onChat={() => alert("Chat feature coming soon!")}
          />
        )}

        {currentStep === "scheduling" && bookingData.interviewer && (
          <InternalScheduler
            interviewer={bookingData.interviewer}
            onSelectSchedule={handleScheduleConfirmation}
            onBack={backFromScheduling}
          />
        )}

        {currentStep === "payment" && bookingData.interviewer && (
          <CheckoutPage
            booking={bookingData}
            onBack={() => setCurrentStep("scheduling")}
            onConfirm={handlePaymentConfirmation}
          />
        )}

        {currentStep === "confirmation" && (
          <ConfirmationPage
            booking={bookingData}
            onNewBooking={startNewBooking}
            onDashboard={() => (window.location.href = "/candidate-profile")}
          />
        )}
      </div>
    </div>
  );
};

export default BookingFlow;
