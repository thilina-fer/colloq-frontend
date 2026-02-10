import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import InputField from "../ui/InputField";
import PrimaryButton from "../ui/PrimaryButton";
import RoleToggle from "./RoleToggle";
import SocialAuthButtons from "./SocialAuthButtons";
import Divider from "./Divider";

export default function AuthCard({ role, onRoleChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});

  const roleText = {
    candidate: {
      title: "ColoQ",
      subtitle: "Sign in to find opportunities",
      buttonText: "Sign in as Candidate",
      guestText: "Continue as Guest",
    },
    interviewer: {
      title: "ColoQ",
      subtitle: "Sign in to manage interviews",
      buttonText: "Sign in as Interviewer",
      guestText: "Apply as Interviewer",
    },
  };

  const { title, subtitle, buttonText, guestText } = roleText[role];

  const validateForm = () => {
    const newErrors = {};
    if (!email.trim()) newErrors.email = "Email is required";
    if (!password.trim()) newErrors.password = "Password is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    console.log({ action: "login_attempt", email, password, rememberMe, role });
  };

  const handleGuest = () => {
    console.log({
      action:
        guestText === "Apply as Interviewer"
          ? "apply_as_interviewer"
          : "continue_as_guest",
      role,
    });
  };

  return (
    <div className="w-full max-w-[380px]">
      <div className="bg-white rounded-2xl shadow-sm p-6 border border-gray-100">
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-semibold text-[#1F2937]">{title}</h1>
          <p className="text-sm text-[#9CA3AF] mt-1">{subtitle}</p>
        </div>

        {/* Role Toggle */}
        <div className="mb-4">
          <RoleToggle role={role} onRoleChange={onRoleChange} />
        </div>

        {/* Social Auth */}
        <SocialAuthButtons />

        {/* Divider */}
        <Divider text="or continue with email" />

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          <InputField
            id="email"
            label=""
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={Mail}
            error={errors.email}
          />

          <InputField
            id="password"
            label=""
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={Lock}
            error={errors.password}
          />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 border border-gray-300 rounded accent-[#FDE047]"
              />
              <span className="text-sm text-[#9CA3AF]">Remember me</span>
            </label>
            <a
              href="#forgot"
              className="text-sm text-[#9CA3AF] hover:text-[#1F2937]"
            >
              Forgot?
            </a>
          </div>

          <PrimaryButton type="submit" fullWidth>
            {buttonText}
          </PrimaryButton>
        </form>

        {/* Secondary action */}
        <div className="mt-3">
          <button
            onClick={handleGuest}
            className="w-full py-2 rounded-md text-sm font-medium text-[#1F2937] hover:text-[#111827] transition"
          >
            {guestText}
          </button>
        </div>
      </div>
    </div>
  );
}
