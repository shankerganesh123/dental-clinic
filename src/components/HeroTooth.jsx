import { Sparkles } from 'lucide-react';

export default function HeroTooth() {
  return (
    <div className="relative mx-auto flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
      <div className="absolute inset-0 rounded-full bg-sky" />

      <Sparkles
        className="animate-sparkle absolute left-4 top-8 h-6 w-6 text-teal"
        style={{ animationDelay: '0.2s' }}
      />
      <Sparkles
        className="animate-sparkle absolute right-6 top-16 h-4 w-4 text-brand"
        style={{ animationDelay: '0.9s' }}
      />
      <Sparkles
        className="animate-sparkle absolute bottom-10 left-10 h-5 w-5 text-teal"
        style={{ animationDelay: '1.5s' }}
      />

      <div className="animate-tooth-float relative">
        <svg viewBox="0 0 64 64" className="h-40 w-40 drop-shadow-lg sm:h-48 sm:w-48">
          <defs>
            <clipPath id="tooth-clip">
              <path d="M32 9c-5.4 0-8.2 3.6-12.6 3.6-6.4 0-11.4-4.3-11.4 6.4 0 12 4.2 22.6 8.4 30.8 2.8 5.4 5.4 7.2 7.2 7.2 2.4 0 3-7.4 4-13.2.8-4.6 1.8-6.8 4.4-6.8s3.6 2.2 4.4 6.8c1 5.8 1.6 13.2 4 13.2 1.8 0 4.4-1.8 7.2-7.2 4.2-8.2 8.4-18.8 8.4-30.8 0-10.7-5-6.4-11.4-6.4C40.2 12.6 37.4 9 32 9Z" />
            </clipPath>
          </defs>

          <path
            d="M32 9c-5.4 0-8.2 3.6-12.6 3.6-6.4 0-11.4-4.3-11.4 6.4 0 12 4.2 22.6 8.4 30.8 2.8 5.4 5.4 7.2 7.2 7.2 2.4 0 3-7.4 4-13.2.8-4.6 1.8-6.8 4.4-6.8s3.6 2.2 4.4 6.8c1 5.8 1.6 13.2 4 13.2 1.8 0 4.4-1.8 7.2-7.2 4.2-8.2 8.4-18.8 8.4-30.8 0-10.7-5-6.4-11.4-6.4C40.2 12.6 37.4 9 32 9Z"
            fill="#FFFFFF"
            stroke="#DCE6F7"
            strokeWidth="1.5"
          />

          <g clipPath="url(#tooth-clip)">
            <rect
              className="animate-shine"
              x="-10"
              y="0"
              width="16"
              height="64"
              fill="#EAF2FF"
              opacity="0.85"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
