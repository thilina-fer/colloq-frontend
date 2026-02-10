import React, { useState } from "react";
import { Lock, CreditCard, CheckCircle } from "lucide-react";

const CheckoutPage = ({ booking, onBack, onConfirm }) => {
  const [cardData, setCardData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const interviewer = booking.interviewer;
  const totalPrice = interviewer.price; // 1 hour session

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Format card number
    if (name === "cardNumber") {
      const formatted = value.replace(/\s/g, "").slice(0, 16);
      const withSpaces = formatted.replace(/(\d{4})/g, "$1 ").trim();
      setCardData((prev) => ({
        ...prev,
        [name]: withSpaces,
      }));
      return;
    }

    // Format expiry
    if (name === "expiry") {
      const formatted = value.replace(/\D/g, "").slice(0, 4);
      if (formatted.length >= 2) {
        const withSlash = `${formatted.slice(0, 2)}/${formatted.slice(2)}`;
        setCardData((prev) => ({
          ...prev,
          [name]: withSlash,
        }));
      } else {
        setCardData((prev) => ({
          ...prev,
          [name]: formatted,
        }));
      }
      return;
    }

    // Format CVV
    if (name === "cvv") {
      const formatted = value.replace(/\D/g, "").slice(0, 3);
      setCardData((prev) => ({
        ...prev,
        [name]: formatted,
      }));
      return;
    }

    setCardData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!cardData.name.trim()) newErrors.name = "Full name is required";
    if (
      !cardData.cardNumber ||
      cardData.cardNumber.replace(/\s/g, "").length !== 16
    ) {
      newErrors.cardNumber = "Valid 16-digit card number is required";
    }
    if (!cardData.expiry || cardData.expiry.length !== 5) {
      newErrors.expiry = "Expiry date is required (MM/YY)";
    }
    if (!cardData.cvv || cardData.cvv.length !== 3) {
      newErrors.cvv = "Valid 3-digit CVV is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirm = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      onConfirm({
        ...booking,
        paymentDetails: cardData,
        totalPrice,
        status: "confirmed",
      });
    }, 2000);
  };

  const dateObj = new Date(booking.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50 px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
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
            Complete Your Booking
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Review your details and complete the payment
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in slide-in-from-bottom duration-500">
          {/* Left: Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-6 sticky top-8 hover:border-yellow-400 transition-colors duration-300">
              <h2 className="text-xl font-bold text-black mb-6">
                Booking Summary
              </h2>

              <div className="space-y-5">
                {/* Interviewer Card */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    Interviewer
                  </p>
                  <div className="flex gap-3">
                    <img
                      src={interviewer.image}
                      alt={interviewer.name}
                      className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
                    />
                    <div>
                      <p className="font-bold text-black">{interviewer.name}</p>
                      <p className="text-sm text-gray-600">
                        {interviewer.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Date & Time */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    Date & Time
                  </p>
                  <p className="font-semibold text-black text-sm">
                    {formattedDate}
                  </p>
                  <p className="font-semibold text-black text-sm">
                    {booking.time}
                  </p>
                </div>

                {/* Interview Type */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    Interview Type
                  </p>
                  <p className="font-semibold text-black capitalize">
                    {booking.type === "skill-based" ? "Skill-Based" : "HR"}{" "}
                    Interview
                  </p>
                  {booking.role && (
                    <p className="text-sm text-gray-600 capitalize">
                      {booking.role}
                    </p>
                  )}
                </div>

                {/* Duration */}
                <div className="border-b border-gray-200 pb-5">
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    Duration
                  </p>
                  <p className="font-semibold text-black">1 Hour</p>
                </div>

                {/* Pricing Breakdown */}
                <div className="space-y-2 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Hourly Rate</span>
                    <span className="font-semibold text-black">
                      ${interviewer.price}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Platform Fee</span>
                    <span className="font-semibold text-black">$0</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 mt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-black">Total Amount</span>
                      <span className="text-3xl font-bold text-yellow-500">
                        ${totalPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Info */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex items-center gap-2 text-gray-600 text-sm">
                <Lock className="w-4 h-4" />
                <span>Secure payment powered by Stripe</span>
              </div>
            </div>
          </div>

          {/* Right: Payment Form */}
          <div className="lg:col-span-2">
            <div className="bg-white border-2 border-gray-200 rounded-[2rem] p-6 sm:p-8 hover:border-yellow-400 transition-colors duration-300">
              <h2 className="text-2xl font-bold text-black mb-2 flex items-center gap-2">
                <CreditCard className="w-6 h-6" />
                Payment Details
              </h2>
              <p className="text-gray-600 mb-8">
                Enter your card information to complete the booking
              </p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Full Name on Card
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={cardData.name}
                    onChange={handleInputChange}
                    className={`
                      w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300
                      focus:outline-none focus:border-yellow-400
                      ${errors.name ? "border-red-500 bg-red-50" : "border-gray-200 bg-gray-50"}
                    `}
                  />
                  {errors.name && (
                    <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Card Number */}
                <div>
                  <label className="block text-sm font-bold text-black mb-2">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    value={cardData.cardNumber}
                    onChange={handleInputChange}
                    maxLength="19"
                    className={`
                      w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300
                      focus:outline-none focus:border-yellow-400 font-mono
                      ${errors.cardNumber ? "border-red-500 bg-red-50" : "border-gray-200 bg-gray-50"}
                    `}
                  />
                  {errors.cardNumber && (
                    <p className="text-red-600 text-sm mt-1">
                      {errors.cardNumber}
                    </p>
                  )}
                </div>

                {/* Expiry & CVV Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Expiry Date */}
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={cardData.expiry}
                      onChange={handleInputChange}
                      maxLength="5"
                      className={`
                        w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300
                        focus:outline-none focus:border-yellow-400
                        ${errors.expiry ? "border-red-500 bg-red-50" : "border-gray-200 bg-gray-50"}
                      `}
                    />
                    {errors.expiry && (
                      <p className="text-red-600 text-sm mt-1">
                        {errors.expiry}
                      </p>
                    )}
                  </div>

                  {/* CVV */}
                  <div>
                    <label className="block text-sm font-bold text-black mb-2">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={cardData.cvv}
                      onChange={handleInputChange}
                      maxLength="3"
                      className={`
                        w-full px-4 py-3 rounded-xl border-2 transition-colors duration-300
                        focus:outline-none focus:border-yellow-400
                        ${errors.cvv ? "border-red-500 bg-red-50" : "border-gray-200 bg-gray-50"}
                      `}
                    />
                    {errors.cvv && (
                      <p className="text-red-600 text-sm mt-1">{errors.cvv}</p>
                    )}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      className="mt-1 w-5 h-5 rounded cursor-pointer"
                      defaultChecked
                      disabled
                    />
                    <span className="text-sm text-gray-700">
                      I agree to the{" "}
                      <a
                        href="#"
                        className="text-yellow-600 font-semibold hover:underline"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="text-yellow-600 font-semibold hover:underline"
                      >
                        Privacy Policy
                      </a>
                    </span>
                  </label>
                </div>

                {/* Confirm Button */}
                <button
                  onClick={handleConfirm}
                  disabled={isLoading}
                  className={`
                    w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300
                    flex items-center justify-center gap-2
                    ${
                      isLoading
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-yellow-400 text-black hover:shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
                    }
                  `}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      Confirm & Pay ${totalPrice}
                    </>
                  )}
                </button>

                {/* Info Text */}
                <p className="text-center text-gray-600 text-sm">
                  This is a demo. Use card number 4242 4242 4242 4242 for
                  testing.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
