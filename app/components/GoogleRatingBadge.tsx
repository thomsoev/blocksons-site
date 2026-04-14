interface GoogleRatingBadgeProps {
  variant?: 'light' | 'dark';
}

export default function GoogleRatingBadge({ variant = 'dark' }: GoogleRatingBadgeProps) {
  const textColor = variant === 'dark' ? 'text-offwhite' : 'text-charcoal';
  const subColor = variant === 'dark' ? 'text-offwhite/70' : 'text-midgray';

  return (
    <a
      href="https://maps.google.com/?q=Blocksons+LLC+Morrisonville+NY"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-3 group`}
      aria-label="5.0 stars on Google — 49 reviews"
    >
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg
            key={i}
            className="w-5 h-5 text-amber fill-amber"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <div>
        <div className={`font-bold font-oswald text-lg leading-none ${textColor}`}>
          5.0
        </div>
        <div className={`text-xs ${subColor} group-hover:underline`}>
          49 Google Reviews
        </div>
      </div>
    </a>
  );
}
