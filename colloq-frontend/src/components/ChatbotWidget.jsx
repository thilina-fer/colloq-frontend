import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      role: "bot",
      text: "Hi! 👋 Welcome to ColoQ. How can I help you today?",
      time: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Get bot response based on keywords
  const getBotResponse = (userMessage) => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("pricing") || lowerMessage.includes("price")) {
      return "We offer flexible pricing:\n• 1 Session: $29\n• 3 Sessions: $79\n• 5 Sessions: $129\n\nReady to book?";
    }
    if (lowerMessage.includes("book") || lowerMessage.includes("schedule")) {
      return "Great! You can book a session directly from your dashboard. Go to 'Upcoming Sessions' and click 'Book a Mock Interview'. Need help with anything else?";
    }
    if (
      lowerMessage.includes("how") &&
      (lowerMessage.includes("work") || lowerMessage.includes("it work"))
    ) {
      return "ColoQ connects you with experienced interviewers for mock interviews. Browse profiles, book sessions, and get detailed feedback. Simple as that! 🚀";
    }
    if (
      lowerMessage.includes("feedback") ||
      lowerMessage.includes("interview")
    ) {
      return "After each session, you'll receive detailed feedback covering your communication, technical knowledge, and overall performance. Perfect for improving!";
    }
    if (
      lowerMessage.includes("hello") ||
      lowerMessage.includes("hi") ||
      lowerMessage.includes("hey")
    ) {
      return "Hey there! 👋 How can I assist you today? You can ask about pricing, booking, or how ColoQ works.";
    }
    if (lowerMessage.includes("thank")) {
      return "You're welcome! 😊 Anything else I can help with?";
    }

    // Default responses
    const defaultResponses = [
      "That sounds interesting! Would you like to know about pricing or how to book a session?",
      "Great question! Check out our dashboard for more details, or feel free to ask me anything.",
      "Got it! Is there anything specific about ColoQ you'd like to know?",
      "I'm here to help! You can ask about our services, pricing, or booking a session.",
    ];
    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  // Handle send message
  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      role: "user",
      text: inputValue,
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing delay
    const delay = Math.random() * 300 + 600; // 600-900ms
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        role: "bot",
        text: getBotResponse(inputValue),
        time: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, delay);
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
    // Shift+Enter adds new line (default textarea behavior)
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-900 hover:bg-gray-800 text-yellow-300 shadow-lg transition-all duration-300 flex items-center justify-center hover:scale-110"
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="w-6 h-6 sm:w-7 sm:h-7" />
        ) : (
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 sm:bottom-20 right-6 z-50 w-[calc(100vw-2rem)] sm:w-96 h-[480px] rounded-2xl bg-white border border-gray-200 shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-yellow-300 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-gray-900" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white"></span>
              </div>
              <div className="text-left">
                <h3 className="text-sm sm:text-base font-semibold">
                  ColoQ Assistant
                </h3>
                <p className="text-xs text-gray-300">Always online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-gray-700 rounded-lg transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto bg-gray-50 px-4 sm:px-5 py-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-xs px-3 sm:px-4 py-2 sm:py-3 rounded-lg ${
                    msg.role === "user"
                      ? "bg-yellow-300 text-gray-900 rounded-br-none"
                      : "bg-gray-200 text-gray-900 rounded-bl-none"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                    {msg.text}
                  </p>
                  <p className="text-[10px] sm:text-xs mt-1 opacity-60">
                    {msg.time.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-200 text-gray-900 px-3 sm:px-4 py-2 sm:py-3 rounded-lg rounded-bl-none flex items-center gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-100"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="bg-white border-t border-gray-200 px-3 sm:px-4 py-3 sm:py-4 flex gap-2 sm:gap-3">
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type a message..."
              rows="1"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent resize-none max-h-20"
            />
            <button
              onClick={handleSendMessage}
              disabled={inputValue.trim() === ""}
              className="px-3 py-2 bg-yellow-300 text-gray-900 rounded-lg font-medium text-sm hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center justify-center"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        .animate-pulse {
          animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}
