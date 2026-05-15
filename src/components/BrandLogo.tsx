export function BrandLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M16 2 L16 16 L28 9 M16 2 L4 9 L16 16 M28 9 L28 23 L16 16 M28 23 L16 30 L16 16 M16 30 L4 23 L16 16 M4 23 L4 9"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
        <circle cx="16" cy="16" r="2.4" fill="currentColor" />
      </svg>
      <span className="font-display text-[1.15rem] tracking-tight leading-none">
        PixelPoets
      </span>
    </span>
  );
}
