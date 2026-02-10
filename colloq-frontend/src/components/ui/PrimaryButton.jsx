export default function PrimaryButton({
  children,
  onClick,
  type = "button",
  disabled = false,
  variant = "primary",
  fullWidth = false,
}) {
  const baseStyles =
    "px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-[#FDE047] hover:bg-yellow-500 text-[#1F2937] focus:ring-yellow-300 shadow-sm",
    secondary:
      "bg-white border border-gray-200 hover:bg-gray-50 text-[#1F2937] focus:ring-gray-200",
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${disabledClass}`}
    >
      {children}
    </button>
  );
}
