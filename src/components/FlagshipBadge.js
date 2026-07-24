export default function FlagshipBadge({ className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-rust px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sand ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
        <path d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 21 12 17.77 5.8 21 7 14.14l-5-4.87 7.1-1.01L12 2z" />
      </svg>
      Flagship
    </span>
  );
}
