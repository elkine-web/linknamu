function Mascot({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <circle cx="26" cy="26" r="13" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      <circle cx="74" cy="26" r="13" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      <ellipse cx="50" cy="58" rx="40" ry="35" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="2" />
      <circle cx="36" cy="55" r="4" fill="#3F3F46" />
      <circle cx="64" cy="55" r="4" fill="#3F3F46" />
      <ellipse cx="25" cy="67" rx="7" ry="4.5" fill="#BAE6FD" opacity="0.85" />
      <ellipse cx="75" cy="67" rx="7" ry="4.5" fill="#BAE6FD" opacity="0.85" />
      <path d="M40 67 Q50 74 60 67" stroke="#3F3F46" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

const mascots = [
  { className: "left-[6%] top-[10%] w-16 animate-float-a" },
  { className: "right-[8%] top-[16%] w-20 animate-float-b hidden sm:block" },
  { className: "left-[12%] bottom-[14%] w-14 animate-float-c" },
  { className: "right-[12%] bottom-[10%] w-16 animate-float-a hidden sm:block" },
  { className: "left-[45%] top-[4%] w-10 animate-float-b hidden sm:block" },
  { className: "right-[38%] bottom-[4%] w-12 animate-float-c hidden sm:block" },
];

export default function FloatingMascots() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {mascots.map((m, i) => (
        <Mascot key={i} className={`absolute opacity-70 drop-shadow-sm ${m.className}`} />
      ))}
    </div>
  );
}
