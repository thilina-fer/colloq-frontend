export default function InputField({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  icon: Icon,
  required = false,
  error,
}) {
  return (
    <div className="space-y-2">
      {label && (
        <label
          htmlFor={id}
          className="block text-xs font-medium text-[#1F2937]"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            <Icon size={16} />
          </div>
        )}
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full ${Icon ? "pl-10" : "pl-3"} pr-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-md text-[#1F2937] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#FDE047] focus:bg-white transition ${
            error ? "border-red-400 bg-red-50" : ""
          }`}
          aria-invalid={error ? "true" : "false"}
        />
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    </div>
  );
}
