import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Clock } from "lucide-react";

const InternalScheduler = ({ interviewer, onSelectSchedule, onBack }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // Mock available time slots
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
  ];

  // Helper function to get the number of days in a month
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Helper function to get the first day of the month (0 = Sunday)
  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the month starts
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  const isDateAvailable = (day) => {
    if (!day) return false;
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date >= today;
  };

  const formatDate = (day) => {
    const date = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day,
    );
    return date.toISOString().split("T")[0];
  };

  const handleDateSelect = (day) => {
    if (isDateAvailable(day)) {
      setSelectedDate(day);
      setSelectedTime(null); // Reset time when date changes
    }
  };

  const handleContinue = () => {
    if (selectedDate && selectedTime) {
      const bookingData = {
        date: formatDate(selectedDate),
        time: selectedTime,
        interviewer: interviewer,
      };
      onSelectSchedule(bookingData);
    }
  };

  const monthName = currentMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
  const calendarDays = generateCalendarDays();

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="mb-8 inline-flex items-center text-gray-600 hover:text-black transition-colors duration-200 font-medium"
        >
          ← Back
        </button>

        {/* Header */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-3">
            Schedule Your Interview
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            with <span className="font-semibold">{interviewer.name}</span>
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom duration-500">
          {/* Left: Calendar */}
          <div className="lg:col-span-1 bg-white border-2 border-gray-200 rounded-[2rem] p-6 hover:border-yellow-400 transition-colors duration-300">
            <h2 className="text-xl font-bold text-black mb-4">Select Date</h2>

            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() - 1,
                    ),
                  )
                }
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
              <span className="font-semibold text-black min-w-32 text-center">
                {monthName}
              </span>
              <button
                onClick={() =>
                  setCurrentMonth(
                    new Date(
                      currentMonth.getFullYear(),
                      currentMonth.getMonth() + 1,
                    ),
                  )
                }
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            </div>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 gap-2 mb-3">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-gray-600"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day, index) => {
                const isAvailable = day && isDateAvailable(day);
                const isSelected = day === selectedDate;

                return (
                  <button
                    key={index}
                    onClick={() => handleDateSelect(day)}
                    disabled={!isAvailable}
                    className={`
                      aspect-square flex items-center justify-center rounded-lg font-medium text-sm
                      transition-all duration-200
                      ${
                        !day
                          ? "bg-transparent"
                          : isSelected
                            ? "bg-yellow-400 text-black shadow-lg scale-105"
                            : isAvailable
                              ? "bg-gray-100 text-black hover:bg-gray-200 hover:scale-105 cursor-pointer"
                              : "bg-gray-50 text-gray-400 cursor-not-allowed opacity-50"
                      }
                    `}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Time Slots & Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Time Slots Card */}
            <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-6 hover:border-yellow-400 transition-colors duration-300">
              <h2 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5" />
                Select Time
              </h2>

              {selectedDate ? (
                <div>
                  <p className="text-sm text-gray-600 mb-4 font-medium">
                    Available slots for{" "}
                    <span className="font-bold text-black">
                      {new Date(
                        currentMonth.getFullYear(),
                        currentMonth.getMonth(),
                        selectedDate,
                      ).toLocaleDateString("en-US", {
                        weekday: "long",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`
                          p-3 rounded-xl font-medium text-sm transition-all duration-200
                          ${
                            selectedTime === time
                              ? "bg-yellow-400 text-black shadow-lg scale-105"
                              : "bg-gray-100 text-black hover:bg-gray-200 hover:scale-105"
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <p className="text-gray-600 text-center py-8">
                  Select a date to see available time slots
                </p>
              )}
            </div>

            {/* Booking Summary Card */}
            <div className="bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-400 rounded-[2rem] p-6">
              <h2 className="text-xl font-bold text-black mb-4">
                Booking Summary
              </h2>

              <div className="space-y-4 mb-6">
                {/* Interviewer */}
                <div className="flex items-start gap-4">
                  <img
                    src={interviewer.image}
                    alt={interviewer.name}
                    className="w-12 h-12 rounded-xl object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <p className="text-gray-600 text-sm font-medium">
                      Interviewer
                    </p>
                    <p className="text-black font-semibold">
                      {interviewer.name}
                    </p>
                  </div>
                </div>

                {/* Date & Time */}
                {selectedDate && selectedTime && (
                  <>
                    <div className="border-t border-gray-300 pt-4">
                      <p className="text-gray-600 text-sm font-medium mb-1">
                        Date & Time
                      </p>
                      <p className="text-black font-semibold">
                        {new Date(
                          currentMonth.getFullYear(),
                          currentMonth.getMonth(),
                          selectedDate,
                        ).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "short",
                          day: "numeric",
                        })}{" "}
                        at {selectedTime}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="border-t border-gray-300 pt-4">
                      <p className="text-gray-600 text-sm font-medium mb-1">
                        Hourly Rate
                      </p>
                      <p className="text-2xl font-bold text-black">
                        ${interviewer.price}/hr
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Continue Button */}
              <button
                onClick={handleContinue}
                disabled={!selectedDate || !selectedTime}
                className={`
                  w-full py-3 rounded-2xl font-bold text-lg transition-all duration-300
                  ${
                    selectedDate && selectedTime
                      ? "bg-black text-white hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed opacity-50"
                  }
                `}
              >
                Go to Payment →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternalScheduler;
