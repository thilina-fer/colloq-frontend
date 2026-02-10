export default function Divider({ text = "or" }) {
  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-gray-200" />
      <span className="text-xs text-[#9CA3AF]">{text}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
  );
}
