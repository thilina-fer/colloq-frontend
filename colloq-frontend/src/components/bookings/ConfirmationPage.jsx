import React from "react";
import {
  CheckCircle,
  Download,
  Mail,
  Calendar,
  Clock,
  User,
} from "lucide-react";

const ConfirmationPage = ({ booking, onNewBooking, onDashboard }) => {
  const interviewer = booking.interviewer;
  const dateObj = new Date(booking.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-green-50 to-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Icon */}
        <div className="flex justify-center mb-8 animate-bounce">
          <div className="relative">
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </div>
        </div>

        {/* Success Message */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-green-600 mb-3">
            Booking Confirmed!
          </h1>
          <p className="text-lg text-gray-700 mb-2">
            Your interview has been successfully scheduled
          </p>
          <p className="text-gray-600">
            A confirmation email has been sent to your registered email address
          </p>
        </div>

        {/* Booking Details Card */}
        <div className="bg-white border-2 border-green-300 rounded-[2.5rem] p-8 mb-8 animate-in slide-in-from-bottom duration-500">
          <h2 className="text-2xl font-bold text-black mb-8">
            Interview Details
          </h2>

          <div className="space-y-6">
            {/* Booking ID */}
            <div className="bg-gray-50 p-4 rounded-xl">
              <p className="text-sm text-gray-600 font-medium mb-1">
                Booking ID
              </p>
              <p className="font-mono font-bold text-black text-lg">
                COLLOQ-
                {Math.random().toString(36).substring(2, 11).toUpperCase()}
              </p>
            </div>

            {/* Interview Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Interviewer */}
              <div className="flex gap-4">
                <img
                  src={interviewer.image}
                  alt={interviewer.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div>
                  <p className="text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Interviewer
                  </p>
                  <p className="font-bold text-black">{interviewer.name}</p>
                  <p className="text-sm text-gray-600">{interviewer.role}</p>
                </div>
              </div>

              {/* Date & Time */}
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Date & Time
                </p>
                <p className="font-bold text-black">{formattedDate}</p>
                <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
                  <Clock className="w-4 h-4" />
                  {booking.time}
                </p>
              </div>
            </div>

            {/* Interview Type */}
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600 font-medium mb-2">
                Interview Type
              </p>
              <div className="flex items-center gap-4">
                <span className="bg-yellow-100 text-yellow-900 px-4 py-2 rounded-xl font-medium capitalize">
                  {booking.type === "skill-based"
                    ? "Skill-Based Interview"
                    : "HR Interview"}
                </span>
                {booking.role && (
                  <span className="bg-blue-100 text-blue-900 px-4 py-2 rounded-xl font-medium capitalize">
                    {booking.role}
                  </span>
                )}
              </div>
            </div>

            {/* Price Summary */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700 font-medium">Hourly Rate</span>
                <span className="font-bold text-black">
                  ${interviewer.price}
                </span>
              </div>
              <div className="flex items-center justify-between border-t border-gray-200 pt-4 mt-4">
                <span className="font-bold text-black text-lg">
                  Total Amount Paid
                </span>
                <span className="text-3xl font-bold text-green-600">
                  ${booking.totalPrice}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg mb-8">
          <h3 className="font-bold text-black mb-3">What's Next?</h3>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              ✓ You will receive a meeting link 24 hours before the interview
            </li>
            <li>✓ Join the meeting 5 minutes before the scheduled time</li>
            <li>✓ Make sure your camera and microphone are working properly</li>
            <li>✓ Have a quiet, well-lit space ready for the interview</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onDashboard}
            className="flex-1 bg-black text-white font-bold py-4 px-6 rounded-2xl hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Go to Dashboard
          </button>
          <button
            onClick={onNewBooking}
            className="flex-1 bg-white border-2 border-black text-black font-bold py-4 px-6 rounded-2xl hover:bg-gray-50 transition-all duration-300"
          >
            Book Another Interview
          </button>
        </div>

        {/* Download Receipt Link */}
        <div className="text-center mt-8">
          <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors flex items-center justify-center gap-2 mx-auto">
            <Download className="w-4 h-4" />
            Download Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
